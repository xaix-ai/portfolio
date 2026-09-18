import { useEffect, useState } from "react";
import { Menu, Sparkles, X } from "lucide-react";
import { Link, useRouterState } from "@tanstack/react-router";
import { navLinks } from "@/lib/portfolio-data";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const base = pathname === "/" ? "" : "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-soft" : ""
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a
          href={`${base}#home`}
          className="flex items-center gap-2.5 font-display text-lg font-extrabold tracking-tight"
        >
          <span className="grid size-8 place-items-center rounded-xl bg-primary text-primary-foreground shadow-pop">
            <Sparkles className="size-4" />
          </span>
          <span>
            xynex<span className="text-gradient">kim</span>
          </span>
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`${base}#${link.id}`}
                className="story-link text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <Link
              to="/messages"
              className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-pop transition-transform duration-300 hover:-translate-y-0.5"
            >
              Messages
            </Link>
          </li>
        </ul>

        <button
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          className="grid size-10 place-items-center rounded-full border border-border bg-card shadow-soft transition-transform hover:scale-105 lg:hidden"
        >
          <Menu className="size-5" />
        </button>
      </nav>

      {open && (
        <div className="fixed inset-0 z-50 flex flex-col bg-background/90 backdrop-blur-xl lg:hidden">
          <div className="flex h-16 items-center justify-between px-4 sm:px-6">
            <span className="flex items-center gap-2.5 font-display text-lg font-extrabold tracking-tight">
              <span className="grid size-8 place-items-center rounded-xl bg-primary text-primary-foreground shadow-pop">
                <Sparkles className="size-4" />
              </span>
              <span>
                xynex<span className="text-gradient">kim</span>
              </span>
            </span>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="grid size-10 place-items-center rounded-full border border-border bg-card shadow-soft"
            >
              <X className="size-5" />
            </button>
          </div>
          <ul className="flex flex-1 flex-col items-center justify-center gap-6 pb-16">
            {navLinks.map((link, i) => (
              <li
                key={link.id}
                className="animate-fade-in"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <a
                  href={`${base}#${link.id}`}
                  onClick={() => setOpen(false)}
                  className="font-display text-3xl font-bold text-foreground transition-colors hover:text-primary"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="animate-fade-in">
              <Link
                to="/messages"
                onClick={() => setOpen(false)}
                className="rounded-full bg-primary px-6 py-3 font-display text-2xl font-bold text-primary-foreground shadow-pop"
              >
                Messages
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
