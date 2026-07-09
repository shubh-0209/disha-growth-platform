import { images } from "@/lib/images";
import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

export interface VolunteerImpact {
  id: string;
  name: string;
  photo: string;
  rank: number;
  streak: number;
  monthlyScore: number;
  yearlyScore: number;
  allTimeScore: number;
  programsCompleted: number;
  hours: number;
  badge: "National Inspiration" | "State Leader" | "Mentor" | "Local Impact Maker" | "Community Contributor";
  city: string;
  state: string;
  college: string;
  category: "Financial Literacy" | "Entrepreneurship" | "Wellness" | "Clean & Green" | "Education" | "Community Development";
  tagline: string;
  trend: "rising" | "falling" | "stable";
}

const VOLUNTEERS: VolunteerImpact[] = [
  {
    id: "v_1",
    name: "Arjun Mehta",
    photo: images.placeholders.avatar("Volunteer"),
    rank: 1,
    streak: 12,
    monthlyScore: 450,
    yearlyScore: 4800,
    allTimeScore: 9200,
    programsCompleted: 18,
    hours: 240,
    badge: "National Inspiration",
    city: "Ludhiana",
    state: "Punjab",
    college: "Punjab Agricultural University",
    category: "Entrepreneurship",
    tagline: "Helping students build brighter futures.",
    trend: "rising",
  },
  {
    id: "v_2",
    name: "Priya Sharma",
    photo: images.placeholders.avatar("Volunteer"),
    rank: 2,
    streak: 8,
    monthlyScore: 410,
    yearlyScore: 4400,
    allTimeScore: 8900,
    programsCompleted: 15,
    hours: 195,
    badge: "National Inspiration",
    city: "Mumbai",
    state: "Maharashtra",
    college: "St. Xavier's College",
    category: "Education",
    tagline: "Unlocking curiosity in every classroom.",
    trend: "stable",
  },
  {
    id: "v_3",
    name: "Karan Johar",
    photo: images.placeholders.avatar("Volunteer"),
    rank: 3,
    streak: 15,
    monthlyScore: 390,
    yearlyScore: 4200,
    allTimeScore: 8600,
    programsCompleted: 14,
    hours: 180,
    badge: "National Inspiration",
    city: "New Delhi",
    state: "Delhi",
    college: "Delhi Technological University",
    category: "Financial Literacy",
    tagline: "Empowering families with money skills.",
    trend: "rising",
  },
  {
    id: "v_4",
    name: "Ananya Iyer",
    photo: images.placeholders.avatar("Volunteer"),
    rank: 4,
    streak: 6,
    monthlyScore: 360,
    yearlyScore: 3800,
    allTimeScore: 7800,
    programsCompleted: 12,
    hours: 160,
    badge: "State Leader",
    city: "Bangalore",
    state: "Karnataka",
    college: "REVA University",
    category: "Clean & Green",
    tagline: "Planting seeds for a greener tomorrow.",
    trend: "rising",
  },
  {
    id: "v_5",
    name: "Rohan Das",
    photo: images.placeholders.avatar("Volunteer"),
    rank: 5,
    streak: 9,
    monthlyScore: 340,
    yearlyScore: 3600,
    allTimeScore: 7400,
    programsCompleted: 11,
    hours: 150,
    badge: "State Leader",
    city: "Kolkata",
    state: "West Bengal",
    college: "Jadavpur University",
    category: "Community Development",
    tagline: "Lifting communities, hand in hand.",
    trend: "stable",
  },
  {
    id: "v_6",
    name: "Meera Nair",
    photo: images.placeholders.avatar("Volunteer"),
    rank: 6,
    streak: 4,
    monthlyScore: 320,
    yearlyScore: 3300,
    allTimeScore: 6800,
    programsCompleted: 10,
    hours: 140,
    badge: "Mentor",
    city: "Chennai",
    state: "Tamil Nadu",
    college: "Madras Christian College",
    category: "Wellness",
    tagline: "Resilience coaching for stress-free living.",
    trend: "falling",
  },
  {
    id: "v_7",
    name: "Sandeep Gill",
    photo: images.placeholders.avatar("Volunteer"),
    rank: 7,
    streak: 11,
    monthlyScore: 310,
    yearlyScore: 3100,
    allTimeScore: 6200,
    programsCompleted: 9,
    hours: 130,
    badge: "Mentor",
    city: "Amritsar",
    state: "Punjab",
    college: "Guru Nanak Dev University",
    category: "Financial Literacy",
    tagline: "Practical finance for young minds.",
    trend: "rising",
  },
  {
    id: "v_8",
    name: "Aditya Sen",
    photo: images.placeholders.avatar("Volunteer"),
    rank: 8,
    streak: 7,
    monthlyScore: 290,
    yearlyScore: 2900,
    allTimeScore: 5900,
    programsCompleted: 8,
    hours: 120,
    badge: "Local Impact Maker",
    city: "Pune",
    state: "Maharashtra",
    college: "Symbiosis International",
    category: "Education",
    tagline: "Empowering educators, changing lives.",
    trend: "stable",
  },
  {
    id: "v_9",
    name: "Sneha Patel",
    photo: images.placeholders.avatar("Volunteer"),
    rank: 9,
    streak: 5,
    monthlyScore: 270,
    yearlyScore: 2700,
    allTimeScore: 5500,
    programsCompleted: 7,
    hours: 110,
    badge: "Local Impact Maker",
    city: "Ahmedabad",
    state: "Gujarat",
    college: "Nirma University",
    category: "Wellness",
    tagline: "Spreading emotional strength & self-belief.",
    trend: "falling",
  },
  {
    id: "v_10",
    name: "Rahul Verma",
    photo: images.placeholders.avatar("Volunteer"),
    rank: 10,
    streak: 10,
    monthlyScore: 260,
    yearlyScore: 2600,
    allTimeScore: 5300,
    programsCompleted: 7,
    hours: 105,
    badge: "Local Impact Maker",
    city: "Chandigarh",
    state: "Punjab",
    college: "Panjab University",
    category: "Entrepreneurship",
    tagline: "Guiding aspiring student founders.",
    trend: "rising",
  },
  {
    id: "v_11",
    name: "Divya Nair",
    photo: images.placeholders.avatar("Volunteer"),
    rank: 11,
    streak: 3,
    monthlyScore: 240,
    yearlyScore: 2300,
    allTimeScore: 4800,
    programsCompleted: 6,
    hours: 90,
    badge: "Community Contributor",
    city: "Kochi",
    state: "Kerala",
    college: "Cochin University",
    category: "Community Development",
    tagline: "Fostering local civic pride.",
    trend: "stable",
  },
  {
    id: "v_12",
    name: "Vikram Malhotra",
    photo: images.placeholders.avatar("Volunteer"),
    rank: 12,
    streak: 6,
    monthlyScore: 220,
    yearlyScore: 2100,
    allTimeScore: 4400,
    programsCompleted: 5,
    hours: 85,
    badge: "Community Contributor",
    city: "Hyderabad",
    state: "Telangana",
    college: "Osmania University",
    category: "Clean & Green",
    tagline: "Clean air and waste segregation.",
    trend: "rising",
  },
  {
    id: "v_13",
    name: "Nehal Shah",
    photo: images.placeholders.avatar("Volunteer"),
    rank: 13,
    streak: 2,
    monthlyScore: 200,
    yearlyScore: 1900,
    allTimeScore: 3900,
    programsCompleted: 5,
    hours: 80,
    badge: "Community Contributor",
    city: "Mumbai",
    state: "Maharashtra",
    college: "NMIMS University",
    category: "Financial Literacy",
    tagline: "Helping small vendors go digital.",
    trend: "stable",
  },
  {
    id: "v_14",
    name: "Jaspreet Kaur",
    photo: images.placeholders.avatar("Volunteer"),
    rank: 14,
    streak: 8,
    monthlyScore: 180,
    yearlyScore: 1800,
    allTimeScore: 3600,
    programsCompleted: 4,
    hours: 75,
    badge: "Community Contributor",
    city: "Ludhiana",
    state: "Punjab",
    college: "LPU University",
    category: "Education",
    tagline: "Teaching kids primary subjects.",
    trend: "rising",
  },
];

