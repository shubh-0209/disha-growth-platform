import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Twitter, Facebook, Instagram, Linkedin } from "lucide-react";
import { Logo } from "./Navbar";
import { ORG } from "@/lib/site-data";

const COLS: { title: string; links: { to: string; label: string }[] }[] = [
  {
    title: "Organisation",
    links: [
      { to: "/about", label: "About Disha" },
      { to: "/vision-mission", label: "Vision & Mission" },
      { to: "/programs", label: "Programs" },
      { to: "/success-stories", label: "Success Stories" },
      { to: "/impact", label: "Impact Dashboard" },
    ],
  },
  {
    title: "Student Tools",
    links: [
      { to: "/career-navigator", label: "Career Navigator" },
      { to: "/scholarships", label: "Scholarship Explorer" },
      { to: "/opportunity-hub", label: "Opportunity Hub" },
      { to: "/mentors", label: "Mentor Network" },
      { to: "/resources", label: "Resource Library" },
      { to: "/volunteer", label: "Volunteer Hub" },
    ],
  },
  {
    title: "Explore",
    links: [
      { to: "/events", label: "Events" },
      { to: "/blogs", label: "Blogs" },
      { to: "/gallery", label: "Media Gallery" },
      { to: "/contact", label: "Contact Us" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-ink text-background">
      <div className="mx-auto max-w-7xl px-5 py-14">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="[&_*]:!text-background">
              <Logo />
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-background/70">
              {ORG.tagline}. Education is the most powerful weapon which can be
              used to change the world.
            </p>
            <div className="mt-5 space-y-2 text-sm text-background/70">
              <a href={`mailto:${ORG.email}`} className="flex items-center gap-2 hover:text-primary">
                <Mail className="h-4 w-4" /> {ORG.email}
              </a>
              <a href={`tel:${ORG.phone}`} className="flex items-center gap-2 hover:text-primary">
                <Phone className="h-4 w-4" /> {ORG.phone}
              </a>
              <a href={ORG.mapUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-primary">
                <MapPin className="h-4 w-4" /> Visit Map
              </a>
            </div>
            <div className="mt-5 flex gap-3">
              {[Twitter, Facebook, Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="grid h-9 w-9 place-items-center rounded-full bg-background/10 text-background/80 transition-colors hover:bg-primary hover:text-primary-foreground"
                  aria-label="social link"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {COLS.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-background">
                {col.title}
              </h4>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.to}>
                    <Link
                      to={l.to}
                      className="text-sm text-background/70 transition-colors hover:text-primary"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-background/10 pt-6 text-center text-xs text-background/50 sm:flex-row sm:text-left">
          <p>© {new Date().getFullYear()} {ORG.legalName}. All rights reserved.</p>
          <p>Skilling India's youth for employability & entrepreneurship.</p>
        </div>
      </div>
    </footer>
  );
}
