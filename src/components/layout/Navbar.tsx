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
import { useAuth } from "@/hooks/use-auth";

const TOOLS = [
  { to: "/opportunity-hub", label: "Opportunity Hub" },
  { to: "/volunteer", label: "Volunteer Hub" },
  { to: "/resources", label: "Resource Library" },
  { to: "/impact", label: "Impact Dashboard" },
  { to: "/leaderboard", label: "Contribution Leaderboard" },
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

export function Logo({ isScrolled }: { isScrolled?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-2.5 group">
      <img src="/logo.png" alt="Disha For India Icon" className="h-8 md:h-10 w-auto object-contain transition-transform group-hover:scale-105" />
      <span className="flex flex-col leading-none">
        <span className="font-display text-base font-bold tracking-tight transition-colors text-white">
          Disha <span className="text-[#FFB703]">For India</span>
        </span>
        <span className="text-[10px] font-medium uppercase tracking-wider transition-colors text-white/80">
          Growth & Opportunity
        </span>
      </span>
    </Link>
  );
}

function NavDropdown({
  label,
  items,
  isScrolled,
}: {
  label: string;
  items: readonly { to: string; label: string }[];
  isScrolled: boolean;
}) {
  return (
    <div className="group relative">
      <button className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-all duration-300 text-white hover:bg-[#1E5BB8]">
        {label}
        <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
      </button>
      <div className="invisible absolute left-0 top-full z-50 w-60 translate-y-1 rounded-2xl border border-[#1E5BB8] bg-[#063B8C] p-2 opacity-0 shadow-xl transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
        {items.map((it) => (
          <Link
            key={it.to}
            to={it.to}
            className="block rounded-lg px-3 py-2 text-sm text-white/90 transition-all duration-300 hover:bg-[#1E5BB8] hover:text-white"
            activeProps={{ className: "bg-[#1E5BB8] text-white" }}
          >
            {it.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

function VolunteerAuthLink({ isScrolled }: { isScrolled: boolean }) {
  const { user, logout } = useAuth();
  
  if (user) {
    return (
      <div className="group relative">
        <button className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-all duration-300 text-white hover:bg-[#1E5BB8]">
          {user.name}
          <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
        </button>
        <div className="invisible absolute right-0 top-full z-50 w-48 translate-y-1 rounded-2xl border border-[#1E5BB8] bg-[#063B8C] p-2 opacity-0 shadow-xl transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
          <div className="px-3 py-2 text-sm font-semibold text-white border-b border-[#1E5BB8] mb-1">
            {user.name}
          </div>
          <button
            onClick={logout}
            className="w-full text-left block rounded-lg px-3 py-2 text-sm text-white/90 transition-all duration-300 hover:bg-[#1E5BB8] hover:text-white"
          >
            Logout
          </button>
        </div>
      </div>
    );
  }

  return (
    <a
      href="https://app-disha-for-indiaa.vercel.app/login?redirect_to=https://disha-for-indiaa.vercel.app"
      className="rounded-md px-3 py-2 text-sm font-medium transition-all duration-300 text-white hover:bg-[#1E5BB8]"
    >
      Become a Volunteer
    </a>
  );
}



function MobileVolunteerAuthLink() {
  const { user, logout } = useAuth();
  
  if (user) {
    return (
      <div className="mt-4 border-t border-[#1E5BB8] pt-4">
        <div className="px-3 mb-2 text-sm font-semibold text-white">
          {user.name}
        </div>
        <SheetClose asChild>
          <button
            onClick={logout}
            className="w-full text-left block rounded-lg px-3 py-2.5 text-sm font-medium text-white/90 transition-all duration-300 hover:bg-[#1E5BB8] hover:text-white"
          >
            Logout
          </button>
        </SheetClose>
      </div>
    );
  }

  return (
    <SheetClose asChild>
      <a
        href="https://app-disha-for-indiaa.vercel.app/login?redirect_to=https://disha-for-indiaa.vercel.app"
        className="block rounded-lg px-3 py-2.5 text-sm font-medium text-white/90 transition-all duration-300 hover:bg-[#1E5BB8] hover:text-white mt-2"
      >
        Become a Volunteer
      </a>
    </SheetClose>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-300",
      isScrolled 
        ? "bg-[#063B8C] shadow-lg"
        : "bg-[#063B8C]"
    )}>
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5">
        <Logo isScrolled={isScrolled} />

        <div className="hidden items-center gap-1 lg:flex">
          <NavDropdown label="About" items={ABOUT} isScrolled={isScrolled} />
          <NavDropdown label="Student Tools" items={TOOLS} isScrolled={isScrolled} />
          {MAIN.map((it) => (
            <Link
              key={it.to}
              to={it.to}
              className="rounded-md px-3 py-2 text-sm font-medium transition-all duration-300 text-white hover:bg-[#1E5BB8]"
              activeProps={{ className: "bg-[#1E5BB8]" }}
            >
              {it.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <VolunteerAuthLink isScrolled={isScrolled} />
          <a href="https://app-disha-for-indiaa.vercel.app" className="rounded-full bg-[#FFB703] text-[#063B8C] px-6 py-2.5 text-sm font-bold transition-all duration-300 hover:scale-105 hover:shadow-lg inline-flex items-center justify-center">Dashboard</a>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="lg:hidden border-transparent bg-transparent hover:bg-[#1E5BB8] text-white">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" hideClose className="w-[88vw] max-w-sm overflow-y-auto p-0 bg-[#063B8C] border-l border-[#1E5BB8]">
            <div className="flex items-center justify-between border-b border-[#1E5BB8] px-5 py-4 bg-[#063B8C]">
              <Logo isScrolled={true} />
              <SheetClose asChild>
                <Button variant="ghost" size="icon" className="text-white hover:bg-[#1E5BB8]">
                  <X className="h-5 w-5" />
                </Button>
              </SheetClose>
            </div>
            <div className="px-5 py-4 bg-[#063B8C] min-h-full">
              {[...ABOUT, ...TOOLS, ...MAIN].map((it) => (
                <SheetClose asChild key={it.to}>
                  <Link
                    to={it.to}
                    className="block rounded-lg px-3 py-2.5 text-sm font-medium text-white/90 transition-all duration-300 hover:bg-[#1E5BB8] hover:text-white"
                    activeProps={{ className: "bg-[#1E5BB8] text-white" }}
                  >
                    {it.label}
                  </Link>
                </SheetClose>
              ))}
              
              <MobileVolunteerAuthLink />

              <SheetClose asChild>
                <a href="https://app-disha-for-indiaa.vercel.app" className="rounded-full bg-[#FFB703] text-[#063B8C] px-6 py-2.5 text-sm font-bold transition-all duration-300 hover:scale-105 hover:shadow-lg inline-flex items-center justify-center w-full mt-4">
                  Dashboard
                </a>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}

