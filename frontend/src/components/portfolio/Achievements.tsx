import { Trophy } from "lucide-react";
import { achievements } from "@/lib/portfolio-data";
import { Reveal } from "./Reveal";
import { SectionHead } from "./SectionHead";

export function Achievements() {
  return (
    <section id="achievements" className="scroll-mt-20 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHead
          kicker="achievements"
          title="Little wins along the way"
          sub="Small milestones that keep me building and learning."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {achievements.map((item, i) => (
            <Reveal key={item.title} delay={i * 80}>
              <article className="card-soft flex h-full flex-col p-6 transition-transform duration-300 hover:-translate-y-1">
                <span className="grid size-11 place-items-center rounded-2xl bg-accent text-accent-foreground">
                  <Trophy className="size-5" />
                </span>
                <h3 className="mt-4 font-display text-lg font-bold leading-snug">
                  {item.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {item.detail}
                </p>
                <span className="mt-4 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                  {item.year}
                </span>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
