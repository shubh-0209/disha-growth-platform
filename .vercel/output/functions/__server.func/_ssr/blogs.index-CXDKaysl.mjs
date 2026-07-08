import { o as __toESM } from "../_runtime.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { t as BLOGS } from "./site-data-D1js5LWO.mjs";
import { t as Reveal } from "./Reveal-D41dhdcQ.mjs";
import { t as PageHero } from "./PageHero-DxzDS7c7.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { V as Clock, _ as Search } from "../_libs/lucide-react.mjs";
import { t as BlogCard } from "./cards-5BR3U2zM.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/blogs.index-CXDKaysl.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var CATS = [
	"All",
	"Financial Literacy",
	"Entrepreneurship",
	"Education",
	"Wellness",
	"Career Growth",
	"Environment"
];
function BlogIndex() {
	const [query, setQuery] = (0, import_react.useState)("");
	const [cat, setCat] = (0, import_react.useState)("All");
	const featured = BLOGS.find((b) => b.featured);
	const filtered = (0, import_react.useMemo)(() => BLOGS.filter((b) => {
		if (cat !== "All" && b.category !== cat) return false;
		if (query && !b.title.toLowerCase().includes(query.toLowerCase()) && !b.excerpt.toLowerCase().includes(query.toLowerCase())) return false;
		return true;
	}), [query, cat]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "The Disha Blog",
			title: "Ideas to help you grow",
			description: "Practical, honest writing on money, careers, entrepreneurship, wellness and building a better India."
		}),
		featured && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "pt-12",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto max-w-7xl px-5",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/blogs/$slug",
					params: { slug: featured.slug },
					className: "group grid overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-all hover:shadow-card lg:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative aspect-[16/10] overflow-hidden lg:aspect-auto",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: featured.cover,
							alt: featured.title,
							className: "h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "absolute left-4 top-4 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground",
							children: "Featured"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col justify-center p-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "w-fit rounded-full bg-green-soft px-2.5 py-0.5 text-xs font-semibold text-green",
								children: featured.category
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-3 text-2xl font-bold leading-tight text-foreground transition-colors group-hover:text-primary sm:text-3xl",
								children: featured.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-muted-foreground",
								children: featured.excerpt
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-5 flex items-center gap-3 text-xs text-muted-foreground",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "flex items-center gap-1",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-3.5 w-3.5" }),
											" ",
											featured.readingTime,
											" min read"
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "·" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: featured.author })
								]
							})
						]
					})]
				}) })
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-12",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-wrap gap-2",
							children: CATS.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setCat(c),
								className: cn("rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors", cat === c ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card text-foreground/80 hover:border-primary"),
								children: c
							}, c))
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative lg:w-72",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: query,
								onChange: (e) => setQuery(e.target.value),
								placeholder: "Search articles…",
								className: "w-full rounded-xl border border-border bg-card py-2.5 pl-9 pr-3 text-sm outline-none focus:border-primary"
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
						children: filtered.map((b, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: i * .05,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BlogCard, { blog: b })
						}, b.slug))
					}),
					filtered.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "rounded-2xl border border-dashed border-border bg-card p-12 text-center text-muted-foreground",
						children: "No articles match your search."
					})
				]
			})
		})
	] });
}
//#endregion
export { BlogIndex as component };
