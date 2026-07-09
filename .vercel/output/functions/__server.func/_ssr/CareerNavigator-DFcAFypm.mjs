import { o as __toESM } from "../_runtime.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { r as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { t as Button } from "./button-Bq5vK6RO.mjs";
import { n as CAREER_PATHS } from "./site-data-BqP6S8R0.mjs";
import { n as motion } from "../_libs/framer-motion.mjs";
import { D as GraduationCap, G as ArrowRight, M as Compass, c as Target, u as Sparkles } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/CareerNavigator-DFcAFypm.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var CLASSES = [
	"Class 10",
	"Class 12",
	"Undergraduate"
];
var INTERESTS = [
	"Technology",
	"Business",
	"Healthcare",
	"Creative",
	"Science"
];
function CareerNavigator({ compact = false }) {
	const [cls, setCls] = (0, import_react.useState)(CLASSES[1]);
	const [interest, setInterest] = (0, import_react.useState)("Technology");
	const [show, setShow] = (0, import_react.useState)(false);
	const path = CAREER_PATHS[interest];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-6 lg:grid-cols-[1fr_1.2fr]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-3xl border border-border bg-card p-6 shadow-soft",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2 text-primary",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Compass, { className: "h-5 w-5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-sm font-semibold uppercase tracking-wider",
					children: "Build your roadmap"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-5 space-y-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "mb-2 flex items-center gap-2 text-sm font-semibold text-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GraduationCap, { className: "h-4 w-4 text-muted-foreground" }), " Your class"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap gap-2",
						children: CLASSES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => {
								setCls(c);
								setShow(false);
							},
							className: cn("rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors", cls === c ? "border-primary bg-primary text-primary-foreground" : "border-border bg-background text-foreground/80 hover:border-primary"),
							children: c
						}, c))
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "mb-2 flex items-center gap-2 text-sm font-semibold text-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-4 w-4 text-muted-foreground" }), " Your interest"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap gap-2",
						children: INTERESTS.map((it) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => {
								setInterest(it);
								setShow(false);
							},
							className: cn("rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors", interest === it ? "border-green bg-green text-green-foreground" : "border-border bg-background text-foreground/80 hover:border-green"),
							children: it
						}, it))
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						onClick: () => setShow(true),
						className: "w-full",
						size: "lg",
						children: ["Generate Roadmap ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "ml-1 h-4 w-4" })]
					})
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "rounded-3xl border border-border bg-secondary/40 p-6",
			children: !show ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex h-full min-h-56 flex-col items-center justify-center text-center text-muted-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Target, { className: "mb-3 h-10 w-10 text-primary/40" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "max-w-xs text-sm",
					children: "Select your class and interest, then generate a personalised visual career roadmap."
				})]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary",
						children: cls
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "rounded-full bg-green/10 px-3 py-1 text-xs font-semibold text-green",
						children: interest
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm font-medium text-foreground",
					children: path.goal
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-5 space-y-3",
					children: path.steps.slice(0, compact ? 3 : 4).map((step, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							x: -12
						},
						animate: {
							opacity: 1,
							x: 0
						},
						transition: { delay: i * .1 },
						className: "flex gap-3 rounded-2xl border border-border bg-card p-3.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid h-8 w-8 shrink-0 place-items-center rounded-full bg-primary text-sm font-bold text-primary-foreground",
							children: i + 1
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-semibold text-foreground",
							children: step.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs leading-relaxed text-muted-foreground",
							children: step.detail
						})] })]
					}, step.title))
				})
			] })
		})]
	});
}
//#endregion
export { CareerNavigator as t };
