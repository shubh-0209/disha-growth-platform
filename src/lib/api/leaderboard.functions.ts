import { images } from "@/lib/images";
import { z } from "zod";
import { publicApi } from "@/lib/api";

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
  badge: "National Inspiration" | "State Leader" | "Mentor" | "Local Impact Maker" | "Community Contributor" | string;
  city: string;
  state: string;
  college: string;
  category: "Financial Literacy" | "Entrepreneurship" | "Wellness" | "Clean & Green" | "Education" | "Community Development" | string;
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
    yearlyScore: 3500,
    allTimeScore: 7100,
    programsCompleted: 10,
    hours: 145,
    badge: "State Leader",
    city: "Kolkata",
    state: "West Bengal",
    college: "Jadavpur University",
    category: "Wellness",
    tagline: "Spreading health and happiness.",
    trend: "falling",
  },
  {
    id: "v_6",
    name: "Sneha Reddy",
    photo: images.placeholders.avatar("Volunteer"),
    rank: 6,
    streak: 14,
    monthlyScore: 330,
    yearlyScore: 3400,
    allTimeScore: 6800,
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

// API function to get leaderboard analytics/stats
export const getLeaderboardStats = async () => {
  try {
    const { data } = await publicApi.getImpactAnalytics();
    return {
      activeVolunteers: data?.volunteers || 842,
      totalHours: data?.totalHours || 12450,
      programsCompleted: data?.programs || 315,
      livesImpacted: data?.totalPoints || 25000,
      statesCovered: 18,
    };
  } catch (error) {
    console.error("Failed to fetch leaderboard stats", error);
    // Fallback to static data
    return {
      activeVolunteers: 842,
      totalHours: 12450,
      programsCompleted: 315,
      statesCovered: 18,
      livesImpacted: 25000,
    };
  }
};

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

export const getLeaderboardData = async (data: z.infer<typeof LeaderboardInputSchema>) => {
  const parsedData = LeaderboardInputSchema.parse(data);
  const { search, state, city, college, category, timeframe, page, limit } = parsedData;

  try {
    // Attempt to fetch from backend
    const res = await publicApi.getTopLeaderboard({ limit: 50 });
    let fetchedLeaderboard = res.data?.data?.leaderboard || res.data?.leaderboard || [];

    // Map backend data to frontend format
    let filtered = fetchedLeaderboard.map((v: any) => ({
      id: v.id || `v_${v.rank}`,
      name: v.name,
      photo: v.avatar || "https://api.dicebear.com/7.x/avataaars/svg?seed=Volunteer",
      rank: v.rank,
      streak: 0,
      monthlyScore: v.points,
      yearlyScore: v.points,
      allTimeScore: v.points,
      programsCompleted: 0,
      hours: 0,
      badge: v.level || "Beginner",
      city: v.location?.split(',')[0]?.trim() || "Unknown",
      state: v.location?.split(',')[1]?.trim() || "Unknown",
      college: "Unknown",
      category: "General",
      tagline: "",
      trend: "stable",
    }));

    // Apply frontend filtering on fetched data
    if (search) {
      const q = search.toLowerCase();
      filtered = filtered.filter((v: any) => v.name.toLowerCase().includes(q));
    }

    if (state && state !== "All") {
      filtered = filtered.filter((v: any) => v.state === state);
    }

    const totalCount = filtered.length;
    const offset = (page - 1) * limit;
    const paginated = filtered.slice(offset, offset + limit);

    return {
      data: paginated,
      totalCount,
      totalPages: Math.ceil(totalCount / limit),
      currentPage: page,
    };
  } catch (error) {
    console.error("Failed to fetch leaderboard data, throwing error", error);
    throw error;
  }


};
