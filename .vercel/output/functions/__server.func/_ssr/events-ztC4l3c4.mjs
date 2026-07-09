import { o as __toESM } from "../_runtime.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { r as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { r as EVENTS } from "./site-data-BqP6S8R0.mjs";
import { t as Reveal } from "./Reveal-D41dhdcQ.mjs";
import { t as PageHero } from "./PageHero-zEDJ8rYc.mjs";
import { L as Calendar, y as MapPin } from "../_libs/lucide-react.mjs";
import { n as EventCard } from "./cards-DE852qYQ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/events-ztC4l3c4.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Events() {
	const [tab, setTab] = (0, import_react.useState)("upcoming");
	const list = EVENTS.filter((e) => e.status === tab).sort((a, b) => +new Date(a.date) - +new Date(b.date));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: "Events",
		title: "Where learning meets community",
		description: "Discover what's coming up and revisit the moments that shaped our journey."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mb-10 inline-flex rounded-full border border-border bg-card p-1",
					children: ["upcoming", "past"].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => setTab(t),
						className: cn("rounded-full px-5 py-2 text-sm font-semibold capitalize transition-colors", tab === t ? "bg-primary text-primary-foreground" : "text-foreground/70 hover:text-primary"),
						children: [t, " events"]
					}, t))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative space-y-8 before:absolute before:left-[19px] before:top-2 before:h-full before:w-0.5 before:bg-border md:before:left-1/2",
					children: list.map((e, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * .06,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: cn("relative grid gap-4 md:grid-cols-2 md:gap-12", i % 2 === 1 && "md:[direction:rtl]"),
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute left-[11px] top-3 z-10 h-4 w-4 rounded-full border-4 border-background bg-primary md:left-1/2 md:-translate-x-1/2" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: cn("pl-12 md:pl-0", i % 2 === 0 ? "md:text-right" : "md:[direction:ltr]"),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "inline-flex flex-col gap-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-sm font-bold text-primary",
											children: new Date(e.date).toLocaleDateString("en-IN", {
												day: "numeric",
												month: "long",
												year: "numeric"
											})
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "flex items-center gap-1 text-xs text-muted-foreground md:justify-end",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-3.5 w-3.5" }),
												" ",
												e.location
											]
										})]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "pl-12 md:[direction:ltr] md:pl-0",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EventCard, { event: e })
								})
							]
						})
					}, e.id))
				}),
				list.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl border border-dashed border-border bg-card p-12 text-center text-muted-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "mx-auto mb-3 h-8 w-8 text-primary/40" }),
						"No ",
						tab,
						" events right now. Check back soon!"
					]
				})
			]
		})
	})] });
}
//#endregion
export { Events as component };
