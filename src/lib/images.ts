import hero1 from "@/assets/hero/hero-1.jpg";

export const fallbackImage = hero1;

export const images = {
  fallback: fallbackImage,
  hero: {
    home: [
      "https://images.unsplash.com/photo-1544207964-b045fb9f44ab?q=80&w=1200",
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1200",
      "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=1200",
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200",
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1200",
    ],
    about: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1200",
  },
  programs: {
    education: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800",
    mentorship: "https://images.unsplash.com/photo-1529390079861-591de354faf5?q=80&w=800",
    skills: "https://images.unsplash.com/photo-1511632765486-a01c80cf8cb4?q=80&w=800",
    financial: "https://images.unsplash.com/photo-1517598024396-46c53fb3d88d?q=80&w=800",
  },
  events: {
    workshop: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800",
    volunteer: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?q=80&w=800",
    scholarship: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=800",
    completed: [
      "https://images.unsplash.com/photo-1531206715517-5c561081788d?q=80&w=800",
      "https://images.unsplash.com/photo-1540479859555-17af45c78602?q=80&w=800",
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800",
    ],
  },
  blogs: [
    "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?q=80&w=800",
    "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800",
    "https://images.unsplash.com/photo-1529070538774-1843cb166537?q=80&w=800",
    "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=800",
    "https://images.unsplash.com/photo-1427504494785-3a9a2e4431e7?q=80&w=800",
    "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800",
  ],
  gallery: [
    "https://images.unsplash.com/photo-1517048676732-5accaee952a2?q=80&w=800",
    "https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=800",
    "https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?q=80&w=800",
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800",
    "https://images.unsplash.com/photo-1531256379416-9f000e90aaca?q=80&w=800",
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800",
    "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=800",
    "https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=800",
    "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800",
  ],
  stories: [
    "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=800",
    "https://images.unsplash.com/photo-1524508762026-dd0a4421b585?q=80&w=800",
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800",
  ],
  placeholders: {
    avatar: (name: string) => `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=random&size=150`,
  }
};
