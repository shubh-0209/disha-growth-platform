import { o as __toESM } from "../_runtime.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { t as Button } from "./button-Bq5vK6RO.mjs";
import { n as motion, r as AnimatePresence } from "../_libs/framer-motion.mjs";
import { t as Reveal } from "./Reveal-D41dhdcQ.mjs";
import { t as PageHero } from "./PageHero-DxzDS7c7.mjs";
import { t as AnimatedCounter } from "./AnimatedCounter-IfLpjwCb.mjs";
import { A as Info, E as Lock, G as ChevronLeft, H as CircleCheck, K as ChevronDown, U as ChevronUp, V as Clock, W as ChevronRight, _ as Search, a as Users, c as TriangleAlert, et as Award, l as TrendingUp, m as SlidersHorizontal, p as Sparkles, q as Check, u as TrendingDown, x as Minus, z as Compass } from "../_libs/lucide-react.mjs";
import { n as Label, t as Input } from "./label-B7oQAA24.mjs";
import { t as getServerFnById } from "../__23tanstack-start-server-fn-resolver-ZUUQuy3f.mjs";
import { i as TSS_SERVER_FUNCTION, l as createServerFn } from "./esm-Dova13aH.mjs";
import { a as SheetTitle, i as SheetHeader, o as SheetTrigger, r as SheetContent, t as Sheet } from "./sheet-cDLwrcIE.mjs";
import { i as stringType, n as numberType, r as objectType, t as enumType } from "../_libs/zod.mjs";
import { t as useQuery } from "../_libs/tanstack__react-query.mjs";
import { a as SelectItemIndicator, c as SelectPortal, d as SelectSeparator$1, f as SelectTrigger$1, i as SelectItem$1, l as SelectScrollDownButton$1, m as SelectViewport, n as SelectContent$1, o as SelectItemText, p as SelectValue$1, r as SelectIcon, s as SelectLabel$1, t as Select$1, u as SelectScrollUpButton$1 } from "../_libs/@radix-ui/react-select+[...].mjs";
import { a as Trigger, i as Root3, n as Portal, r as Provider, t as Content2 } from "../_libs/radix-ui__react-tooltip.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/leaderboard-DLdlevSb.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Select = Select$1;
var SelectValue = SelectValue$1;
var SelectTrigger = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectTrigger$1, {
	ref,
	className: cn("flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background cursor-pointer data-[placeholder]:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectIcon, {
		asChild: true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4 opacity-50" })
	})]
}));
SelectTrigger.displayName = SelectTrigger$1.displayName;
var SelectScrollUpButton = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollUpButton$1, {
	ref,
	className: cn("flex cursor-default items-center justify-center py-1", className),
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronUp, { className: "h-4 w-4" })
}));
SelectScrollUpButton.displayName = SelectScrollUpButton$1.displayName;
var SelectScrollDownButton = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollDownButton$1, {
	ref,
	className: cn("flex cursor-default items-center justify-center py-1", className),
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4" })
}));
SelectScrollDownButton.displayName = SelectScrollDownButton$1.displayName;
var SelectContent = import_react.forwardRef(({ className, children, position = "popper", ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectPortal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent$1, {
	ref,
	className: cn("relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-select-content-transform-origin)", position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", className),
	position,
	...props,
	children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollUpButton, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectViewport, {
			className: cn("p-1", position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),
			children
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollDownButton, {})
	]
}) }));
SelectContent.displayName = SelectContent$1.displayName;
var SelectLabel = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectLabel$1, {
	ref,
	className: cn("px-2 py-1.5 text-sm font-semibold", className),
	...props
}));
SelectLabel.displayName = SelectLabel$1.displayName;
var SelectItem = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectItem$1, {
	ref,
	className: cn("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "absolute right-2 flex h-3.5 w-3.5 items-center justify-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItemIndicator, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4" }) })
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItemText, { children })]
}));
SelectItem.displayName = SelectItem$1.displayName;
var SelectSeparator = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectSeparator$1, {
	ref,
	className: cn("-mx-1 my-1 h-px bg-muted", className),
	...props
}));
SelectSeparator.displayName = SelectSeparator$1.displayName;
var Table = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: "relative w-full overflow-auto",
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("table", {
		ref,
		className: cn("w-full caption-bottom text-sm", className),
		...props
	})
}));
Table.displayName = "Table";
var TableHeader = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
	ref,
	className: cn("[&_tr]:border-b", className),
	...props
}));
TableHeader.displayName = "TableHeader";
var TableBody = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", {
	ref,
	className: cn("[&_tr:last-child]:border-0", className),
	...props
}));
TableBody.displayName = "TableBody";
var TableFooter = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tfoot", {
	ref,
	className: cn("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0", className),
	...props
}));
TableFooter.displayName = "TableFooter";
var TableRow = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", {
	ref,
	className: cn("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted", className),
	...props
}));
TableRow.displayName = "TableRow";
var TableHead = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
	ref,
	className: cn("h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]", className),
	...props
}));
TableHead.displayName = "TableHead";
var TableCell = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
	ref,
	className: cn("p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]", className),
	...props
}));
TableCell.displayName = "TableCell";
var TableCaption = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("caption", {
	ref,
	className: cn("mt-4 text-sm text-muted-foreground", className),
	...props
}));
TableCaption.displayName = "TableCaption";
var TooltipProvider = Provider;
var Tooltip = Root3;
var TooltipTrigger = Trigger;
var TooltipContent = import_react.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2, {
	ref,
	sideOffset,
	className: cn("z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-tooltip-content-transform-origin)", className),
	...props
}) }));
TooltipContent.displayName = Content2.displayName;
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var getLeaderboardStats = createServerFn({ method: "GET" }).handler(createSsrRpc("9bdbda3951f350ee6ec6d53453583d29e50d73bb7947aa58d8f9e7582e156913"));
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
var getLeaderboardData = createServerFn({ method: "POST" }).inputValidator(LeaderboardInputSchema).handler(createSsrRpc("c6db4288b7c420af1db82252418037707cdae8f9d4a287e3a06b45810906db95"));
var MILESTONES = [
	{
		id: "m1",
		title: "National Inspiration",
		rank: "Top 3",
		desc: "Highest tier of volunteer dedication.",
		icon: Sparkles
	},
	{
		id: "m2",
		title: "State Leader",
		rank: "Top 10",
		desc: "Recognized leading force in the state.",
		icon: Award
	},
	{
		id: "m3",
		title: "Mentor",
		rank: "Top 20",
		desc: "Guiding the next wave of changemakers.",
		icon: Users
	},
	{
		id: "m4",
		title: "Local Impact Maker",
		rank: "Top 50",
		desc: "Directly transforming local communities.",
		icon: Compass
	},
	{
		id: "m5",
		title: "Community Contributor",
		rank: "Top 100",
		desc: "Solid, regular support to programs.",
		icon: CircleCheck
	}
];
function LeaderboardPage() {
	const [search, setSearch] = (0, import_react.useState)("");
	const [selectedState, setSelectedState] = (0, import_react.useState)("All");
	const [selectedCity, setSelectedCity] = (0, import_react.useState)("All");
	const [selectedCollege, setSelectedCollege] = (0, import_react.useState)("All");
	const [selectedCategory, setSelectedCategory] = (0, import_react.useState)("All");
	const [timeframe, setTimeframe] = (0, import_react.useState)("alltime");
	const [page, setPage] = (0, import_react.useState)(1);
	const limit = 10;
	const { data: stats, isLoading: statsLoading, isError: statsError } = useQuery({
		queryKey: ["leaderboardStats"],
		queryFn: () => getLeaderboardStats()
	});
	const { data: listResult, isLoading: listLoading, isError: listError } = useQuery({
		queryKey: [
			"leaderboardData",
			search,
			selectedState,
			selectedCity,
			selectedCollege,
			selectedCategory,
			timeframe,
			page
		],
		queryFn: () => getLeaderboardData({ data: {
			search: search || void 0,
			state: selectedState === "All" ? void 0 : selectedState,
			city: selectedCity === "All" ? void 0 : selectedCity,
			college: selectedCollege === "All" ? void 0 : selectedCollege,
			category: selectedCategory === "All" ? void 0 : selectedCategory,
			timeframe,
			page,
			limit
		} })
	});
	const myProfile = (0, import_react.useMemo)(() => {
		return {
			rank: 147,
			allTimeScore: 2150,
			programsCompleted: 5,
			hours: 80,
			name: "Your Contributor Dashboard"
		};
	}, []);
	const states = [
		"All",
		"Punjab",
		"Maharashtra",
		"Delhi",
		"Karnataka",
		"West Bengal",
		"Tamil Nadu",
		"Gujarat",
		"Kerala",
		"Telangana"
	];
	const categories = [
		"All",
		"Financial Literacy",
		"Entrepreneurship",
		"Wellness",
		"Clean & Green",
		"Education",
		"Community Development"
	];
	const cities = [
		"All",
		"Ludhiana",
		"Mumbai",
		"New Delhi",
		"Bangalore",
		"Kolkata",
		"Chennai",
		"Amritsar",
		"Pune",
		"Ahmedabad",
		"Kochi",
		"Hyderabad",
		"Chandigarh"
	];
	const colleges = [
		"All",
		"Punjab Agricultural University",
		"St. Xavier's College",
		"Delhi Technological University",
		"REVA University",
		"Jadavpur University",
		"Madras Christian College",
		"Guru Nanak Dev University",
		"Symbiosis International",
		"Nirma University",
		"Panjab University",
		"Cochin University",
		"Osmania University",
		"NMIMS University",
		"LPU University"
	];
	const unlockedMilestoneIds = (0, import_react.useMemo)(() => {
		const ids = [];
		if (myProfile.rank <= 100) ids.push("m5");
		if (myProfile.rank <= 50) ids.push("m4");
		if (myProfile.rank <= 20) ids.push("m3");
		if (myProfile.rank <= 10) ids.push("m2");
		if (myProfile.rank <= 3) ids.push("m1");
		return ids;
	}, [myProfile.rank]);
	const topThree = (0, import_react.useMemo)(() => {
		if (!listResult?.data) return [];
		return listResult.data.slice(0, 3);
	}, [listResult?.data]);
	const handleResetFilters = () => {
		setSearch("");
		setSelectedState("All");
		setSelectedCity("All");
		setSelectedCollege("All");
		setSelectedCategory("All");
		setPage(1);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Contributor Board",
			title: "Contribution Leaderboard",
			description: "Recognizing volunteers making meaningful contributions across communities."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-12 border-b border-border bg-muted/10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto max-w-7xl px-5",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-2 gap-4 md:grid-cols-5",
					children: statsLoading ? Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-28 animate-pulse rounded-3xl border border-border bg-card p-5" }, i)) : statsError || !stats ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "col-span-5 rounded-2xl border border-destructive bg-destructive/5 p-4 text-center text-sm text-destructive",
						children: "Error loading contributor metrics. Please try again."
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-3xl border border-border bg-card p-5 shadow-soft",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "grid h-10 w-10 place-items-center rounded-xl bg-orange-soft text-primary",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "h-5 w-5" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-2xl font-extrabold text-foreground",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedCounter, {
										value: stats.activeVolunteers,
										suffix: "+"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted-foreground",
									children: "Active Contributors"
								})
							]
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: .05,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-3xl border border-border bg-card p-5 shadow-soft",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "grid h-10 w-10 place-items-center rounded-xl bg-green-soft text-green",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-5 w-5" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 text-2xl font-extrabold text-foreground",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedCounter, {
											value: stats.totalHours,
											suffix: "+"
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-muted-foreground",
										children: "Total Hours Contributed"
									})
								]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: .1,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-3xl border border-border bg-card p-5 shadow-soft",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "grid h-10 w-10 place-items-center rounded-xl bg-orange-soft text-primary",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-5 w-5" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 text-2xl font-extrabold text-foreground",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedCounter, {
											value: stats.programsCompleted,
											suffix: "+"
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-muted-foreground",
										children: "Contributions Made"
									})
								]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: .15,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-3xl border border-border bg-card p-5 shadow-soft",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "grid h-10 w-10 place-items-center rounded-xl bg-green-soft text-green",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Compass, { className: "h-5 w-5" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 text-2xl font-extrabold text-foreground",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedCounter, {
											value: stats.communityImpactScore,
											suffix: "%"
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-muted-foreground",
										children: "Engagement Rate"
									})
								]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: .2,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-3xl border border-border bg-card p-5 shadow-soft",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "grid h-10 w-10 place-items-center rounded-xl bg-orange-soft text-primary",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-5 w-5" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 text-2xl font-extrabold text-foreground",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedCounter, {
											value: stats.livesImpacted,
											suffix: "+"
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-muted-foreground",
										children: "Lives Positively Impacted"
									})
								]
							})
						})
					] })
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-5",
				children: [
					listLoading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mb-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
						children: Array.from({ length: 3 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-80 animate-pulse rounded-3xl border border-border bg-card" }, i))
					}) : listResult?.data && listResult.data.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-12",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mb-6 font-display text-2xl font-bold text-foreground",
								children: "Top Contributors"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "hidden sm:grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
								children: topThree.map((v, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
									delay: i * .08,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
										whileHover: {
											y: -5,
											scale: 1.01
										},
										transition: {
											type: "spring",
											stiffness: 300,
											damping: 20
										},
										className: "relative flex h-full flex-col rounded-3xl border border-border bg-card p-6 shadow-soft hover:shadow-card",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "absolute right-6 top-6 rounded-full bg-orange-soft px-3 py-1 text-xs font-bold text-primary",
												children: ["Rank #", v.rank]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-4",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
													src: v.photo,
													alt: v.name,
													className: "h-14 w-14 rounded-full object-cover border border-border"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
													className: "font-display font-bold text-foreground",
													children: v.name
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "rounded-full bg-green-soft px-2 py-0.5 text-[10px] font-semibold text-green",
													children: v.badge
												})] })]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
												className: "mt-4 text-sm font-medium text-foreground italic",
												children: [
													"\"",
													v.tagline,
													"\""
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "mt-6 grid grid-cols-3 gap-2 border-t border-border pt-4 text-center",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-[10px] uppercase tracking-wider text-muted-foreground",
														children: "Score"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "mt-0.5 text-base font-bold text-foreground",
														children: timeframe === "monthly" ? v.monthlyScore : timeframe === "yearly" ? v.yearlyScore : v.allTimeScore
													})] }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-[10px] uppercase tracking-wider text-muted-foreground",
														children: "Programs"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "mt-0.5 text-base font-bold text-foreground",
														children: v.programsCompleted
													})] }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-[10px] uppercase tracking-wider text-muted-foreground",
														children: "Hours"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
														className: "mt-0.5 text-base font-bold text-foreground",
														children: [v.hours, "h"]
													})] })
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "mt-4 flex items-center justify-between text-xs text-muted-foreground",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Streak: ", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "font-semibold text-primary",
													children: [v.streak, " months"]
												})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "flex items-center gap-1",
													children: [
														v.trend === "rising" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
															className: "flex items-center text-green",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingUp, { className: "mr-0.5 h-3.5 w-3.5" }), " Rising"]
														}),
														v.trend === "stable" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
															className: "flex items-center text-foreground/50",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { className: "mr-0.5 h-3.5 w-3.5" }), " Stable"]
														}),
														v.trend === "falling" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
															className: "flex items-center text-red-500",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingDown, { className: "mr-0.5 h-3.5 w-3.5" }), " Slow"]
														})
													]
												})]
											})
										]
									})
								}, v.id))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex sm:hidden overflow-x-auto gap-4 pb-4 snap-x snap-mandatory scrollbar-none",
								children: topThree.map((v) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-[85vw] snap-center rounded-3xl border border-border bg-card p-6 shadow-soft flex flex-col",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex justify-between items-start",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-3",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
													src: v.photo,
													alt: v.name,
													className: "h-12 w-12 rounded-full object-cover border border-border"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
													className: "font-display font-bold text-foreground",
													children: v.name
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "rounded-full bg-green-soft px-2 py-0.5 text-[9px] font-semibold text-green",
													children: v.badge
												})] })]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "rounded-full bg-orange-soft px-2.5 py-0.5 text-xs font-bold text-primary",
												children: ["Rank #", v.rank]
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "mt-4 text-xs font-medium text-foreground italic",
											children: [
												"\"",
												v.tagline,
												"\""
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-6 grid grid-cols-3 gap-2 border-t border-border pt-4 text-center",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-[9px] uppercase tracking-wider text-muted-foreground",
													children: "Score"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "mt-0.5 text-sm font-bold text-foreground",
													children: timeframe === "monthly" ? v.monthlyScore : timeframe === "yearly" ? v.yearlyScore : v.allTimeScore
												})] }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-[9px] uppercase tracking-wider text-muted-foreground",
													children: "Programs"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "mt-0.5 text-sm font-bold text-foreground",
													children: v.programsCompleted
												})] }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-[9px] uppercase tracking-wider text-muted-foreground",
													children: "Hours"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
													className: "mt-0.5 text-sm font-bold text-foreground",
													children: [v.hours, "h"]
												})] })
											]
										})
									]
								}, v.id))
							})
						]
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-6 flex flex-col gap-4 border-b border-border pb-6 lg:flex-row lg:items-center lg:justify-between",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex gap-1.5 rounded-full border border-border bg-card p-1 self-start",
								children: [
									{
										id: "monthly",
										label: "Monthly"
									},
									{
										id: "yearly",
										label: "Yearly"
									},
									{
										id: "alltime",
										label: "All Time"
									}
								].map((tf) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => {
										setTimeframe(tf.id);
										setPage(1);
									},
									className: cn("rounded-full px-4 py-1.5 text-xs font-medium transition-all cursor-pointer", timeframe === tf.id ? "bg-primary text-primary-foreground shadow-soft" : "text-muted-foreground hover:text-foreground"),
									children: tf.label
								}, tf.id))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "hidden lg:flex flex-wrap items-center gap-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "relative w-64",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											placeholder: "Search contributor...",
											value: search,
											onChange: (e) => {
												setSearch(e.target.value);
												setPage(1);
											},
											className: "pl-9 h-9"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
										value: selectedState,
										onValueChange: (val) => {
											setSelectedState(val);
											setPage(1);
										},
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
											className: "w-[140px] h-9",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "State" })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: states.map((st) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
											value: st,
											children: st === "All" ? "All States" : st
										}, st)) })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
										value: selectedCity,
										onValueChange: (val) => {
											setSelectedCity(val);
											setPage(1);
										},
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
											className: "w-[140px] h-9",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "City" })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: cities.map((ct) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
											value: ct,
											children: ct === "All" ? "All Cities" : ct
										}, ct)) })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
										value: selectedCollege,
										onValueChange: (val) => {
											setSelectedCollege(val);
											setPage(1);
										},
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
											className: "w-[160px] h-9",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "College" })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: colleges.map((col) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
											value: col,
											children: col === "All" ? "All Colleges" : col.substring(0, 16) + "..."
										}, col)) })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
										value: selectedCategory,
										onValueChange: (val) => {
											setSelectedCategory(val);
											setPage(1);
										},
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
											className: "w-[160px] h-9",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "Program" })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: categories.map((cat) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
											value: cat,
											children: cat === "All" ? "All Programs" : cat
										}, cat)) })]
									}),
									(search || selectedState !== "All" || selectedCity !== "All" || selectedCollege !== "All" || selectedCategory !== "All") && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										variant: "ghost",
										size: "sm",
										onClick: handleResetFilters,
										className: "text-muted-foreground hover:text-foreground",
										children: "Reset"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex gap-2 lg:hidden",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative flex-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										placeholder: "Search...",
										value: search,
										onChange: (e) => {
											setSearch(e.target.value);
											setPage(1);
										},
										className: "pl-9 h-10 w-full"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Sheet, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetTrigger, {
									asChild: true,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										variant: "outline",
										size: "icon",
										className: "h-10 w-10",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlidersHorizontal, { className: "h-5 w-5" })
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetContent, {
									side: "bottom",
									className: "rounded-t-[2rem] p-6 max-h-[85vh] overflow-y-auto",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetHeader, {
										className: "pb-4 border-b border-border",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetTitle, { children: "Filter Contributors" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-5 space-y-4",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "space-y-1.5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "State" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
													value: selectedState,
													onValueChange: (val) => {
														setSelectedState(val);
														setPage(1);
													},
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
														className: "w-full",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "State" })
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: states.map((st) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
														value: st,
														children: st === "All" ? "All States" : st
													}, st)) })]
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "space-y-1.5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "City" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
													value: selectedCity,
													onValueChange: (val) => {
														setSelectedCity(val);
														setPage(1);
													},
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
														className: "w-full",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "City" })
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: cities.map((ct) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
														value: ct,
														children: ct === "All" ? "All Cities" : ct
													}, ct)) })]
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "space-y-1.5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "College" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
													value: selectedCollege,
													onValueChange: (val) => {
														setSelectedCollege(val);
														setPage(1);
													},
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
														className: "w-full",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "College" })
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: colleges.map((col) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
														value: col,
														children: col === "All" ? "All Colleges" : col
													}, col)) })]
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "space-y-1.5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Program Category" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
													value: selectedCategory,
													onValueChange: (val) => {
														setSelectedCategory(val);
														setPage(1);
													},
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
														className: "w-full",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "Category" })
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: categories.map((cat) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
														value: cat,
														children: cat === "All" ? "All Programs" : cat
													}, cat)) })]
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex gap-3 pt-4 border-t border-border",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
													className: "flex-1",
													variant: "outline",
													onClick: handleResetFilters,
													children: "Reset All"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
													className: "flex-1",
													onClick: () => {},
													children: "Apply Filters"
												})]
											})
										]
									})]
								})] })]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-8 lg:grid-cols-[1fr_300px]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-3xl border border-border bg-card p-6 shadow-soft overflow-hidden",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mb-4 flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display font-bold text-lg text-foreground font-semibold",
									children: "Leaderboard Ranking"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tooltip, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipTrigger, {
									asChild: true,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										className: "flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground cursor-pointer",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, { className: "h-4 w-4" }), " Score Calculation"]
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TooltipContent, {
									className: "max-w-[280px] p-3 text-xs leading-relaxed",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-semibold mb-1",
											children: "How is the score calculated?"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Our scoring algorithm reflects real service contribution, rather than points-chasing. It incorporates:" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
											className: "list-disc pl-4 mt-1 space-y-0.5",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Volunteer Hours (weight: 40%)" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Programs completed (weight: 30%)" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Service consistency (weight: 20%)" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Community feedback & quality (weight: 10%)" })
											]
										})
									]
								})] }) })]
							}), listLoading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "space-y-4 py-8",
								children: Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-12 w-full animate-pulse rounded-xl bg-muted/30" }, i))
							}) : listError ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "py-12 text-center text-sm text-destructive",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "mx-auto h-8 w-8 mb-2" }), "Failed to fetch leaderboard data. Please check your connection."]
							}) : !listResult?.data || listResult.data.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "py-16 text-center max-w-sm mx-auto",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Compass, { className: "mx-auto h-12 w-12 text-muted-foreground mb-4" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
										className: "font-display font-bold text-lg text-foreground",
										children: "No matches found"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-sm text-muted-foreground",
										children: "\"Every meaningful journey begins with one act of service.\""
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-xs text-muted-foreground",
										children: "Try refining your search queries or filter categories to discover more volunteers."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										variant: "outline",
										className: "mt-5",
										onClick: handleResetFilters,
										children: "Clear all filters"
									})
								]
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "overflow-x-auto",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Table, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
										className: "w-12",
										children: "Rank"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Contributor" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
										className: "text-right",
										children: "Score"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
										className: "text-center",
										children: "Programs"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
										className: "text-center",
										children: "Hours"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "City" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Badge" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
										className: "text-center",
										children: "Trend"
									})
								] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableBody, {
									className: "relative",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
										mode: "popLayout",
										children: listResult.data.map((v) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.tr, {
											layoutId: `row-${v.id}`,
											initial: {
												opacity: 0,
												y: 8
											},
											animate: {
												opacity: 1,
												y: 0
											},
											exit: {
												opacity: 0,
												y: -8
											},
											transition: {
												type: "spring",
												stiffness: 500,
												damping: 30
											},
											className: "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted transition-all hover:bg-secondary/30",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
													className: "font-bold text-foreground",
													children: v.rank <= 3 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "inline-flex h-6 w-6 items-center justify-center rounded-full bg-orange-soft text-xs font-extrabold text-primary",
														children: v.rank
													}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["#", v.rank] })
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center gap-3",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
														src: v.photo,
														alt: v.name,
														className: "h-8 w-8 rounded-full object-cover border border-border"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "font-medium text-foreground",
														children: v.name
													})]
												}) }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
													className: "text-right font-semibold text-foreground",
													children: timeframe === "monthly" ? v.monthlyScore : timeframe === "yearly" ? v.yearlyScore : v.allTimeScore
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
													className: "text-center font-medium text-muted-foreground",
													children: v.programsCompleted
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableCell, {
													className: "text-center font-medium text-muted-foreground",
													children: [v.hours, "h"]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
													className: "text-muted-foreground text-sm",
													children: v.city
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: cn("rounded-full px-2.5 py-0.5 text-[10px] font-semibold", v.badge === "National Inspiration" && "bg-orange-soft text-primary", v.badge === "State Leader" && "bg-green-soft text-green", v.badge === "Mentor" && "bg-muted text-muted-foreground", v.badge === "Local Impact Maker" && "bg-orange-soft text-primary", v.badge === "Community Contributor" && "bg-green-soft text-green"),
													children: v.badge
												}) }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
													className: "text-center",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
														className: "inline-flex justify-center",
														children: [
															v.trend === "rising" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingUp, {
																className: "h-4 w-4 text-green",
																"aria-label": "Rising"
															}),
															v.trend === "stable" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, {
																className: "h-4 w-4 text-muted-foreground",
																"aria-label": "Stable"
															}),
															v.trend === "falling" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingDown, {
																className: "h-4 w-4 text-red-500",
																"aria-label": "Slow"
															})
														]
													})
												})
											]
										}, v.id))
									})
								})] }), listResult.totalPages > 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-6 flex items-center justify-between border-t border-border pt-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-xs text-muted-foreground",
										children: [
											"Showing page ",
											listResult.currentPage,
											" of ",
											listResult.totalPages
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
											variant: "outline",
											size: "sm",
											disabled: page === 1,
											onClick: () => setPage((p) => p - 1),
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "h-4 w-4 mr-0.5" }), " Previous"]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
											variant: "outline",
											size: "sm",
											disabled: page === listResult.totalPages,
											onClick: () => setPage((p) => p + 1),
											children: ["Next ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-4 w-4 ml-0.5" })]
										})]
									})]
								})]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "space-y-6",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-3xl border border-border bg-card p-6 shadow-soft",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display font-bold text-base text-foreground mb-4",
									children: "Milestones & Badges"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "space-y-4",
									children: MILESTONES.map((ms) => {
										const isUnlocked = unlockedMilestoneIds.includes(ms.id);
										const Icon = ms.icon;
										return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex gap-3.5 p-3 rounded-2xl border border-border bg-secondary/20 items-start",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: cn("grid h-10 w-10 shrink-0 place-items-center rounded-xl transition-all", isUnlocked ? "bg-orange-soft text-primary animate-pulse" : "bg-muted text-muted-foreground/40"),
												children: isUnlocked ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5 animate-bounce-slow" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "h-4 w-4" })
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center gap-1.5",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
														className: "text-xs font-bold text-foreground",
														children: ms.title
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-[9px] uppercase tracking-wider bg-card px-1.5 py-0.5 border border-border rounded font-semibold text-muted-foreground",
														children: ms.rank
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-[11px] text-muted-foreground mt-0.5 leading-normal",
													children: ms.desc
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: cn("text-[9px] font-semibold block mt-1.5 uppercase tracking-wide", isUnlocked ? "text-green font-bold" : "text-muted-foreground/50"),
													children: isUnlocked ? "✓ Unlocked" : "Locked"
												})
											] })]
										}, ms.id);
									})
								})]
							})
						})]
					})
				]
			})
		})
	] });
}
//#endregion
export { LeaderboardPage as component };
