import { images } from "@/lib/images";
import { z } from "zod";
import { publicApi } from "@/lib/api";

export interface BackendLeaderboardItem {
  id: string;
  rank: number;
  name: string;
  avatar: string;
  points: number;
  level: string;
  impactScore: number;
  location: string;
}

export interface BackendStatsResponse {
  volunteers: number;
  programs: number;
  totalHours: number;
  totalPoints: number;
}

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



// API function to get leaderboard analytics/stats
export const getLeaderboardStats = async () => {
  try {
    const res: any = await publicApi.getImpactAnalytics();
    const data = res?.data || {};
    return {
      activeVolunteers: data.volunteers || 0,
      programsCompleted: data.programs || 0,
      totalHours: data.totalHours || 0,
      communityImpactScore: data.communityImpactScore || 100,
      livesImpacted: data.totalPoints || 0,
      statesCovered: data.statesCovered || 0,
    };
  } catch (error) {
    console.error("Failed to fetch leaderboard stats", error);
    // Return empty fallback instead of mock data
    return {
      activeVolunteers: 0,
      programsCompleted: 0,
      totalHours: 0,
      communityImpactScore: 0,
      livesImpacted: 0,
      statesCovered: 0,
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

export const getLeaderboardData = async (data: z.infer<typeof LeaderboardInputSchema>): Promise<{
  data: VolunteerImpact[];
  totalCount: number;
  totalPages: number;
  currentPage: number;
}> => {
  try {
    const parsedData = LeaderboardInputSchema.parse(data);
    const { search, state, city, college, category, timeframe, page, limit } = parsedData;

    // Attempt to fetch from backend
    const res: any = await publicApi.getTopLeaderboard({ limit: 50 });
    console.log("Raw Axios response:", res);

    let fetchedLeaderboard = res?.data?.leaderboard || res?.leaderboard || [];

    // Map backend data to frontend format
    let filtered: VolunteerImpact[] = fetchedLeaderboard.map((v: BackendLeaderboardItem) => ({
      id: v.id || `v_${v.rank}`,
      name: v.name || "Unknown Volunteer",
      photo: v.avatar || "https://api.dicebear.com/7.x/avataaars/svg?seed=Volunteer",
      rank: v.rank || 0,
      streak: 0,
      monthlyScore: v.points || 0,
      yearlyScore: v.points || 0,
      allTimeScore: v.points || 0,
      programsCompleted: 0,
      hours: 0,
      badge: v.level || "Beginner",
      city: v.location || "Unknown",
      state: "Unknown",
      college: "Unknown",
      category: "General",
      tagline: "",
      trend: "stable",
      impactScore: v.impactScore || 0,
    }));

    console.log("Transformed leaderboard response:", filtered);

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
      totalPages: Math.ceil(totalCount / limit) || 1,
      currentPage: page,
    };
  } catch (error) {
    console.error("Failed to fetch leaderboard data, throwing error", error);
    throw error;
  }
};
