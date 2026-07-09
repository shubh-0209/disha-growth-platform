import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Msg = { role: "user" | "bot"; text: string };

const SUGGESTIONS = [
  "Which career suits me?",
  "Tips to start a business",
  "How to manage exam stress?",
];

function reply(input: string): string {
  const q = input.toLowerCase();
  if (q.includes("career") || q.includes("suits") || q.includes("path"))
    return "Great question! Explore our Programs or resource library for detailed guides on tech, finance, entrepreneurship, design and more.";
  if (q.includes("scholar"))
    return "While we don't have financial aid tools on our platform, you can explore our resource library and student programs for guidance on educational opportunities.";
  if (q.includes("business") || q.includes("startup") || q.includes("entrepre"))
    return "Start by finding a real problem and talking to 10 potential customers. Use the Business Model Canvas in our Resource Library, then build a tiny MVP. Our Entrepreneurship bootcamps can guide you further!";
  if (q.includes("stress") || q.includes("anxiety") || q.includes("exam"))
    return "Breathe slowly for 2 minutes before studying, break work into small chunks, and protect your sleep. Check the 'Managing Exam Stress' toolkit in our Wellness blog.";
  if (q.includes("volunteer"))
    return "Wonderful! Visit the Volunteer Hub to browse roles in Teaching, Design, Technology, Marketing and Community Outreach — remote and on-site options available.";
  if (q.includes("mentor"))
    return "We don't have a formal Mentor Network on our platform, but you can participate in our student programs and bootcamps to get guidance from our team and volunteers.";
  if (q.includes("hello") || q.includes("hi") || q.includes("hey"))
    return "Hi there! 👋 I'm Disha Assistant. I can help you explore careers, resources and programs. What would you like to know?";
  return "I'm here to guide your growth journey! Ask me about careers, entrepreneurship, wellness, or volunteering — or explore our Student Tools from the menu.";
}

export function CareerChatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([
    {
      role: "bot",
      text: "Hi! I'm Disha Assistant 🤖 — your guide to careers and growth. How can I help today?",
    },
  ]);
  const [input, setInput] = useState("");
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open]);

  const send = (text: string) => {
    const value = text.trim();
    if (!value) return;
    setMessages((m) => [...m, { role: "user", text: value }]);
    setInput("");
    setTimeout(() => {
      setMessages((m) => [...m, { role: "bot", text: reply(value) }]);
    }, 450);
  };

  return (
    <>
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Open Disha Assistant"
        className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-primary text-primary-foreground shadow-card transition-transform hover:scale-105"
      >
        {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-5 z-50 flex h-[460px] w-[88vw] max-w-sm flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-card"
          >
            <div className="flex items-center gap-3 bg-ink px-4 py-3 text-background">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-primary">
                <Bot className="h-5 w-5 text-primary-foreground" />
              </span>
              <div>
                <p className="text-sm font-semibold">Disha Assistant</p>
                <p className="text-[11px] text-background/60">Career & growth guide</p>
              </div>
            </div>

            <div className="flex-1 space-y-3 overflow-y-auto bg-secondary/40 p-4">
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={cn(
                    "flex",
                    m.role === "user" ? "justify-end" : "justify-start",
                  )}
                >
                  <span
                    className={cn(
                      "max-w-[80%] rounded-2xl px-3.5 py-2 text-sm leading-relaxed",
                      m.role === "user"
                        ? "bg-primary text-primary-foreground"
                        : "border border-border bg-card text-foreground",
                    )}
                  >
                    {m.text}
                  </span>
                </div>
              ))}
              {messages.length <= 1 && (
                <div className="flex flex-wrap gap-2 pt-1">
                  {SUGGESTIONS.map((s) => (
                    <button
                      key={s}
                      onClick={() => send(s)}
                      className="rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground/80 transition-colors hover:border-primary hover:text-primary"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              )}
              <div ref={endRef} />
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                send(input);
              }}
              className="flex items-center gap-2 border-t border-border bg-card p-3"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask me anything…"
                className="flex-1 rounded-full border border-border bg-background px-4 py-2 text-sm outline-none focus:border-primary"
              />
              <Button type="submit" size="icon" className="rounded-full">
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
