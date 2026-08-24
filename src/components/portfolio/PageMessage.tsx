import { useEffect, useState } from "react";
import { Sparkles, X } from "lucide-react";

/*
 * The little floating guide bubble that follows the visitor
 * through every section. Keyed by section so it re-animates
 * each time the message changes.
 */
export function PageMessage({ message }: { message: string }) {
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => setDismissed(false), [message]);

  if (dismissed) return null;

  return (
    <aside
      key={message}
      className="animate-enter fixed bottom-5 right-4 z-40 w-[min(270px,calc(100vw-2rem))] sm:right-6"
      role="note"
      aria-label="Section guide"
    >
      <div className="relative rounded-3xl border border-border bg-card/95 p-4 pr-9 shadow-pop backdrop-blur">
        <div className="mb-2 flex items-center gap-2">
          <span className="grid size-7 place-items-center rounded-full bg-gradient-to-br from-candy to-primary text-primary-foreground">
            <Sparkles className="size-3.5" />
          </span>
          <span className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground">
            little guide
          </span>
        </div>
        <p className="text-sm leading-relaxed text-foreground">{message}</p>
        <button
          onClick={() => setDismissed(true)}
          aria-label="Dismiss message"
          className="absolute right-3 top-3 grid size-6 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
        >
          <X className="size-3.5" />
        </button>
        {/* speech-bubble tail */}
        <span className="absolute -bottom-1.5 right-10 size-3 rotate-45 border-b border-r border-border bg-card" />
      </div>
    </aside>
  );
}
