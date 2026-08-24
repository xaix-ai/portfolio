import { ArrowDown, Mail, Sparkle, Sparkles } from "lucide-react";
import { profile } from "@/lib/portfolio-data";
import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-16"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:gap-8">
        {/* intro copy */}
        <div className="text-center lg:text-left">
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
            <p className="mx-auto mt-6 max-w-md text-lg leading-relaxed text-muted-foreground lg:mx-0">
              An {profile.role} who loves building soft, playful things on the
              web — still learning, always experimenting.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-candy to-primary px-6 py-3 font-semibold text-primary-foreground shadow-pop transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glow"
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

        {/* interactive blob */}
        <Reveal delay={250} className="relative">
          <div className="hero-blob-wrap relative mx-auto w-fit cursor-pointer select-none">
            {/* orbiting bits */}
            <div className="spin-slow absolute -inset-8 sm:-inset-10">
              <span className="absolute left-1/2 top-0 size-3 -translate-x-1/2 rounded-full bg-primary shadow-pop" />
              <span className="absolute bottom-6 left-2 size-2 rounded-full bg-candy" />
              <Sparkle className="twinkle absolute right-1 top-10 size-5 text-primary" />
            </div>

            {/* the blob itself — hover it! */}
            <div
              className="hero-blob float-a relative size-64 sm:size-80 lg:size-96"
              style={{
                background: "var(--gradient-dream)",
                boxShadow: "var(--shadow-glow)",
              }}
            >
              <div className="absolute left-[16%] top-[13%] size-1/3 rounded-full bg-card/60 blur-2xl" />
              <div className="absolute bottom-[15%] right-[15%] size-1/4 rounded-full bg-primary/30 blur-xl" />
              <div className="absolute left-[45%] top-[48%] size-3 rounded-full bg-primary/40 blur-sm" />
            </div>

            <Sparkles className="float-b absolute -left-12 top-4 size-7 text-candy" />
            <Sparkle className="twinkle absolute -right-8 bottom-10 size-5 text-primary" />

            <p className="bob mt-10 text-center text-sm italic text-muted-foreground">
              psst… hover the blob ✦
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
