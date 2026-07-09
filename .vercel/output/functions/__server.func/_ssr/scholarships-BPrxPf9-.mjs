import { r as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { t as PageHero } from "./PageHero-zEDJ8rYc.mjs";
import { t as ScholarshipExplorer } from "./ScholarshipExplorer-R7Zt71SK.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/scholarships-BPrxPf9-.js
var import_jsx_runtime = require_jsx_runtime();
function Scholarships() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: "Scholarship Explorer",
		title: "Funding your education shouldn't be a guessing game",
		description: "Filter by class, stream, state and category to find scholarships you qualify for — so no deserving student misses an opportunity."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-6xl px-5",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScholarshipExplorer, {})
		})
	})] });
}
//#endregion
export { Scholarships as component };
