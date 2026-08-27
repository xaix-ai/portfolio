import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowLeft, Loader2, MessageCircleHeart, Send, Sparkle } from "lucide-react";

import { supabase } from "@/integrations/supabase/client";
import { Decor } from "@/components/portfolio/Decor";
import { Navbar } from "@/components/portfolio/Navbar";
import { Reveal } from "@/components/portfolio/Reveal";

export const Route = createFileRoute("/messages")({
  head: () => ({
    meta: [
      { title: "Messages — Leave a note for Xynex Kim" },
      {
        name: "description",
        content:
          "A little guestbook: leave a message for Xynex Kim and read the notes other visitors have left behind.",
      },
      { property: "og:title", content: "Messages — Leave a note for Xynex Kim" },
      {
        property: "og:description",
        content:
          "Say hi, leave feedback, or drop a kind note on Xynex Kim's visitor message wall.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: MessagesPage,
});

interface GuestMessage {
  id: string;
  name: string;
  message: string;
  created_at: string;
}

function MessagesPage() {
  const [messages, setMessages] = useState<GuestMessage[]>([]);
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  const load = async () => {
    const { data, error } = await supabase
      .from("guest_messages")
      .select("id, name, message, created_at")
      .order("created_at", { ascending: false })
      .limit(60);
    if (!error && data) setMessages(data as GuestMessage[]);
    setLoading(false);
  };

  useEffect(() => {
    void load();
  }, []);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;
    setSending(true);
    setStatus(null);
    const { error } = await supabase.from("guest_messages").insert({
      name: name.trim().slice(0, 60),
      message: message.trim().slice(0, 800),
    });
    setSending(false);
    if (error) {
      setStatus("Hmm, that didn't send. Please try again.");
      return;
    }
    setName("");
    setMessage("");
    setStatus("Thank you! Your message is on the wall ✦");
    void load();
  };

  return (
    <div className="min-h-screen overflow-x-clip">
      <Decor />
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 pb-24 pt-28 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-secondary-foreground">
            <Sparkle className="size-3.5 text-primary" />
            guestbook
          </span>
          <h1 className="mt-4 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
            Leave me a <span className="text-gradient">message</span>
          </h1>
          <p className="mt-3 text-muted-foreground">
            Feedback, a project idea, or just a hello — write something and it
            shows up on the wall below.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-[minmax(0,26rem)_1fr]">
          <Reveal>
            <form onSubmit={onSubmit} className="card-soft p-6 sm:p-8">
              <label
                htmlFor="name"
                className="text-sm font-semibold text-foreground"
              >
                Your name
              </label>
              <input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                maxLength={60}
                required
                placeholder="Who's writing?"
                className="mt-2 w-full rounded-2xl border border-border bg-card px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
              />

              <label
                htmlFor="message"
                className="mt-5 block text-sm font-semibold text-foreground"
              >
                Your message
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                maxLength={800}
                required
                rows={5}
                placeholder="Say anything nice (or useful)…"
                className="mt-2 w-full resize-none rounded-2xl border border-border bg-card px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
              />

              <button
                type="submit"
                disabled={sending}
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground shadow-pop transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glow disabled:opacity-60"
              >
                {sending ? (
                  <Loader2 className="size-4 animate-spin" />
                ) : (
                  <Send className="size-4" />
                )}
                {sending ? "Sending…" : "Send message"}
              </button>

              {status && (
                <p className="mt-4 text-center text-sm text-muted-foreground">
                  {status}
                </p>
              )}

              <Link
                to="/"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-muted-foreground transition-colors hover:text-primary"
              >
                <ArrowLeft className="size-4" />
                Back to portfolio
              </Link>
            </form>
          </Reveal>

          <div>
            <h2 className="font-display text-2xl font-extrabold tracking-tight">
              The wall
            </h2>
            {loading ? (
              <p className="mt-6 text-sm text-muted-foreground">
                Loading messages…
              </p>
            ) : messages.length === 0 ? (
              <div className="card-soft mt-6 flex flex-col items-center gap-3 p-10 text-center">
                <MessageCircleHeart className="size-8 text-primary" />
                <p className="text-sm text-muted-foreground">
                  No messages yet — be the very first one ✦
                </p>
              </div>
            ) : (
              <ul className="mt-6 grid gap-4 sm:grid-cols-2">
                {messages.map((m, i) => (
                  <Reveal key={m.id} delay={Math.min(i, 6) * 60}>
                    <li className="card-soft h-full p-5">
                      <div className="flex items-center justify-between gap-3">
                        <span className="font-display font-bold">{m.name}</span>
                        <span className="text-xs text-muted-foreground">
                          {new Date(m.created_at).toLocaleDateString()}
                        </span>
                      </div>
                      <p className="mt-2 whitespace-pre-wrap text-sm leading-relaxed text-muted-foreground">
                        {m.message}
                      </p>
                    </li>
                  </Reveal>
                ))}
              </ul>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
