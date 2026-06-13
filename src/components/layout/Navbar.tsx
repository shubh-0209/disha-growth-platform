import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const TOOLS = [
  { to: "/career-navigator", label: "Career Navigator" },
  { to: "/scholarships", label: "Scholarship Explorer" },
  { to: "/opportunity-hub", label: "Opportunity Hub" },
  { to: "/mentors", label: "Mentor Network" },
  { to: "/volunteer", label: "Volunteer Hub" },
  { to: "/resources", label: "Resource Library" },
  { to: "/impact", label: "Impact Dashboard" },
] as const;

const ABOUT = [
  { to: "/about", label: "About Disha" },
  { to: "/vision-mission", label: "Vision & Mission" },
  { to: "/programs", label: "Programs" },
  { to: "/success-stories", label: "Success Stories" },
] as const;

const MAIN = [
  { to: "/events", label: "Events" },
  { to: "/blogs", label: "Blogs" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;

export function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2.5">
      <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary text-primary-foreground shadow-soft">
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
          <path d="m7 7 2.5 6L16 9l-2.5 6" className="text-green" stroke="currentColor" />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-base font-bold tracking-tight text-foreground">
          Disha <span className="text-primary">For India</span>
        </span>
        <span className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
          Growth & Opportunity
        </span>
      </span>
    </Link>
  );
}

function NavDropdown({
  label,
  items,
}: {
  label: string;
  items: readonly { to: string; label: string }[];
}) {
  return (
    <div className="group relative">
      <button className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-primary">
        {label}
        <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
      </button>
      <div className="invisible absolute left-0 top-full z-50 w-60 translate-y-1 rounded-2xl border border-border bg-popover p-2 opacity-0 shadow-card transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
        {items.map((it) => (
          <Link
            key={it.to}
            to={it.to}
            className="block rounded-lg px-3 py-2 text-sm text-foreground/80 transition-colors hover:bg-accent hover:text-primary"
            activeProps={{ className: "bg-accent text-primary" }}
          >
            {it.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-all duration-300",
        scrolled
          ? "border-border bg-background/85 backdrop-blur-md"
          : "border-transparent bg-background",
      )}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5">
        <Logo />

        <div className="hidden items-center gap-1 lg:flex">
          <NavDropdown label="About" items={ABOUT} />
          <NavDropdown label="Student Tools" items={TOOLS} />
          {MAIN.map((it) => (
            <Link
              key={it.to}
              to={it.to}
              className="rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
              activeProps={{ className: "text-primary" }}
            >
              {it.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <Button asChild variant="ghost" size="sm">
            <Link to="/volunteer">Volunteer</Link>
          </Button>
          <Button asChild size="sm">
            <Link to="/contact">Create an Impact</Link>
          </Button>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="lg:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[88vw] max-w-sm overflow-y-auto p-0">
            <div className="flex items-center justify-between border-b border-border px-5 py-4">
              <Logo />
              <SheetClose asChild>
                <Button variant="ghost" size="icon">
                  <X className="h-5 w-5" />
                </Button>
              </SheetClose>
            </div>
            <div className="px-5 py-4">
              {[...ABOUT, ...TOOLS, ...MAIN].map((it) => (
                <SheetClose asChild key={it.to}>
                  <Link
                    to={it.to}
                    className="block rounded-lg px-3 py-2.5 text-sm font-medium text-foreground/80 hover:bg-accent hover:text-primary"
                    activeProps={{ className: "bg-accent text-primary" }}
                  >
                    {it.label}
                  </Link>
                </SheetClose>
              ))}
              <SheetClose asChild>
                <Button asChild className="mt-4 w-full">
                  <Link to="/contact">Create an Impact</Link>
                </Button>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
