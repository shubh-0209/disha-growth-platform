import { o as __toESM } from "../_runtime.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { o as OPPORTUNITIES, u as RESOURCES } from "./site-data-D1js5LWO.mjs";
import { t as Reveal } from "./Reveal-D41dhdcQ.mjs";
import { t as PageHero } from "./PageHero-DxzDS7c7.mjs";
import { t as SectionHeading } from "./SectionHeading-IXVmziHH.mjs";
import { $ as BookOpen, B as Code, I as FileText, J as Calendar, Z as Briefcase, i as Video, r as Wrench, s as Trophy, tt as ArrowUpRight } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/resources-CG5AQI5C.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var CATS = [
	"All",
	"Career Development",
	"Financial Literacy",
	"Communication Skills",
	"Entrepreneurship",
	"Personal Growth"
];
var TYPE_ICON = {
	Guide: BookOpen,
	Worksheet: FileText,
	Video,
	Toolkit: Wrench
};
var OPP_ICON = {
	Internship: Briefcase,
	Workshop: Calendar,
	Competition: Trophy,
	Hackathon: Code,
	Bootcamp: BookOpen
};
function Resources() {
	const [cat, setCat] = (0, import_react.useState)("All");
	const filtered = RESOURCES.filter((r) => cat === "All" || r.category === cat);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Resource Library",
			title: "Everything you need to grow, in one place",
			description: "Free, practical learning resources across the skills that matter — plus a live feed of opportunities to apply what you learn."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mb-8 flex flex-wrap gap-2",
					children: CATS.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setCat(c),
						className: cn("rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors", cat === c ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card text-foreground/80 hover:border-primary"),
						children: c
					}, c))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
					children: filtered.map((r, i) => {
						const Icon = TYPE_ICON[r.type];
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: i * .04,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "#",
								className: "group flex h-full flex-col rounded-3xl border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-card",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "grid h-11 w-11 place-items-center rounded-2xl bg-green-soft text-green",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5" })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xs font-medium text-muted-foreground",
											children: r.duration
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mt-4 w-fit rounded-full bg-secondary px-2.5 py-0.5 text-[11px] font-medium text-foreground/70",
										children: r.category
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-2 text-lg font-semibold text-foreground",
										children: r.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 flex-1 text-sm text-muted-foreground",
										children: r.description
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary",
										children: [
											"Open ",
											r.type.toLowerCase(),
											" ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" })
										]
									})
								]
							})
						}, r.id);
					})
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-t border-border bg-secondary/40 py-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Opportunity Center",
					title: "Internships, workshops, competitions & more",
					description: "Live opportunities for students to gain real-world experience and stand out."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid gap-4 md:grid-cols-2",
					children: OPPORTUNITIES.map((o, i) => {
						const Icon = OPP_ICON[o.type];
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: i * .04,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-soft transition-all hover:shadow-card",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-orange-soft text-primary",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-6 w-6" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0 flex-1",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex flex-wrap items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "rounded-md bg-green-soft px-2 py-0.5 text-[11px] font-semibold text-green",
												children: o.type
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-xs text-muted-foreground",
												children: o.org
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
											className: "mt-1 truncate font-semibold text-foreground",
											children: o.title
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "text-xs text-muted-foreground",
											children: [
												o.mode,
												" · Apply by ",
												new Date(o.deadline).toLocaleDateString("en-IN", {
													day: "numeric",
													month: "short"
												})
											]
										})
									]
								})]
							})
						}, o.id);
					})
				})]
			})
		})
	] });
}
//#endregion
export { Resources as component };
