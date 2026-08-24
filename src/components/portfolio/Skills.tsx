import { skillGroups, type SkillLevel } from "@/lib/portfolio-data";
import { Reveal } from "./Reveal";
import { SectionHead } from "./SectionHead";

const levelDot: Record<SkillLevel, string> = {
  learning: "bg-blush",
  practicing: "bg-candy",
  comfortable: "bg-primary",
};

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHead
          kicker="toolbox"
          title="Skills I'm growing"
          sub="Still collecting tools for my developer toolbox — every project adds a new one. Hover a chip to see where I'm at."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {skillGroups.map((group, gi) => (
            <Reveal key={group.title} delay={gi * 120}>
              <div className="card-soft h-full p-6 transition-transform duration-300 hover:-translate-y-1.5">
                <div className="flex items-center gap-3">
                  <span className="grid size-11 place-items-center rounded-2xl bg-secondary text-primary shadow-soft">
                    <group.icon className="size-5" />
                  </span>
                  <h3 className="font-display text-xl font-bold">
                    {group.title}
                  </h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {group.blurb}
                </p>
                <div className="mt-5 flex flex-wrap gap-2.5">
                  {group.skills.map((skill) => (
                    <span key={skill.name} className="group relative">
                      <span className="flex cursor-default items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5 text-sm font-medium shadow-sm transition-all duration-200 hover:-translate-y-1 hover:rotate-[-2deg] hover:border-primary/40 hover:shadow-pop">
                        <span
                          className={`size-2 rounded-full ${levelDot[skill.level]}`}
                        />
                        {skill.name}
                      </span>
                      <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-foreground px-2.5 py-1 text-[11px] font-semibold text-background opacity-0 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:opacity-100">
                        {skill.level}
                      </span>
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex items-center gap-4 text-[11px] font-medium text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <span className="size-2 rounded-full bg-primary" />
                    comfortable
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="size-2 rounded-full bg-candy" />
                    practicing
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="size-2 rounded-full bg-blush" />
                    learning
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
