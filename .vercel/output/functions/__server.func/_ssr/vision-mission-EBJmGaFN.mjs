import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { t as Button } from "./button-Bq5vK6RO.mjs";
import { c as ORG } from "./site-data-D1js5LWO.mjs";
import { t as Reveal } from "./Reveal-D41dhdcQ.mjs";
import { t as PageHero } from "./PageHero-DxzDS7c7.mjs";
import { t as SectionHeading } from "./SectionHeading-IXVmziHH.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { F as Flame, O as Lightbulb, R as Eye, a as Users, d as Target, h as ShieldCheck, j as Heart, nt as ArrowRight } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/vision-mission-EBJmGaFN.js
var import_jsx_runtime = require_jsx_runtime();
var VALUES = [
	{
		icon: Heart,
		title: "Empathy",
		text: "We meet every learner with compassion and belief in their potential."
	},
	{
		icon: ShieldCheck,
		title: "Integrity",
		text: "We live by our thoughts and values every single day."
	},
	{
		icon: Lightbulb,
		title: "Innovation",
		text: "We reimagine education and skilling for a fast-changing world."
	},
	{
		icon: Users,
		title: "Community",
		text: "We grow together — students, volunteers, and families."
	}
];
function VisionMission() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Vision · Mission · Passion",
			title: "Our vision, mission & passion",
			description: "The compass that guides everything we do at Disha For India Foundation & Educational Trust."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto max-w-5xl space-y-6 px-5",
				children: [
					{
						icon: Eye,
						label: "Vision",
						text: ORG.vision,
						accent: "bg-orange-soft text-primary"
					},
					{
						icon: Target,
						label: "Mission",
						text: ORG.mission,
						accent: "bg-green-soft text-green"
					},
					{
						icon: Flame,
						label: "Passion",
						text: ORG.passion,
						accent: "bg-orange-soft text-primary"
					}
				].map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * .08,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-5 rounded-3xl border border-border bg-card p-7 shadow-soft sm:flex-row sm:items-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: `grid h-16 w-16 shrink-0 place-items-center rounded-2xl ${c.accent}`,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(c.icon, { className: "h-8 w-8" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-2xl font-bold text-foreground",
							children: c.label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 leading-relaxed text-muted-foreground",
							children: c.text
						})] })]
					})
				}, c.label))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-y border-border bg-secondary/40 py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-6xl px-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
						eyebrow: "Core Values",
						title: "The principles we stand on",
						align: "center"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4",
						children: VALUES.map((v, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: i * .06,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex h-full flex-col rounded-3xl border border-border bg-card p-6 text-center shadow-soft",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-orange-soft text-primary",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(v.icon, { className: "h-6 w-6" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-4 font-semibold text-foreground",
										children: v.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-sm text-muted-foreground",
										children: v.text
									})
								]
							})
						}, v.title))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-12 text-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							size: "lg",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/programs",
								children: ["See our programs ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "ml-1 h-4 w-4" })]
							})
						})
					})
				]
			})
		})
	] });
}
//#endregion
export { VisionMission as component };
