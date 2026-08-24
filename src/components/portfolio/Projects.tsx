import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, ExternalLink, Github } from "lucide-react";
import { projects } from "@/lib/portfolio-data";
import { Reveal } from "./Reveal";
import { SectionHead } from "./SectionHead";

type Phase = "" | "flip-out" | "flip-in";

export function Projects() {
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState<Phase>("");
  const timers = useRef<number[]>([]);
  const busy = phase !== "";

  useEffect(() => {
    return () => timers.current.forEach((t) => window.clearTimeout(t));
  }, []);

  const flipTo = (next: number) => {
    if (busy) return;
    setPhase("flip-out");
    timers.current.push(
      window.setTimeout(() => {
        setIndex(next);
        setPhase("flip-in");
      }, 320),
      window.setTimeout(() => setPhase(""), 680),
    );
  };

  const go = (dir: 1 | -1) =>
    flipTo((index + dir + projects.length) % projects.length);

  const project = projects[index] ?? projects[0]!;

  return (
    <section id="projects" className="scroll-mt-20 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHead
          kicker="projects"
          title="Things I've built"
          sub="Click the arrows — each project flips in like a card trick. The live demos open the real deployed apps."
        />

        <Reveal>
          <div className="mx-auto max-w-4xl" style={{ perspective: "1400px" }}>
            <div
              key={index}
              className={`card-soft overflow-hidden ${phase}`}
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="grid md:grid-cols-2">
                <div className="relative overflow-hidden bg-secondary">
                  <img
                    src={project.image}
                    alt={`${project.title} app preview`}
                    loading="lazy"
                    width={1200}
                    height={800}
                    className="h-56 w-full object-cover transition-transform duration-500 hover:scale-105 md:h-full"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-card/90 px-3 py-1 text-xs font-bold text-primary shadow-soft backdrop-blur">
                    {String(index + 1).padStart(2, "0")} /{" "}
                    {String(projects.length).padStart(2, "0")}
                  </span>
                </div>
                <div className="flex flex-col justify-center p-7 sm:p-9">
                  <h3 className="font-display text-2xl font-extrabold sm:text-3xl">
                    {project.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-candy to-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-pop transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glow"
                    >
                      Live Demo
                      <ExternalLink className="size-4" />
                    </a>
                    <a
                      href={project.code}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40"
                    >
                      <Github className="size-4" />
                      View Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* controls */}
        <div className="mt-8 flex items-center justify-center gap-5">
          <button
            onClick={() => go(-1)}
            disabled={busy}
            aria-label="Previous project"
            className="grid size-12 place-items-center rounded-full border border-border bg-card shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/50 hover:text-primary disabled:opacity-40"
          >
            <ArrowLeft className="size-5" />
          </button>
          <div className="flex items-center gap-2">
            {projects.map((p, i) => (
              <button
                key={p.title}
                onClick={() => i !== index && flipTo(i)}
                disabled={busy}
                aria-label={`Go to ${p.title}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  i === index
                    ? "w-8 bg-primary"
                    : "w-2.5 bg-border hover:bg-candy"
                }`}
              />
            ))}
          </div>
          <button
            onClick={() => go(1)}
            disabled={busy}
            aria-label="Next project"
            className="grid size-12 place-items-center rounded-full border border-border bg-card shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/50 hover:text-primary disabled:opacity-40"
          >
            <ArrowRight className="size-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
