import { Github, Linkedin, Mail, Sparkle } from "lucide-react";
import { profile } from "@/lib/portfolio-data";
import { Reveal } from "./Reveal";

export function Contact() {
  return (
    <>
      <section id="contact" className="scroll-mt-20 py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal>
            <div className="card-soft relative mx-auto max-w-3xl overflow-hidden p-10 text-center sm:p-14">
              <div className="absolute -left-16 -top-16 size-48 rounded-full bg-secondary blur-3xl" />
              <div className="absolute -bottom-16 -right-16 size-48 rounded-full bg-accent blur-3xl" />
              <div className="relative">
                <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-secondary-foreground">
                  <Sparkle className="size-3.5 text-primary" />
                  say hi
                </span>
                <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
                  Let's build something{" "}
                  <span className="text-gradient">fun</span> together
                </h2>
                <p className="mx-auto mt-4 max-w-md leading-relaxed text-muted-foreground">
                  Whether it's a project idea, a question, or just to say hello
                  — my inbox is always open and I do reply.
                </p>
                <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                  <a
                    href={`mailto:${profile.email}`}
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-candy to-primary px-6 py-3 font-semibold text-primary-foreground shadow-pop transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glow"
                  >
                    <Mail className="size-4" />
                    {profile.email}
                  </a>
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub profile"
                    className="grid size-12 place-items-center rounded-full border border-border bg-card shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/50 hover:text-primary"
                  >
                    <Github className="size-5" />
                  </a>
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn profile"
                    className="grid size-12 place-items-center rounded-full border border-border bg-card shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/50 hover:text-primary"
                  >
                    <Linkedin className="size-5" />
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <footer className="border-t border-border py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-2.5 px-4 text-center">
          <p className="flex items-center gap-2 font-display text-lg font-bold">
            Thanks for stopping by
            <Sparkle className="twinkle size-4 text-primary" />
          </p>
          <p className="text-sm text-muted-foreground">
            © 2026 {profile.name} · made with pink & curiosity
          </p>
        </div>
      </footer>
    </>
  );
}
