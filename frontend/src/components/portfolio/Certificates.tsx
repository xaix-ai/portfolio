import { Award, ExternalLink } from "lucide-react";
import { certificates } from "@/lib/portfolio-data";
import { Reveal } from "./Reveal";
import { SectionHead } from "./SectionHead";

export function Certificates() {
  return (
    <section id="certificates" className="scroll-mt-20 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHead
          kicker="certificates"
          title="Things I've completed"
          sub="Courses, trainings and workshops that pushed me a little further."
        />

        <div className="grid gap-5 sm:grid-cols-2">
          {certificates.map((cert, i) => (
            <Reveal key={cert.title} delay={i * 80}>
              <article className="card-soft group flex h-full items-start gap-4 p-6 transition-transform duration-300 hover:-translate-y-1">
                <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-secondary text-primary">
                  <Award className="size-5" />
                </span>
                <div className="min-w-0">
                  <h3 className="font-display text-lg font-bold leading-snug">
                    {cert.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {cert.issuer} · {cert.date}
                  </p>
                  {cert.credential && (
                    <a
                      href={cert.credential}
                      className="story-link mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-primary"
                    >
                      View credential
                      <ExternalLink className="size-3.5" />
                    </a>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