// Server function to get leaderboard analytics/stats
export const getLeaderboardStats = createServerFn({ method: "GET" })
  .handler(async () => {
    return {
      activeVolunteers: 1200,
      totalHours: 14800,
      programsCompleted: 450,
      communityImpactScore: 88,
      livesImpacted: 25000,
    };
  });

const LeaderboardInputSchema = z.object({
  search: z.string().optional(),
  state: z.string().optional(),
  city: z.string().optional(),
  college: z.string().optional(),
  category: z.string().optional(),
  timeframe: z.enum(["monthly", "yearly", "alltime"]),
  page: z.number().default(1),
  limit: z.number().default(10),
});

export const getLeaderboardData = createServerFn({ method: "POST" })
  .inputValidator(LeaderboardInputSchema)
  .handler(async ({ data }) => {
    const { search, state, city, college, category, timeframe, page, limit } = data;

    let filtered = [...VOLUNTEERS];

    if (search) {
      const q = search.toLowerCase();
      filtered = filtered.filter((v) => v.name.toLowerCase().includes(q));
    }

    if (state && state !== "All") {
      filtered = filtered.filter((v) => v.state === state);
    }

    if (city && city !== "All") {
      filtered = filtered.filter((v) => v.city === city);
    }

    if (college && college !== "All") {
      filtered = filtered.filter((v) => v.college === college);
    }

    if (category && category !== "All") {
      filtered = filtered.filter((v) => v.category === category);
    }

    // Sort by selected timeframe score
    filtered.sort((a, b) => {
      if (timeframe === "monthly") return b.monthlyScore - a.monthlyScore;
      if (timeframe === "yearly") return b.yearlyScore - a.yearlyScore;
      return b.allTimeScore - a.allTimeScore;
    });

    // Update ranks based on sorted order
    filtered = filtered.map((v, i) => ({
      ...v,
      rank: i + 1,
    }));

    const totalCount = filtered.length;
    const offset = (page - 1) * limit;
    const paginated = filtered.slice(offset, offset + limit);

    return {
      data: paginated,
      totalCount,
      totalPages: Math.ceil(totalCount / limit),
      currentPage: page,
    };
  });
