import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { t as Button } from "./button-Bq5vK6RO.mjs";
import { c as ORG, d as STATS } from "./site-data-D1js5LWO.mjs";
import { t as Reveal } from "./Reveal-D41dhdcQ.mjs";
import { t as PageHero } from "./PageHero-DxzDS7c7.mjs";
import { t as SectionHeading } from "./SectionHeading-IXVmziHH.mjs";
import { t as AnimatedCounter } from "./AnimatedCounter-IfLpjwCb.mjs";
import { t as hero_3_default } from "./hero-3-D-qTISUv.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { F as Flame, R as Eye, d as Target, nt as ArrowRight, v as Quote } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-xi9VJ8FO.js
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
					src: hero_3_default,
					alt: "Indian youth learning together",
					loading: "lazy",
					className: "w-full rounded-3xl border border-border object-cover shadow-card"
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Our Focus",
					title: "Guiding India's youth towards their true path",
					description: "Empowering and steering the next generation."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					delay: .1,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 leading-relaxed text-muted-foreground",
							children: "In a fast-changing world, many young minds find themselves at a crossroads, feeling diverted or uncertain about their future path. At Disha For India, our purpose is to reach out to these young individuals, guide them with clarity, and help them align their skills with their life goals."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 leading-relaxed text-muted-foreground",
							children: "Through our structured student programs and emotional wellness coaching, we provide the direction and tools they need to live purposeful, successful, and impactful lives."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 rounded-2xl border border-border bg-secondary/40 p-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quote, { className: "h-6 w-6 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 font-display text-lg font-semibold text-foreground",
								children: "\"Guiding youth to discover their direction and unlock their true potential is our greatest commitment.\""
							})]
						})
					]
				})] })]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-y border-border bg-secondary/40 py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto max-w-6xl px-5",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-6 md:grid-cols-3",
					children: [
						{
							icon: Eye,
							title: "Vision",
							text: ORG.vision,
							accent: "text-primary bg-orange-soft"
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
							accent: "text-primary bg-orange-soft"
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
