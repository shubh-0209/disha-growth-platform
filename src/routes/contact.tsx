import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { Reveal } from "@/components/shared/Reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ORG } from "@/lib/site-data";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Disha For India" },
      { name: "description", content: "Get in touch with Disha For India Foundation & Educational Trust. Volunteer, partner, mentor or simply say hello." },
      { property: "og:title", content: "Contact Us — Disha For India" },
      { property: "og:description", content: "Reach out to create an impact with Disha For India." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  const [sending, setSending] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      (e.target as HTMLFormElement).reset();
      toast.success("Message sent!", { description: "Thank you for reaching out. We'll get back to you soon." });
    }, 800);
  };

  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Let's create an impact together"
        description="Whether you'd like to volunteer, partner, mentor or learn more — we'd love to hear from you."
      />
      <section className="py-16">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 lg:grid-cols-[1fr_1.2fr]">
          <Reveal>
            <div className="space-y-4">
              {[
                { icon: Mail, label: "Email", value: ORG.email, href: `mailto:${ORG.email}` },
                { icon: Phone, label: "Phone", value: ORG.phone, href: `tel:${ORG.phone}` },
                { icon: MapPin, label: "Location", value: "View on Google Maps", href: ORG.mapUrl },
              ].map((c) => (
                <a key={c.label} href={c.href} target="_blank" rel="noreferrer" className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-card">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary-soft text-primary">
                    <c.icon className="h-6 w-6" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{c.label}</p>
                    <p className="font-medium text-foreground">{c.value}</p>
                  </div>
                </a>
              ))}
              <div className="rounded-2xl border border-border bg-ink p-6 text-background">
                <p className="font-display text-lg font-semibold text-background">{ORG.legalName}</p>
                <p className="mt-2 text-sm text-background/70">"Education is the most powerful weapon which can be used to change the world."</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form onSubmit={onSubmit} className="rounded-3xl border border-border bg-card p-7 shadow-soft">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <Label htmlFor="name">Full name</Label>
                  <Input id="name" required placeholder="Your name" className="mt-1.5" />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" required placeholder="you@example.com" className="mt-1.5" />
                </div>
              </div>
              <div className="mt-5">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" required placeholder="How can we help?" className="mt-1.5" />
              </div>
              <div className="mt-5">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" required rows={5} placeholder="Tell us a little more…" className="mt-1.5" />
              </div>
              <Button type="submit" size="lg" disabled={sending} className="mt-6 w-full">
                {sending ? "Sending…" : <>Send message <Send className="ml-1 h-4 w-4" /></>}
              </Button>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}
