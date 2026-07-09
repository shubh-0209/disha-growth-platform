import { r as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { f as PROGRAMS } from "./site-data-BqP6S8R0.mjs";
import { t as Reveal } from "./Reveal-D41dhdcQ.mjs";
import { t as PageHero } from "./PageHero-zEDJ8rYc.mjs";
import { r as ProgramCard } from "./cards-DE852qYQ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/programs.index-3C8Slg_b.js
var import_jsx_runtime = require_jsx_runtime();
function Programs() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: "Our Programs",
		title: "Programs that build employable, conscious citizens",
		description: "Each program is designed to raise the employability and skill quotient of India's youth — turning potential into opportunity."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-7xl px-5",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
				children: PROGRAMS.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * .06,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProgramCard, { program: p })
				}, p.slug))
			})
		})
	})] });
}
//#endregion
export { Programs as component };
