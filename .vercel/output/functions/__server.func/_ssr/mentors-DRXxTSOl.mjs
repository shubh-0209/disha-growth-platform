import { o as __toESM } from "../_runtime.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { r as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { t as Button } from "./button-Bq5vK6RO.mjs";
import { c as MENTORS } from "./site-data-BqP6S8R0.mjs";
import { t as Reveal } from "./Reveal-D41dhdcQ.mjs";
import { t as PageHero } from "./PageHero-zEDJ8rYc.mjs";
import { B as Briefcase, L as Calendar } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/mentors-DRXxTSOl.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var TAGS = [
	"All",
	"Technology",
	"Entrepreneurship",
	"Financial Literacy",
	"Career Growth",
	"Design",
	"Marketing",
	"Wellness",
	"Education"
];
function Mentors() {
	const [tag, setTag] = (0, import_react.useState)("All");
	const filtered = MENTORS.filter((m) => tag === "All" || m.tags.includes(tag));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: "Mentor Network",
		title: "Learn from those who've walked the path",
		description: "Our mentors are experienced professionals giving back their time. Browse by expertise and book a session to accelerate your growth."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mb-8 flex flex-wrap gap-2",
					children: TAGS.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setTag(t),
						className: cn("rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors", tag === t ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card text-foreground/80 hover:border-primary"),
						children: t
					}, t))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
					children: filtered.map((m, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * .05,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex h-full flex-col rounded-3xl border border-border bg-card p-6 text-center shadow-soft transition-all hover:-translate-y-1 hover:shadow-card",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: m.photo,
									alt: m.name,
									loading: "lazy",
									className: "mx-auto h-24 w-24 rounded-full object-cover ring-4 ring-secondary"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-4 text-lg font-semibold text-foreground",
									children: m.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-medium text-primary",
									children: m.expertise
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-1 flex items-center justify-center gap-1.5 text-xs text-muted-foreground",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Briefcase, { className: "h-3.5 w-3.5" }),
										" ",
										m.experience
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-3 flex flex-wrap justify-center gap-1.5",
									children: m.tags.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "rounded-md bg-green-soft px-2 py-0.5 text-[11px] font-medium text-green",
										children: t
									}, t))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									onClick: () => toast.success(`Session request sent to ${m.name}!`, { description: "Our team will confirm your slot by email." }),
									className: "mt-5 w-full",
									variant: "outline",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "mr-1.5 h-4 w-4" }), " Book Session"]
								})
							]
						})
					}, m.name))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					className: "mt-14 rounded-3xl border border-border bg-gradient-section p-8 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-xl font-bold text-foreground",
							children: "Want to give back as a mentor?"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mx-auto mt-2 max-w-md text-sm text-muted-foreground",
							children: "Share your experience and shape the next generation of changemakers."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							className: "mt-5",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "/contact",
								children: "Become a Mentor"
							})
						})
					]
				})
			]
		})
	})] });
}
//#endregion
export { Mentors as component };
