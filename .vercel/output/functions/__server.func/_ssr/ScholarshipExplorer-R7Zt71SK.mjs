import { o as __toESM } from "../_runtime.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { r as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { m as SCHOLARSHIPS } from "./site-data-BqP6S8R0.mjs";
import { L as Calendar, U as Award, n as X, p as Search, y as MapPin } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ScholarshipExplorer-R7Zt71SK.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var CLASS_OPTS = [
	"All",
	"Class 10",
	"Class 12",
	"Undergraduate",
	"Postgraduate"
];
var STREAM_OPTS = [
	"All",
	"Science",
	"Commerce",
	"Arts",
	"Any"
];
var STATE_OPTS = [
	"All",
	"All India",
	"Punjab",
	"Delhi",
	"Maharashtra",
	"Karnataka"
];
var CAT_OPTS = [
	"All",
	"Merit",
	"Need-based",
	"Girls",
	"SC/ST/OBC",
	"Minority"
];
function Select({ label, value, options, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "mb-1.5 block text-xs font-semibold uppercase tracking-wide text-muted-foreground",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
			value,
			onChange: (e) => onChange(e.target.value),
			className: "w-full rounded-xl border border-border bg-background px-3 py-2.5 text-sm outline-none focus:border-primary",
			children: options.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
				value: o,
				children: o
			}, o))
		})]
	});
}
function ScholarshipExplorer({ limit }) {
	const [query, setQuery] = (0, import_react.useState)("");
	const [cls, setCls] = (0, import_react.useState)("All");
	const [stream, setStream] = (0, import_react.useState)("All");
	const [state, setState] = (0, import_react.useState)("All");
	const [cat, setCat] = (0, import_react.useState)("All");
	const filtered = (0, import_react.useMemo)(() => {
		const list = SCHOLARSHIPS.filter((s) => {
			if (query && !s.name.toLowerCase().includes(query.toLowerCase()) && !s.provider.toLowerCase().includes(query.toLowerCase())) return false;
			if (cls !== "All" && s.classLevel !== cls) return false;
			if (stream !== "All" && s.stream !== stream && s.stream !== "Any") return false;
			if (state !== "All" && s.state !== state) return false;
			if (cat !== "All" && s.category !== cat) return false;
			return true;
		});
		return limit ? list.slice(0, limit) : list;
	}, [
		query,
		cls,
		stream,
		state,
		cat,
		limit
	]);
	const reset = () => {
		setQuery("");
		setCls("All");
		setStream("All");
		setState("All");
		setCat("All");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-6 lg:grid-cols-[280px_1fr]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
			className: "rounded-3xl border border-border bg-card p-5 shadow-soft lg:sticky lg:top-24 lg:self-start",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						value: query,
						onChange: (e) => setQuery(e.target.value),
						placeholder: "Search scholarships…",
						className: "w-full rounded-xl border border-border bg-background py-2.5 pl-9 pr-3 text-sm outline-none focus:border-primary"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 space-y-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
							label: "Class",
							value: cls,
							options: CLASS_OPTS,
							onChange: setCls
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
							label: "Stream",
							value: stream,
							options: STREAM_OPTS,
							onChange: setStream
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
							label: "State",
							value: state,
							options: STATE_OPTS,
							onChange: setState
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
							label: "Category",
							value: cat,
							options: CAT_OPTS,
							onChange: setCat
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: reset,
					className: "mt-4 flex w-full items-center justify-center gap-1.5 rounded-xl border border-border py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-3.5 w-3.5" }), " Clear filters"]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mb-4 text-sm text-muted-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-semibold text-foreground",
					children: filtered.length
				}), " scholarships found"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-4 sm:grid-cols-2",
				children: filtered.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "group rounded-2xl border border-border bg-card p-5 shadow-soft transition-all hover:-translate-y-1 hover:shadow-card",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start justify-between gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-green-soft text-green",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, { className: "h-5 w-5" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-full bg-primary-soft px-2.5 py-1 text-xs font-semibold text-primary",
								children: s.amount
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "mt-3 font-display font-semibold leading-snug text-foreground",
							children: s.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted-foreground",
							children: s.provider
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-3 flex flex-wrap gap-1.5",
							children: [
								s.classLevel,
								s.stream,
								s.category
							].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-md bg-secondary px-2 py-0.5 text-[11px] font-medium text-foreground/70",
								children: t
							}, t))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-3 flex items-center justify-between border-t border-border pt-3 text-xs text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex items-center gap-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-3.5 w-3.5" }),
									" ",
									s.state
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex items-center gap-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "h-3.5 w-3.5" }),
									" ",
									new Date(s.deadline).toLocaleDateString("en-IN", {
										day: "numeric",
										month: "short"
									})
								]
							})]
						})
					]
				}, s.id))
			}),
			filtered.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: cn("rounded-2xl border border-dashed border-border bg-card p-10 text-center text-muted-foreground"),
				children: "No scholarships match your filters. Try clearing some."
			})
		] })]
	});
}
//#endregion
export { ScholarshipExplorer as t };
