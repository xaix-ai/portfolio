import { Sparkles } from "lucide-react";
import avatar from "@/assets/avatar.png";
import { aboutFacts, aboutInterests, aboutStory, profile } from "@/lib/portfolio-data";
import { Reveal } from "./Reveal";
import { SectionHead } from "./SectionHead";

export function About() {
  return (
    <section id="about" className="scroll-mt-20 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHead
          kicker="about me"
          title="A little bit about me"
          sub="The slightly longer version of “IT student who likes making things.”"
        />

        <div className="grid gap-6 lg:grid-cols-5">
          {/* intro card */}
          <Reveal className="lg:col-span-3">
            <div className="card-soft relative h-full overflow-hidden p-8 sm:p-10">
              <div className="absolute -right-16 -top-16 size-48 rounded-full bg-secondary blur-2xl" />
              <div className="relative flex flex-col items-center gap-8 sm:flex-row sm:items-start">
                <div className="relative shrink-0">
                  <div className="size-36 rotate-[-4deg] overflow-hidden rounded-[2.5rem] border-4 border-secondary bg-gradient-to-br from-secondary to-accent shadow-pop transition-transform duration-300 hover:rotate-0">
                    <img
                      src={avatar}
                      alt={`Illustrated avatar of ${profile.name}`}
                      loading="lazy"
                      width={816}
                      height={816}
                      className="size-full object-cover"
                    />
                  </div>
                  <span className="bob absolute -right-3 -top-3 grid size-10 rotate-12 place-items-center rounded-2xl bg-primary text-primary-foreground shadow-pop">
                    <Sparkles className="size-5" />
                  </span>
                </div>
                <div className="space-y-4 text-center sm:text-left">
                  {aboutStory.map((paragraph, i) => (
                    <p
                      key={i}
                      className="leading-relaxed text-muted-foreground"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          {/* sticker cards */}
          <div className="flex flex-col gap-6 lg:col-span-2">
            <Reveal delay={120}>
              <div className="card-soft rotate-1 p-6 transition-transform duration-300 hover:rotate-0">
                <h3 className="font-display text-lg font-bold">
                  Currently into
                </h3>
                <div className="mt-4 flex flex-wrap gap-2.5">
                  {aboutInterests.map((item) => (
                    <span
                      key={item.label}
                      className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-3.5 py-1.5 text-sm font-medium text-secondary-foreground transition-all duration-200 hover:-translate-y-1 hover:shadow-pop"
                    >
                      <item.icon className="size-3.5 text-primary" />
                      {item.label}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <div className="card-soft -rotate-1 p-6 transition-transform duration-300 hover:rotate-0">
                <h3 className="font-display text-lg font-bold">
                  Fun facts, probably true
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {aboutFacts.map((fact) => (
                    <li
                      key={fact}
                      className="flex items-start gap-2.5 text-sm text-muted-foreground"
                    >
                      <span className="mt-1.5 size-2 shrink-0 rounded-full bg-candy" />
                      {fact}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
