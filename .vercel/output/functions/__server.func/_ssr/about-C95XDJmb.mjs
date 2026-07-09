import { r as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { t as Button } from "./button-Bq5vK6RO.mjs";
import { d as ORG, h as STATS, i as FOUNDER } from "./site-data-BqP6S8R0.mjs";
import { t as Reveal } from "./Reveal-D41dhdcQ.mjs";
import { t as PageHero } from "./PageHero-zEDJ8rYc.mjs";
import { t as SectionHeading } from "./SectionHeading-D1GLZG-y.mjs";
import { t as AnimatedCounter } from "./AnimatedCounter-IfLpjwCb.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { G as ArrowRight, O as Flame, c as Target, j as Eye, m as Quote } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-C95XDJmb.js
var import_jsx_runtime = require_jsx_runtime();
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "About Us",
			title: "We empower. We make the difference.",
			description: "Disha For India Foundation & Educational Trust is a youth-first movement skilling India's next generation for employability, entrepreneurship and a life of purpose."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: FOUNDER.photo,
					alt: FOUNDER.name,
					loading: "lazy",
					className: "w-full rounded-3xl border border-border object-cover shadow-card"
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Our Founder",
					title: FOUNDER.name,
					description: FOUNDER.role
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					delay: .1,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 leading-relaxed text-muted-foreground",
						children: FOUNDER.bio
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 rounded-2xl border border-border bg-secondary/40 p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quote, { className: "h-6 w-6 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 font-display text-lg font-semibold text-foreground",
							children: "\"Our fingerprints on the lives we touch never fade.\""
						})]
					})]
				})] })]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-y border-border bg-gradient-section py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto max-w-6xl px-5",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-6 md:grid-cols-3",
					children: [
						{
							icon: Eye,
							title: "Vision",
							text: ORG.vision,
							accent: "text-primary bg-primary-soft"
						},
						{
							icon: Target,
							title: "Mission",
							text: ORG.mission,
							accent: "text-green bg-green-soft"
						},
						{
							icon: Flame,
							title: "Passion",
							text: ORG.passion,
							accent: "text-primary bg-primary-soft"
						}
					].map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * .08,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex h-full flex-col rounded-3xl border border-border bg-card p-7 shadow-soft",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: `grid h-12 w-12 place-items-center rounded-2xl ${c.accent}`,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(c.icon, { className: "h-6 w-6" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-4 text-xl font-bold text-foreground",
									children: c.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm leading-relaxed text-muted-foreground",
									children: c.text
								})
							]
						})
					}, c.title))
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-6xl px-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-2 gap-6 md:grid-cols-5",
					children: STATS.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						delay: i * .06,
						className: "rounded-2xl border border-border bg-card p-5 text-center shadow-soft",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-3xl font-extrabold text-primary",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedCounter, {
								value: s.value,
								suffix: s.suffix
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-xs text-muted-foreground",
							children: s.label
						})]
					}, s.label))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 text-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						size: "lg",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/vision-mission",
							children: ["Our Vision & Mission ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "ml-1 h-4 w-4" })]
						})
					})
				})]
			})
		})
	] });
}
//#endregion
export { About as component };
