import { Sparkle } from "lucide-react";

/* Soft floating background shapes + sparkles, fixed behind everything */
export function Decor() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="float-a absolute -left-32 top-24 size-96 rounded-full bg-primary/10 blur-3xl" />
      <div className="float-b absolute -right-24 top-1/3 size-80 rounded-full bg-candy/15 blur-3xl" />
      <div className="float-a absolute bottom-0 left-1/4 size-72 rounded-full bg-accent/25 blur-3xl" />
      <Sparkle className="twinkle absolute left-[10%] top-[24%] size-4 text-primary/40" />
      <Sparkle
        className="twinkle absolute right-[14%] top-[16%] size-3 text-candy/60"
        style={{ animationDelay: "0.8s" }}
      />
      <Sparkle
        className="twinkle absolute bottom-[22%] left-[18%] size-3 text-primary/30"
        style={{ animationDelay: "1.6s" }}
      />
      <span className="float-b absolute right-[22%] top-[58%] size-2 rounded-full bg-candy/50" />
      <span className="float-a absolute left-[42%] top-[12%] size-1.5 rounded-full bg-primary/40" />
    </div>
  );
}
