import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { t as Button } from "./button-Bq5vK6RO.mjs";
import { l as PROGRAMS } from "./site-data-D1js5LWO.mjs";
import { t as Reveal } from "./Reveal-D41dhdcQ.mjs";
import { t as PageHero } from "./PageHero-DxzDS7c7.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { nt as ArrowRight, p as Sparkles, q as Check, t as lucide_react_exports } from "../_libs/lucide-react.mjs";
import { t as Route } from "./programs._slug-BtXLX9cH.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/programs._slug-BPfa1Xth.js
var import_jsx_runtime = require_jsx_runtime();
function ProgramDetail() {
	const { program } = Route.useLoaderData();
	const Icon = lucide_react_exports[program.icon] || Sparkles;
	const isGreen = program.accent === "green";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: program.tagline,
		title: program.title,
		description: program.description
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "py-16",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-10 px-5 lg:grid-cols-[1.4fr_1fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: `grid h-14 w-14 place-items-center rounded-2xl ${isGreen ? "bg-green-soft text-green" : "bg-orange-soft text-primary"}`,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-7 w-7" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-5 text-2xl font-bold text-foreground",
					children: "What we do"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-5 space-y-3",
					children: program.highlights.map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-start gap-3 rounded-2xl border border-border bg-card p-4 shadow-soft",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: `mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full ${isGreen ? "bg-green text-green-foreground" : "bg-primary text-primary-foreground"}`,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3 w-3" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm text-foreground/80",
							children: h
						})]
					}, h))
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: .1,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-3xl border border-border bg-secondary/40 p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-semibold text-foreground",
							children: "Impact so far"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-4 space-y-4",
							children: program.outcomes.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-2xl border border-border bg-card p-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-2xl font-bold text-primary",
									children: o.value
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-muted-foreground",
									children: o.label
								})]
							}, o.label))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							className: "mt-6 w-full",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/volunteer",
								children: ["Support this program ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "ml-1 h-4 w-4" })]
							})
						})
					]
				})
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto mt-12 max-w-6xl px-5",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-wrap gap-3",
				children: PROGRAMS.filter((p) => p.slug !== program.slug).map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/programs/$slug",
					params: { slug: p.slug },
					className: "rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground/80 transition-colors hover:border-primary hover:text-primary",
					children: p.title
				}, p.slug))
			})
		})]
	})] });
}
//#endregion
export { ProgramDetail as component };
