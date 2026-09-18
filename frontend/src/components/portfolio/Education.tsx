import { GraduationCap } from "lucide-react";
import { education } from "@/lib/portfolio-data";
import { Reveal } from "./Reveal";
import { SectionHead } from "./SectionHead";

export function Education() {
  return (
    <section id="education" className="scroll-mt-20 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHead
          kicker="school days"
          title="Education"
          sub="A quick look at my academic journey so far."
        />

        <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2">
          {education.map((item, i) => (
            <Reveal key={item.degree} delay={i * 120}>
              <div className="card-soft h-full p-7 transition-transform duration-300 hover:-translate-y-1.5">
                <div className="flex items-center justify-between gap-3">
                  <span className="grid size-11 place-items-center rounded-2xl bg-secondary text-primary shadow-soft">
                    <GraduationCap className="size-5" />
                  </span>
                  <span className="rounded-full bg-accent px-3 py-1 text-xs font-bold text-accent-foreground">
                    {item.period}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-xl font-bold">
                  {item.degree}
                </h3>
                <p className="text-sm font-semibold text-muted-foreground">
                  {item.school}
                </p>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
                <ul className="mt-4 space-y-2">
                  {item.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex items-start gap-2.5 text-sm text-muted-foreground"
                    >
                      <span className="mt-1.5 size-2 shrink-0 rounded-full bg-candy" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
