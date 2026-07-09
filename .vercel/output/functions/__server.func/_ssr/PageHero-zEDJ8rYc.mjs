import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { t as Reveal } from "./Reveal-D41dhdcQ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/PageHero-zEDJ8rYc.js
var import_jsx_runtime = require_jsx_runtime();
function PageHero({ eyebrow, title, description, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "relative overflow-hidden border-b border-border bg-background py-16 text-center md:py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "relative z-10 mx-auto max-w-3xl px-5",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
				eyebrow && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary",
					children: eyebrow
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-4 max-w-3xl text-4xl font-bold leading-[1.05] text-foreground sm:text-5xl",
					children: title
				}),
				description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground",
					children: description
				}),
				children && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8",
					children
				})
			] })
		})
	});
}
//#endregion
export { PageHero as t };
