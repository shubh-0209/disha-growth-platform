export const fallbackImage = "/optimized/hero/hero-1.webp";

export const images = {
  fallback: fallbackImage,
  hero: {
    home: [
      "/optimized/gallery/disha-1.webp",
      "/optimized/gallery/activity-2-1.webp",
      "/optimized/gallery/activity-1-2.webp",
      "/optimized/gallery/public-speaking.webp",
      "/optimized/gallery/award-ceremony.webp",
    ],
    about: "/optimized/gallery/volunteer-group.webp",
  },
  programs: {
    education: "/optimized/gallery/activity-2-1.webp",
    mentorship: "/optimized/gallery/disha-3.webp",
    skills: "/optimized/gallery/activity-3-1.webp",
    financial: "/optimized/gallery/youth-address.webp",
  },
  events: {
    workshop: "/optimized/gallery/disha-2.webp",
    volunteer: "/optimized/gallery/gallery-2-1.webp",
    scholarship: "/optimized/gallery/team-certificates.webp",
    completed: [
      "/optimized/gallery/award-ceremony.webp",
      "/optimized/gallery/gallery-2-5.webp",
      "/optimized/gallery/gallery-2-2.webp",
    ],
  },
  blogs: [
    "/optimized/gallery/gallery-2-3.webp",
    "/optimized/gallery/gallery-2-4.webp",
    "/optimized/gallery/disha-1.webp",
    "/optimized/gallery/activity-1-2.webp",
    "/optimized/gallery/youth-address.webp",
    "/optimized/gallery/volunteer-group.webp",
  ],
  gallery: [
    "/optimized/gallery/award-ceremony.webp",
    "/optimized/gallery/public-speaking.webp",
    "/optimized/gallery/team-certificates.webp",
    "/optimized/gallery/youth-address.webp",
    "/optimized/gallery/volunteer-group.webp",
    "/optimized/gallery/gallery-2-1.webp",
    "/optimized/gallery/gallery-2-2.webp",
    "/optimized/gallery/gallery-2-3.webp",
    "/optimized/gallery/gallery-2-4.webp",
  ],
  stories: [
    "/optimized/hero/hero-1.webp",
    "/optimized/hero/hero-2.webp",
    "/optimized/hero/hero-3.webp",
    "/optimized/hero/hero-4.webp",
    "/optimized/hero/hero-5.webp",
  ],
  placeholders: {
    avatar: (name: string) => `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=random&size=150`,
  }
};
