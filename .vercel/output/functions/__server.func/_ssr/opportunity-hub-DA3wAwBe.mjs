import { o as __toESM } from "../_runtime.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { r as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { t as Button } from "./button-Bq5vK6RO.mjs";
import { u as OPPORTUNITY_HUB } from "./site-data-BqP6S8R0.mjs";
import { t as Reveal } from "./Reveal-D41dhdcQ.mjs";
import { t as PageHero } from "./PageHero-zEDJ8rYc.mjs";
import { B as Briefcase, D as GraduationCap, G as ArrowRight, L as Calendar, N as Code, h as Presentation, p as Search, s as Trophy, y as MapPin } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/opportunity-hub-DA3wAwBe.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var TYPES = [
	"All",
	"Internship",
	"Scholarship",
	"Workshop",
	"Competition",
	"Hackathon"
];
var MODES = [
	"All",
	"Remote",
	"Online",
	"Hybrid",
	"In-person"
];
var TYPE_ICON = {
	Internship: Briefcase,
	Scholarship: GraduationCap,
	Workshop: Presentation,
	Competition: Trophy,
	Hackathon: Code
};
var TYPE_ACCENT = {
	Internship: "bg-primary-soft text-primary",
	Scholarship: "bg-green-soft text-green",
	Workshop: "bg-primary-soft text-primary",
	Competition: "bg-green-soft text-green",
	Hackathon: "bg-primary-soft text-primary"
};
function formatDeadline(date) {
	return new Date(date).toLocaleDateString("en-IN", {
		day: "numeric",
		month: "short",
		year: "numeric"
	});
}
function OpportunityHub() {
	const [query, setQuery] = (0, import_react.useState)("");
	const [type, setType] = (0, import_react.useState)("All");
	const [mode, setMode] = (0, import_react.useState)("All");
	const filtered = (0, import_react.useMemo)(() => OPPORTUNITY_HUB.filter((o) => {
		if (type !== "All" && o.type !== type) return false;
		if (mode !== "All" && o.mode !== mode) return false;
		if (query) {
			const q = query.toLowerCase();
			if (!`${o.title} ${o.org} ${o.description} ${o.location}`.toLowerCase().includes(q)) return false;
		}
		return true;
	}), [
		query,
		type,
		mode
	]);
	const counts = (0, import_react.useMemo)(() => {
		const map = {
			Internship: 0,
			Scholarship: 0,
			Workshop: 0,
			Competition: 0,
			Hackathon: 0
		};
		for (const o of OPPORTUNITY_HUB) map[o.type]++;
		return map;
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: "Opportunity Hub",
		title: "Your next big break starts here",
		description: "Internships, scholarships, workshops, competitions and hackathons — curated for India's students. Search, filter and apply."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mb-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5",
					children: Object.keys(counts).map((t) => {
						const Icon = TYPE_ICON[t];
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl border border-border bg-card p-4 shadow-soft",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: cn("grid h-9 w-9 place-items-center rounded-xl", TYPE_ACCENT[t]),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-xl font-bold text-foreground",
									children: counts[t]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-xs text-muted-foreground",
									children: [t, "s"]
								})
							]
						}) }, t);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-8 flex flex-col gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							value: query,
							onChange: (e) => setQuery(e.target.value),
							placeholder: "Search by title, organisation or location…",
							className: "w-full rounded-xl border border-border bg-card py-2.5 pl-9 pr-3 text-sm outline-none focus:border-primary"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-wrap gap-2",
							children: TYPES.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setType(t),
								className: cn("rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors", type === t ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card text-foreground/80 hover:border-primary"),
								children: t
							}, t))
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-wrap gap-2 sm:ml-auto",
							children: MODES.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setMode(m),
								className: cn("rounded-full border px-3 py-1 text-xs font-medium transition-colors", mode === m ? "border-green bg-green text-green-foreground" : "border-border bg-card text-foreground/70 hover:border-green"),
								children: m
							}, m))
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mb-6 text-sm text-muted-foreground",
					children: [
						"Showing ",
						filtered.length,
						" of ",
						OPPORTUNITY_HUB.length,
						" opportunities"
					]
				}),
				filtered.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-3xl border border-dashed border-border bg-secondary/40 px-6 py-16 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-lg font-semibold text-foreground",
							children: "No opportunities match your filters"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted-foreground",
							children: "Try a different search term or reset your filters."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "outline",
							className: "mt-5",
							onClick: () => {
								setQuery("");
								setType("All");
								setMode("All");
							},
							children: "Clear filters"
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
					children: filtered.map((o, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * .03,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OpportunityCard, { opportunity: o })
					}, o.id))
				})
			]
		})
	})] });
}
function OpportunityCard({ opportunity: o }) {
	const Icon = TYPE_ICON[o.type];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-full flex-col rounded-3xl border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-card",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: cn("grid h-11 w-11 shrink-0 place-items-center rounded-2xl", TYPE_ACCENT[o.type]),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "rounded-full bg-secondary px-2.5 py-0.5 text-[11px] font-semibold text-foreground/70",
					children: o.type
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-4 text-lg font-semibold leading-snug text-foreground",
				children: o.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm font-medium text-muted-foreground",
				children: o.org
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 flex-1 text-sm leading-relaxed text-muted-foreground",
				children: o.description
			}),
			o.perk && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 rounded-xl bg-secondary/60 px-3 py-2 text-xs font-semibold text-foreground/80",
				children: o.perk
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 flex flex-wrap gap-3 text-xs text-muted-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "flex items-center gap-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-3.5 w-3.5" }),
						" ",
						o.mode,
						" · ",
						o.location
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "flex items-center gap-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "h-3.5 w-3.5" }),
						" Apply by ",
						formatDeadline(o.deadline)
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				className: "mt-5 w-full",
				onClick: () => toast.success("Interest registered!", { description: `We'll share details for "${o.title}" soon.` }),
				children: ["Apply Now ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "ml-1 h-4 w-4" })]
			})
		]
	});
}
//#endregion
export { OpportunityHub as component };
