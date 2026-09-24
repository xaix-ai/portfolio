import { ArrowDown, Mail, Sparkle } from "lucide-react";
import { profile } from "@/lib/portfolio-data";
import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-16"
    >
      <div className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6">
        {/* intro copy */}
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-muted-foreground shadow-soft">
              <Sparkle className="size-3.5 text-primary" />
              welcome to my corner
            </span>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="mt-6 font-display text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl xl:text-7xl">
              Hi, I'm
              <br />
              <span className="text-gradient">{profile.name}</span>
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mx-auto mt-6 max-w-md text-lg leading-relaxed text-muted-foreground">
              An {profile.role}, who loves building everything I have in mind.   
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground shadow-pop transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glow"
              >
                See my projects
                <ArrowDown className="size-4 transition-transform duration-300 group-hover:translate-y-0.5" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 font-semibold text-foreground shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/50"
              >
                Say hi
                <Mail className="size-4 text-primary" />
              </a>
            </div>
          </Reveal>
        </div>

      </div>
    </section>
  );
}
