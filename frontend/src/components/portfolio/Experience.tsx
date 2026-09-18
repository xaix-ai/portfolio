import { experiences } from "@/lib/portfolio-data";
import { Reveal } from "./Reveal";
import { SectionHead } from "./SectionHead";

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-20 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHead
          kicker="journey"
          title="Experience"
          sub="The places and moments that helped me learn and grow — more chapters coming soon."
        />

        <div className="relative mx-auto max-w-3xl">
          <div className="absolute bottom-0 left-4 top-0 w-px bg-border sm:left-6" />
          <div className="space-y-8">
            {experiences.map((item, i) => (
              <Reveal key={item.title} delay={i * 100}>
                <div className="relative pl-12 sm:pl-16">
                  <span className="absolute left-[0.55rem] top-2.5 size-3 rounded-full bg-primary shadow-pop sm:left-[1.15rem]" />
                  <div className="card-soft p-6 transition-transform duration-300 hover:-translate-y-1">
                    <span className="text-xs font-bold uppercase tracking-widest text-primary">
                      {item.period}
                    </span>
                    <h3 className="mt-1.5 font-display text-xl font-bold">
                      {item.title}
                    </h3>
                    <p className="text-sm font-semibold text-muted-foreground">
                      {item.org}
                    </p>
                    <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
