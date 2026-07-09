import { o as __toESM } from "../_runtime.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { r as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { g as STORIES } from "./site-data-BqP6S8R0.mjs";
import { t as Reveal } from "./Reveal-D41dhdcQ.mjs";
import { t as PageHero } from "./PageHero-zEDJ8rYc.mjs";
import { i as StoryCard } from "./cards-DE852qYQ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/success-stories-CfcqEXwG.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var FILTERS = [
	"All",
	"Student",
	"Volunteer",
	"Mentor",
	"Community"
];
function SuccessStories() {
	const [filter, setFilter] = (0, import_react.useState)("All");
	const list = STORIES.filter((s) => filter === "All" || s.type === filter);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: "Success Stories",
		title: "Every life we touch tells a story",
		description: "Filter by the people at the heart of our work — students, volunteers, mentors and entire communities."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-8 flex flex-wrap gap-2",
				children: FILTERS.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setFilter(f),
					className: cn("rounded-full border px-4 py-1.5 text-sm font-medium transition-colors", filter === f ? "border-green bg-green text-green-foreground" : "border-border bg-card text-foreground/80 hover:border-green"),
					children: f
				}, f))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
				children: list.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * .05,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StoryCard, { story: s })
				}, s.id))
			})]
		})
	})] });
}
//#endregion
export { SuccessStories as component };
