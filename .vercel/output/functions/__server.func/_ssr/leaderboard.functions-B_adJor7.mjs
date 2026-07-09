import { i as TSS_SERVER_FUNCTION, l as createServerFn } from "./esm-Dova13aH.mjs";
import { i as stringType, n as numberType, r as objectType, t as enumType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/leaderboard.functions-B_adJor7.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var VOLUNTEERS = [
	{
		id: "v_1",
		name: "Arjun Mehta",
		photo: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&auto=format&fit=crop&q=60",
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
		trend: "rising"
	},
	{
		id: "v_2",
		name: "Priya Sharma",
		photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=60",
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
		trend: "stable"
	},
	{
		id: "v_3",
		name: "Karan Johar",
		photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=60",
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
		trend: "rising"
	},
	{
		id: "v_4",
		name: "Ananya Iyer",
		photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=60",
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
		trend: "rising"
	},
	{
		id: "v_5",
		name: "Rohan Das",
		photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=60",
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
		trend: "stable"
	},
	{
		id: "v_6",
		name: "Meera Nair",
		photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=60",
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
		trend: "falling"
	},
	{
		id: "v_7",
		name: "Sandeep Gill",
		photo: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=150&auto=format&fit=crop&q=60",
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
		trend: "rising"
	},
	{
		id: "v_8",
		name: "Aditya Sen",
		photo: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=150&auto=format&fit=crop&q=60",
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
		trend: "stable"
	},
	{
		id: "v_9",
		name: "Sneha Patel",
		photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=60",
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
		trend: "falling"
	},
	{
		id: "v_10",
		name: "Rahul Verma",
		photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=60",
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
		trend: "rising"
	},
	{
		id: "v_11",
		name: "Divya Nair",
		photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=60",
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
		trend: "stable"
	},
	{
		id: "v_12",
		name: "Vikram Malhotra",
		photo: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?w=150&auto=format&fit=crop&q=60",
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
		trend: "rising"
	},
	{
		id: "v_13",
		name: "Nehal Shah",
		photo: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=150&auto=format&fit=crop&q=60",
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
		trend: "stable"
	},
	{
		id: "v_14",
		name: "Jaspreet Kaur",
		photo: "https://images.unsplash.com/photo-1554151228-14d9def656e4?w=150&auto=format&fit=crop&q=60",
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
		trend: "rising"
	}
];
var getLeaderboardStats_createServerFn_handler = createServerRpc({
	id: "9bdbda3951f350ee6ec6d53453583d29e50d73bb7947aa58d8f9e7582e156913",
	name: "getLeaderboardStats",
	filename: "src/lib/api/leaderboard.functions.ts"
}, (opts) => getLeaderboardStats.__executeServer(opts));
var getLeaderboardStats = createServerFn({ method: "GET" }).handler(getLeaderboardStats_createServerFn_handler, async () => {
	return {
		activeVolunteers: 1200,
		totalHours: 14800,
		programsCompleted: 450,
		communityImpactScore: 88,
		livesImpacted: 25e3
	};
});
var LeaderboardInputSchema = objectType({
	search: stringType().optional(),
	state: stringType().optional(),
	city: stringType().optional(),
	college: stringType().optional(),
	category: stringType().optional(),
	timeframe: enumType([
		"monthly",
		"yearly",
		"alltime"
	]),
	page: numberType().default(1),
	limit: numberType().default(10)
});
var getLeaderboardData_createServerFn_handler = createServerRpc({
	id: "c6db4288b7c420af1db82252418037707cdae8f9d4a287e3a06b45810906db95",
	name: "getLeaderboardData",
	filename: "src/lib/api/leaderboard.functions.ts"
}, (opts) => getLeaderboardData.__executeServer(opts));
var getLeaderboardData = createServerFn({ method: "POST" }).inputValidator(LeaderboardInputSchema).handler(getLeaderboardData_createServerFn_handler, async ({ data }) => {
	const { search, state, city, college, category, timeframe, page, limit } = data;
	let filtered = [...VOLUNTEERS];
	if (search) {
		const q = search.toLowerCase();
		filtered = filtered.filter((v) => v.name.toLowerCase().includes(q));
	}
	if (state && state !== "All") filtered = filtered.filter((v) => v.state === state);
	if (city && city !== "All") filtered = filtered.filter((v) => v.city === city);
	if (college && college !== "All") filtered = filtered.filter((v) => v.college === college);
	if (category && category !== "All") filtered = filtered.filter((v) => v.category === category);
	filtered.sort((a, b) => {
		if (timeframe === "monthly") return b.monthlyScore - a.monthlyScore;
		if (timeframe === "yearly") return b.yearlyScore - a.yearlyScore;
		return b.allTimeScore - a.allTimeScore;
	});
	filtered = filtered.map((v, i) => ({
		...v,
		rank: i + 1
	}));
	const totalCount = filtered.length;
	const offset = (page - 1) * limit;
	return {
		data: filtered.slice(offset, offset + limit),
		totalCount,
		totalPages: Math.ceil(totalCount / limit),
		currentPage: page
	};
});
//#endregion
export { getLeaderboardData_createServerFn_handler, getLeaderboardStats_createServerFn_handler };
