import { t as cn } from "./utils-C_uf36nf.mjs";
import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { J as Calendar, V as Clock, p as Sparkles, t as lucide_react_exports, tt as ArrowUpRight, w as MapPin } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/cards-DE852qYQ.js
var import_jsx_runtime = require_jsx_runtime();
function ProgramCard({ program }) {
	const Icon = lucide_react_exports[program.icon] || Sparkles;
	const isGreen = program.accent === "green";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/programs/$slug",
		params: { slug: program.slug },
		className: "group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-card",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: cn("grid h-12 w-12 place-items-center rounded-2xl", isGreen ? "bg-success-soft text-success" : "bg-primary-soft text-primary"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-6 w-6" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-4 text-lg font-semibold text-foreground",
				children: program.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-0.5 text-sm font-medium text-muted-foreground",
				children: program.tagline
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 flex-1 text-sm leading-relaxed text-muted-foreground",
				children: program.description
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: cn("mt-4 inline-flex items-center gap-1 text-sm font-semibold", isGreen ? "text-green" : "text-primary"),
				children: ["Learn more ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" })]
			})
		]
	});
}
function EventCard({ event }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "group overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-all hover:-translate-y-1 hover:shadow-card",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative aspect-[16/10] overflow-hidden",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: event.image,
				alt: event.title,
				loading: "lazy",
				className: "h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: cn("absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-semibold", event.status === "upcoming" ? "bg-primary text-primary-foreground" : "bg-ink/80 text-background"),
				children: event.status === "upcoming" ? "Upcoming" : "Past"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "p-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "rounded-full bg-green-soft px-2.5 py-0.5 text-xs font-semibold text-green",
					children: event.category
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mt-3 text-lg font-semibold leading-snug text-foreground",
					children: event.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 line-clamp-2 text-sm text-muted-foreground",
					children: event.description
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 flex flex-wrap gap-3 text-xs text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "flex items-center gap-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "h-3.5 w-3.5" }),
							" ",
							new Date(event.date).toLocaleDateString("en-IN", {
								day: "numeric",
								month: "long",
								year: "numeric"
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "flex items-center gap-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-3.5 w-3.5" }),
							" ",
							event.location
						]
					})]
				})
			]
		})]
	});
}
function BlogCard({ blog }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/blogs/$slug",
		params: { slug: blog.slug },
		className: "group flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-all hover:-translate-y-1 hover:shadow-card",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "relative aspect-[16/10] overflow-hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: blog.cover,
				alt: blog.title,
				loading: "lazy",
				className: "h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-1 flex-col p-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "w-fit rounded-full bg-primary-soft px-2.5 py-0.5 text-xs font-semibold text-primary",
					children: blog.category
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mt-3 text-lg font-semibold leading-snug text-foreground transition-colors group-hover:text-primary",
					children: blog.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 line-clamp-2 flex-1 text-sm text-muted-foreground",
					children: blog.excerpt
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 flex items-center gap-3 text-xs text-muted-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex items-center gap-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-3.5 w-3.5" }),
								" ",
								blog.readingTime,
								" min read"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "·" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: new Date(blog.date).toLocaleDateString("en-IN", {
							day: "numeric",
							month: "short",
							year: "numeric"
						}) })
					]
				})
			]
		})]
	});
}
function StoryCard({ story }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "group overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-all hover:-translate-y-1 hover:shadow-card",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative aspect-[4/3] overflow-hidden",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: story.photo,
				alt: story.name,
				loading: "lazy",
				className: "h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "absolute left-3 top-3 rounded-full bg-background/90 px-3 py-1 text-xs font-semibold text-primary",
				children: story.type
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "p-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-lg font-semibold leading-snug text-foreground",
					children: story.headline
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm leading-relaxed text-muted-foreground",
					children: story.summary
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-3 text-sm font-semibold text-green",
					children: ["— ", story.name]
				})
			]
		})]
	});
}
//#endregion
export { StoryCard as i, EventCard as n, ProgramCard as r, BlogCard as t };
