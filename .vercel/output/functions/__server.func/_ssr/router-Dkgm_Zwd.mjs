import { o as __toESM } from "../_runtime.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { t as Button } from "./button-Bq5vK6RO.mjs";
import { c as ORG, l as PROGRAMS, t as BLOGS } from "./site-data-D1js5LWO.mjs";
import { n as motion, r as AnimatePresence } from "../_libs/framer-motion.mjs";
import { c as HeadContent, d as Outlet, f as lazyRouteComponent, g as useRouter, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { C as Menu, D as Linkedin, K as ChevronDown, L as Facebook, Q as Bot, S as MessageCircle, T as Mail, b as Phone, g as Send, k as Instagram, n as X, o as Twitter, w as MapPin } from "../_libs/lucide-react.mjs";
import { t as Route$18 } from "./blogs._slug-CacoFHxH.mjs";
import { t as Toaster } from "../_libs/sonner.mjs";
import { n as SheetClose, o as SheetTrigger, r as SheetContent, t as Sheet } from "./sheet-cDLwrcIE.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { n as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { t as Route$19 } from "./programs._slug-BtXLX9cH.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-Dkgm_Zwd.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-CghMvKVN.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
}
var TOOLS = [
	{
		to: "/opportunity-hub",
		label: "Opportunity Hub"
	},
	{
		to: "/volunteer",
		label: "Volunteer Hub"
	},
	{
		to: "/resources",
		label: "Resource Library"
	},
	{
		to: "/impact",
		label: "Impact Dashboard"
	},
	{
		to: "/leaderboard",
		label: "Contribution Leaderboard"
	}
];
var ABOUT = [
	{
		to: "/about",
		label: "About Disha"
	},
	{
		to: "/vision-mission",
		label: "Vision & Mission"
	},
	{
		to: "/programs",
		label: "Programs"
	},
	{
		to: "/success-stories",
		label: "Success Stories"
	}
];
var MAIN = [
	{
		to: "/events",
		label: "Events"
	},
	{
		to: "/blogs",
		label: "Blogs"
	},
	{
		to: "/gallery",
		label: "Gallery"
	},
	{
		to: "/contact",
		label: "Contact"
	}
];
function Logo() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/",
		className: "flex items-center gap-2.5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: "/logo.jpg",
			alt: "Disha For India Logo",
			className: "h-9 w-9 rounded-xl object-cover shadow-soft"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "flex flex-col leading-none",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "font-display text-base font-bold tracking-tight text-foreground",
				children: ["Disha ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-primary",
					children: "For India"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-[10px] font-medium uppercase tracking-wider text-muted-foreground",
				children: "Growth & Opportunity"
			})]
		})]
	});
}
function NavDropdown({ label, items }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "group relative",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			className: "flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-primary",
			children: [label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-3.5 w-3.5 transition-transform group-hover:rotate-180" })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "invisible absolute left-0 top-full z-50 w-60 translate-y-1 rounded-2xl border border-border bg-popover p-2 opacity-0 shadow-card transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100",
			children: items.map((it) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: it.to,
				className: "block rounded-lg px-3 py-2 text-sm text-foreground/80 transition-colors hover:bg-accent hover:text-primary",
				activeProps: { className: "bg-accent text-primary" },
				children: it.label
			}, it.to))
		})]
	});
}
function Navbar() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 12);
		onScroll();
		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: cn("sticky top-0 z-50 w-full border-b transition-all duration-300", scrolled ? "border-border bg-background/85 backdrop-blur-md" : "border-transparent bg-background"),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
			className: "mx-auto flex h-16 max-w-7xl items-center justify-between px-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hidden items-center gap-1 lg:flex",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavDropdown, {
							label: "About",
							items: ABOUT
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavDropdown, {
							label: "Student Tools",
							items: TOOLS
						}),
						MAIN.map((it) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: it.to,
							className: "rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-primary",
							activeProps: { className: "text-primary" },
							children: it.label
						}, it.to))
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hidden items-center gap-3 lg:flex",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "ghost",
						size: "sm",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/volunteer",
							children: "Volunteer"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						size: "sm",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/contact",
							children: "Create an Impact"
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Sheet, {
					open,
					onOpenChange: setOpen,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetTrigger, {
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "outline",
							size: "icon",
							className: "lg:hidden",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-5 w-5" })
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetContent, {
						side: "right",
						className: "w-[88vw] max-w-sm overflow-y-auto p-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between border-b border-border px-5 py-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetClose, {
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "ghost",
									size: "icon",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" })
								})
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "px-5 py-4",
							children: [[
								...ABOUT,
								...TOOLS,
								...MAIN
							].map((it) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetClose, {
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: it.to,
									className: "block rounded-lg px-3 py-2.5 text-sm font-medium text-foreground/80 hover:bg-accent hover:text-primary",
									activeProps: { className: "bg-accent text-primary" },
									children: it.label
								})
							}, it.to)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetClose, {
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									className: "mt-4 w-full",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/contact",
										children: "Create an Impact"
									})
								})
							})]
						})]
					})]
				})
			]
		})
	});
}
var COLS = [
	{
		title: "Organisation",
		links: [
			{
				to: "/about",
				label: "About Disha"
			},
			{
				to: "/vision-mission",
				label: "Vision & Mission"
			},
			{
				to: "/programs",
				label: "Programs"
			},
			{
				to: "/success-stories",
				label: "Success Stories"
			},
			{
				to: "/impact",
				label: "Impact Dashboard"
			}
		]
	},
	{
		title: "Student Tools",
		links: [
			{
				to: "/opportunity-hub",
				label: "Opportunity Hub"
			},
			{
				to: "/resources",
				label: "Resource Library"
			},
			{
				to: "/volunteer",
				label: "Volunteer Hub"
			},
			{
				to: "/leaderboard",
				label: "Contribution Leaderboard"
			}
		]
	},
	{
		title: "Explore",
		links: [
			{
				to: "/events",
				label: "Events"
			},
			{
				to: "/blogs",
				label: "Blogs"
			},
			{
				to: "/gallery",
				label: "Media Gallery"
			},
			{
				to: "/contact",
				label: "Contact Us"
			}
		]
	}
];
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "border-t border-border bg-ink text-background",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-5 py-14",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "[&_*]:!text-background",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-4 max-w-xs text-sm leading-relaxed text-background/70",
						children: [ORG.tagline, ". Education is the most powerful weapon which can be used to change the world."]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5 space-y-2 text-sm text-background/70",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: `mailto:${ORG.email}`,
								className: "flex items-center gap-2 hover:text-primary",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-4 w-4" }),
									" ",
									ORG.email
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: `tel:${ORG.phone}`,
								className: "flex items-center gap-2 hover:text-primary",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4" }),
									" ",
									ORG.phone
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: ORG.mapUrl,
								target: "_blank",
								rel: "noreferrer",
								className: "flex items-center gap-2 hover:text-primary",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-4 w-4" }), " Visit Map"]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-5 flex gap-3",
						children: [
							Twitter,
							Facebook,
							Instagram,
							Linkedin
						].map((Icon, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#",
							className: "grid h-9 w-9 place-items-center rounded-full bg-background/10 text-background/80 transition-colors hover:bg-primary hover:text-primary-foreground",
							"aria-label": "social link",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4" })
						}, i))
					})
				] }), COLS.map((col) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "text-sm font-semibold uppercase tracking-wider text-background",
					children: col.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 space-y-2.5",
					children: col.links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: l.to,
						className: "text-sm text-background/70 transition-colors hover:text-primary",
						children: l.label
					}) }, l.to))
				})] }, col.title))]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-12 flex flex-col items-center justify-between gap-3 border-t border-background/10 pt-6 text-center text-xs text-background/50 sm:flex-row sm:text-left",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" ",
					ORG.legalName,
					". All rights reserved."
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Skilling India's youth for employability & entrepreneurship." })]
			})]
		})
	});
}
var SUGGESTIONS = [
	"Which career suits me?",
	"Tips to start a business",
	"How to manage exam stress?"
];
function reply(input) {
	const q = input.toLowerCase();
	if (q.includes("career") || q.includes("suits") || q.includes("path")) return "Great question! Explore our Programs or resource library for detailed guides on tech, finance, entrepreneurship, design and more.";
	if (q.includes("scholar")) return "While we don't have scholarship explorer tools on our platform, you can explore our resource library and student programs for guidance on educational opportunities.";
	if (q.includes("business") || q.includes("startup") || q.includes("entrepre")) return "Start by finding a real problem and talking to 10 potential customers. Use the Business Model Canvas in our Resource Library, then build a tiny MVP. Our Entrepreneurship bootcamps can guide you further!";
	if (q.includes("stress") || q.includes("anxiety") || q.includes("exam")) return "Breathe slowly for 2 minutes before studying, break work into small chunks, and protect your sleep. Check the 'Managing Exam Stress' toolkit in our Wellness blog.";
	if (q.includes("volunteer")) return "Wonderful! Visit the Volunteer Hub to browse roles in Teaching, Design, Technology, Marketing and Community Outreach — remote and on-site options available.";
	if (q.includes("mentor")) return "We don't have a formal Mentor Network on our platform, but you can participate in our student programs and bootcamps to get guidance from our team and volunteers.";
	if (q.includes("hello") || q.includes("hi") || q.includes("hey")) return "Hi there! 👋 I'm Disha Assistant. I can help you explore careers, resources and programs. What would you like to know?";
	return "I'm here to guide your growth journey! Ask me about careers, entrepreneurship, wellness, or volunteering — or explore our Student Tools from the menu.";
}
function CareerChatbot() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [messages, setMessages] = (0, import_react.useState)([{
		role: "bot",
		text: "Hi! I'm Disha Assistant 🤖 — your guide to careers and growth. How can I help today?"
	}]);
	const [input, setInput] = (0, import_react.useState)("");
	const endRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		endRef.current?.scrollIntoView({ behavior: "smooth" });
	}, [messages, open]);
	const send = (text) => {
		const value = text.trim();
		if (!value) return;
		setMessages((m) => [...m, {
			role: "user",
			text: value
		}]);
		setInput("");
		setTimeout(() => {
			setMessages((m) => [...m, {
				role: "bot",
				text: reply(value)
			}]);
		}, 450);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		onClick: () => setOpen((o) => !o),
		"aria-label": "Open Disha Assistant",
		className: "fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-primary text-primary-foreground shadow-glow-orange transition-transform hover:scale-105",
		children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-6 w-6" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-6 w-6" })
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: open && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		initial: {
			opacity: 0,
			y: 24,
			scale: .96
		},
		animate: {
			opacity: 1,
			y: 0,
			scale: 1
		},
		exit: {
			opacity: 0,
			y: 24,
			scale: .96
		},
		transition: { duration: .2 },
		className: "fixed bottom-24 right-5 z-50 flex h-[460px] w-[88vw] max-w-sm flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-card",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-3 bg-ink px-4 py-3 text-background",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "grid h-9 w-9 place-items-center rounded-full bg-primary",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bot, { className: "h-5 w-5 text-primary-foreground" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-semibold",
					children: "Disha Assistant"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] text-background/60",
					children: "Career & growth guide"
				})] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex-1 space-y-3 overflow-y-auto bg-secondary/40 p-4",
				children: [
					messages.map((m, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: cn("flex", m.role === "user" ? "justify-end" : "justify-start"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: cn("max-w-[80%] rounded-2xl px-3.5 py-2 text-sm leading-relaxed", m.role === "user" ? "bg-primary text-primary-foreground" : "border border-border bg-card text-foreground"),
							children: m.text
						})
					}, i)),
					messages.length <= 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap gap-2 pt-1",
						children: SUGGESTIONS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => send(s),
							className: "rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground/80 transition-colors hover:border-primary hover:text-primary",
							children: s
						}, s))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { ref: endRef })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: (e) => {
					e.preventDefault();
					send(input);
				},
				className: "flex items-center gap-2 border-t border-border bg-card p-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					value: input,
					onChange: (e) => setInput(e.target.value),
					placeholder: "Ask me anything…",
					className: "flex-1 rounded-full border border-border bg-background px-4 py-2 text-sm outline-none focus:border-primary"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "submit",
					size: "icon",
					className: "rounded-full",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "h-4 w-4" })
				})]
			})
		]
	}) })] });
}
var Toaster$1 = ({ ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
		className: "toaster group",
		toastOptions: { classNames: {
			toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
			description: "group-[.toast]:text-muted-foreground",
			actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
			cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
		} },
		...props
	});
};
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$17 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Disha For India — India's Student Growth & Opportunity Platform" },
			{
				name: "description",
				content: "Disha For India empowers youth through skills, education and opportunities — mentoring, volunteering, student programs and resources."
			},
			{
				name: "author",
				content: "Disha For India Foundation & Educational Trust"
			},
			{
				property: "og:title",
				content: "Disha For India — Student Growth & Opportunity Platform"
			},
			{
				property: "og:description",
				content: "Empowering India's youth through skills, education and opportunities. Explore programs, mentorship and resources."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:site_name",
				content: "Disha For India"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "icon",
				href: "/logo.png"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Sora:wght@500;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$17.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex min-h-screen flex-col",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
					className: "flex-1",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CareerChatbot, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster$1, {
					position: "top-center",
					richColors: true
				})
			]
		})
	});
}
var $$splitComponentImporter$15 = () => import("./volunteer-Ci0zngS7.mjs");
var Route$16 = createFileRoute("/volunteer")({
	head: () => ({
		meta: [
			{ title: "Volunteer Hub — Disha For India" },
			{
				name: "description",
				content: "Browse volunteer opportunities in teaching, design, technology, marketing and community outreach. Invest your time to uplift India's youth."
			},
			{
				property: "og:title",
				content: "Volunteer Hub — Disha For India"
			},
			{
				property: "og:description",
				content: "Find a volunteer role and make a powerful contribution."
			},
			{
				property: "og:url",
				content: "/volunteer"
			}
		],
		links: [{
			rel: "canonical",
			href: "/volunteer"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$15, "component")
});
var $$splitComponentImporter$14 = () => import("./vision-mission-EBJmGaFN.mjs");
var Route$15 = createFileRoute("/vision-mission")({
	head: () => ({
		meta: [
			{ title: "Vision & Mission — Disha For India" },
			{
				name: "description",
				content: "Our vision to build a healthy, happy and wealthy society and our mission to skill India's youth for employability and entrepreneurship."
			},
			{
				property: "og:title",
				content: "Vision & Mission — Disha For India"
			},
			{
				property: "og:description",
				content: "Improving the employability and skill quotient of India's youth."
			},
			{
				property: "og:url",
				content: "/vision-mission"
			}
		],
		links: [{
			rel: "canonical",
			href: "/vision-mission"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$14, "component")
});
var $$splitComponentImporter$13 = () => import("./success-stories-D5nMY0EL.mjs");
var Route$14 = createFileRoute("/success-stories")({
	head: () => ({
		meta: [
			{ title: "Success Stories — Disha For India" },
			{
				name: "description",
				content: "Real transformation stories from students, volunteers and communities empowered by Disha For India."
			},
			{
				property: "og:title",
				content: "Success Stories — Disha For India"
			},
			{
				property: "og:description",
				content: "Filter inspiring journeys by student, volunteer and community."
			},
			{
				property: "og:url",
				content: "/success-stories"
			}
		],
		links: [{
			rel: "canonical",
			href: "/success-stories"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$13, "component")
});
var BASE_URL = "";
var Route$13 = createFileRoute("/sitemap.xml")({ server: { handlers: { GET: async () => {
	const staticPaths = [
		{
			path: "/",
			changefreq: "weekly",
			priority: "1.0"
		},
		{
			path: "/about",
			changefreq: "monthly",
			priority: "0.8"
		},
		{
			path: "/vision-mission",
			changefreq: "monthly",
			priority: "0.7"
		},
		{
			path: "/programs",
			changefreq: "monthly",
			priority: "0.8"
		},
		{
			path: "/opportunity-hub",
			changefreq: "weekly",
			priority: "0.8"
		},
		{
			path: "/volunteer",
			changefreq: "weekly",
			priority: "0.8"
		},
		{
			path: "/resources",
			changefreq: "weekly",
			priority: "0.7"
		},
		{
			path: "/events",
			changefreq: "weekly",
			priority: "0.7"
		},
		{
			path: "/success-stories",
			changefreq: "monthly",
			priority: "0.7"
		},
		{
			path: "/impact",
			changefreq: "monthly",
			priority: "0.7"
		},
		{
			path: "/blogs",
			changefreq: "weekly",
			priority: "0.8"
		},
		{
			path: "/gallery",
			changefreq: "monthly",
			priority: "0.6"
		},
		{
			path: "/contact",
			changefreq: "yearly",
			priority: "0.6"
		}
	];
	const programPaths = PROGRAMS.map((p) => ({
		path: `/programs/${p.slug}`,
		changefreq: "monthly",
		priority: "0.6"
	}));
	const blogPaths = BLOGS.map((b) => ({
		path: `/blogs/${b.slug}`,
		changefreq: "monthly",
		priority: "0.6"
	}));
	const xml = [
		`<?xml version="1.0" encoding="UTF-8"?>`,
		`<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
		...[
			...staticPaths,
			...programPaths,
			...blogPaths
		].map((e) => [
			`  <url>`,
			`    <loc>${BASE_URL}${e.path}</loc>`,
			e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
			e.priority ? `    <priority>${e.priority}</priority>` : null,
			`  </url>`
		].filter(Boolean).join("\n")),
		`</urlset>`
	].join("\n");
	return new Response(xml, { headers: {
		"Content-Type": "application/xml",
		"Cache-Control": "public, max-age=3600"
	} });
} } } });
var $$splitComponentImporter$12 = () => import("./resources-CG5AQI5C.mjs");
var Route$12 = createFileRoute("/resources")({
	head: () => ({
		meta: [
			{ title: "Resource Library & Opportunity Center — Disha For India" },
			{
				name: "description",
				content: "Free guides, worksheets and toolkits on career development, financial literacy, communication, entrepreneurship and personal growth — plus internships, workshops, hackathons and bootcamps."
			},
			{
				property: "og:title",
				content: "Resource Library — Disha For India"
			},
			{
				property: "og:description",
				content: "Learn, grow and find your next opportunity."
			},
			{
				property: "og:url",
				content: "/resources"
			}
		],
		links: [{
			rel: "canonical",
			href: "/resources"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$12, "component")
});
var $$splitComponentImporter$11 = () => import("./programs-CCaYmP1m.mjs");
var Route$11 = createFileRoute("/programs")({ component: lazyRouteComponent($$splitComponentImporter$11, "component") });
var $$splitComponentImporter$10 = () => import("./opportunity-hub-DLRCkqj1.mjs");
var Route$10 = createFileRoute("/opportunity-hub")({
	head: () => ({
		meta: [
			{ title: "Opportunity Hub — Disha For India" },
			{
				name: "description",
				content: "Discover internships, workshops, competitions and hackathons for Indian students. Search and filter opportunities in one place."
			},
			{
				property: "og:title",
				content: "Opportunity Hub — Disha For India"
			},
			{
				property: "og:description",
				content: "Find your next internship, workshop, competition or hackathon."
			},
			{
				property: "og:url",
				content: "/opportunity-hub"
			}
		],
		links: [{
			rel: "canonical",
			href: "/opportunity-hub"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$10, "component")
});
var $$splitComponentImporter$9 = () => import("./leaderboard-DLdlevSb.mjs");
var Route$9 = createFileRoute("/leaderboard")({
	head: () => ({
		meta: [
			{ title: "Contribution Leaderboard — Disha For India" },
			{
				name: "description",
				content: "Recognizing the dedication and contributions of Disha For India's volunteers across communities. Browse rank, scores, and contribution records."
			},
			{
				property: "og:title",
				content: "Contribution Leaderboard — Disha For India"
			},
			{
				property: "og:description",
				content: "Recognizing volunteers making meaningful contributions across communities."
			},
			{
				property: "og:url",
				content: "/leaderboard"
			}
		],
		links: [{
			rel: "canonical",
			href: "/leaderboard"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
var $$splitComponentImporter$8 = () => import("./impact-Cxgk9ckY.mjs");
var Route$8 = createFileRoute("/impact")({
	head: () => ({
		meta: [
			{ title: "Impact Dashboard — Disha For India" },
			{
				name: "description",
				content: "See Disha For India's measurable impact: students reached, training hours, events conducted, volunteers and communities impacted — with interactive charts."
			},
			{
				property: "og:title",
				content: "Impact Dashboard — Disha For India"
			},
			{
				property: "og:description",
				content: "Transparent, measurable social impact across India."
			},
			{
				property: "og:url",
				content: "/impact"
			}
		],
		links: [{
			rel: "canonical",
			href: "/impact"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./gallery-DjlCRpcw.mjs");
var Route$7 = createFileRoute("/gallery")({
	head: () => ({
		meta: [
			{ title: "Media Gallery — Disha For India" },
			{
				name: "description",
				content: "Photo highlights from Disha For India events, workshops, drives and community programs across the country."
			},
			{
				property: "og:title",
				content: "Media Gallery — Disha For India"
			},
			{
				property: "og:description",
				content: "Moments from our journey empowering India's youth."
			},
			{
				property: "og:url",
				content: "/gallery"
			}
		],
		links: [{
			rel: "canonical",
			href: "/gallery"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./events-BfjoyOtJ.mjs");
var Route$6 = createFileRoute("/events")({
	head: () => ({
		meta: [
			{ title: "Events — Disha For India" },
			{
				name: "description",
				content: "Upcoming and past events from Disha For India — career fairs, founder bootcamps, financial literacy drives, wellness camps and community programs."
			},
			{
				property: "og:title",
				content: "Events — Disha For India"
			},
			{
				property: "og:description",
				content: "Join our career fairs, bootcamps, drives and community events."
			},
			{
				property: "og:url",
				content: "/events"
			}
		],
		links: [{
			rel: "canonical",
			href: "/events"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./contact-DnNH2u3x.mjs");
var Route$5 = createFileRoute("/contact")({
	head: () => ({
		meta: [
			{ title: "Contact Us — Disha For India" },
			{
				name: "description",
				content: "Get in touch with Disha For India Foundation & Educational Trust. Volunteer, partner, or simply say hello."
			},
			{
				property: "og:title",
				content: "Contact Us — Disha For India"
			},
			{
				property: "og:description",
				content: "Reach out to create an impact with Disha For India."
			},
			{
				property: "og:url",
				content: "/contact"
			}
		],
		links: [{
			rel: "canonical",
			href: "/contact"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./blogs-BO-Mf7Wp.mjs");
var Route$4 = createFileRoute("/blogs")({ component: lazyRouteComponent($$splitComponentImporter$4, "component") });
var $$splitComponentImporter$3 = () => import("./about-xi9VJ8FO.mjs");
var Route$3 = createFileRoute("/about")({
	head: () => ({
		meta: [
			{ title: "About Disha For India — Our Mission & Purpose" },
			{
				name: "description",
				content: "Learn about Disha For India Foundation & Educational Trust, dedicated to skilling and guiding India's youth toward their true path."
			},
			{
				property: "og:title",
				content: "About Disha For India"
			},
			{
				property: "og:description",
				content: "We empower. We make the difference. Skilling India's youth for a brighter future."
			},
			{
				property: "og:url",
				content: "/about"
			}
		],
		links: [{
			rel: "canonical",
			href: "/about"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./routes-D5I4lxYu.mjs");
var Route$2 = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "Disha For India — Student Growth & Opportunity Platform" },
		{
			name: "description",
			content: "Empowering India's youth through skills, education and opportunities. Explore programs, mentorship, volunteering and curated resources."
		},
		{
			property: "og:title",
			content: "Disha For India — Student Growth & Opportunity Platform"
		},
		{
			property: "og:description",
			content: "Empowering India's youth through skills, education and opportunities."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./programs.index-JaHQ39Eb.mjs");
var Route$1 = createFileRoute("/programs/")({
	head: () => ({
		meta: [
			{ title: "Programs — Disha For India" },
			{
				name: "description",
				content: "Explore Disha For India programs: Financial Literacy, Entrepreneurship, Wellness, Clean & Green India, Education and Community Development."
			},
			{
				property: "og:title",
				content: "Programs — Disha For India"
			},
			{
				property: "og:description",
				content: "Skilling youth across financial literacy, entrepreneurship, wellness, environment and education."
			},
			{
				property: "og:url",
				content: "/programs"
			}
		],
		links: [{
			rel: "canonical",
			href: "/programs"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./blogs.index-CXDKaysl.mjs");
var Route = createFileRoute("/blogs/")({
	head: () => ({
		meta: [
			{ title: "Blog — Disha For India" },
			{
				name: "description",
				content: "Practical articles on financial literacy, entrepreneurship, education, wellness, career growth and the environment from Disha For India."
			},
			{
				property: "og:title",
				content: "Blog — Disha For India"
			},
			{
				property: "og:description",
				content: "Insights to help India's students grow."
			},
			{
				property: "og:url",
				content: "/blogs"
			}
		],
		links: [{
			rel: "canonical",
			href: "/blogs"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var VolunteerRoute = Route$16.update({
	id: "/volunteer",
	path: "/volunteer",
	getParentRoute: () => Route$17
});
var VisionMissionRoute = Route$15.update({
	id: "/vision-mission",
	path: "/vision-mission",
	getParentRoute: () => Route$17
});
var SuccessStoriesRoute = Route$14.update({
	id: "/success-stories",
	path: "/success-stories",
	getParentRoute: () => Route$17
});
var SitemapDotxmlRoute = Route$13.update({
	id: "/sitemap.xml",
	path: "/sitemap.xml",
	getParentRoute: () => Route$17
});
var ResourcesRoute = Route$12.update({
	id: "/resources",
	path: "/resources",
	getParentRoute: () => Route$17
});
var ProgramsRoute = Route$11.update({
	id: "/programs",
	path: "/programs",
	getParentRoute: () => Route$17
});
var OpportunityHubRoute = Route$10.update({
	id: "/opportunity-hub",
	path: "/opportunity-hub",
	getParentRoute: () => Route$17
});
var LeaderboardRoute = Route$9.update({
	id: "/leaderboard",
	path: "/leaderboard",
	getParentRoute: () => Route$17
});
var ImpactRoute = Route$8.update({
	id: "/impact",
	path: "/impact",
	getParentRoute: () => Route$17
});
var GalleryRoute = Route$7.update({
	id: "/gallery",
	path: "/gallery",
	getParentRoute: () => Route$17
});
var EventsRoute = Route$6.update({
	id: "/events",
	path: "/events",
	getParentRoute: () => Route$17
});
var ContactRoute = Route$5.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$17
});
var BlogsRoute = Route$4.update({
	id: "/blogs",
	path: "/blogs",
	getParentRoute: () => Route$17
});
var AboutRoute = Route$3.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$17
});
var IndexRoute = Route$2.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$17
});
var ProgramsIndexRoute = Route$1.update({
	id: "/",
	path: "/",
	getParentRoute: () => ProgramsRoute
});
var BlogsIndexRoute = Route.update({
	id: "/",
	path: "/",
	getParentRoute: () => BlogsRoute
});
var ProgramsSlugRoute = Route$19.update({
	id: "/$slug",
	path: "/$slug",
	getParentRoute: () => ProgramsRoute
});
var BlogsRouteChildren = {
	BlogsSlugRoute: Route$18.update({
		id: "/$slug",
		path: "/$slug",
		getParentRoute: () => BlogsRoute
	}),
	BlogsIndexRoute
};
var BlogsRouteWithChildren = BlogsRoute._addFileChildren(BlogsRouteChildren);
var ProgramsRouteChildren = {
	ProgramsSlugRoute,
	ProgramsIndexRoute
};
var rootRouteChildren = {
	IndexRoute,
	AboutRoute,
	BlogsRoute: BlogsRouteWithChildren,
	ContactRoute,
	EventsRoute,
	GalleryRoute,
	ImpactRoute,
	LeaderboardRoute,
	OpportunityHubRoute,
	ProgramsRoute: ProgramsRoute._addFileChildren(ProgramsRouteChildren),
	ResourcesRoute,
	SitemapDotxmlRoute,
	SuccessStoriesRoute,
	VisionMissionRoute,
	VolunteerRoute
};
var routeTree = Route$17._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
