import { o as __toESM } from "../_runtime.mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { r as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { a as Portal, c as Trigger, i as Overlay, n as Content, o as Root, r as Description, s as Title, t as Close } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { t as Button } from "./button-Bq5vK6RO.mjs";
import { d as ORG, f as PROGRAMS, t as BLOGS } from "./site-data-BqP6S8R0.mjs";
import { n as motion, r as AnimatePresence } from "../_libs/framer-motion.mjs";
import { c as HeadContent, d as Outlet, f as lazyRouteComponent, g as useRouter, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { A as Facebook, C as Instagram, F as ChevronDown, V as Bot, _ as MessageCircle, b as Mail, f as Send, g as Phone, n as X, o as Twitter, v as Menu, x as Linkedin, y as MapPin } from "../_libs/lucide-react.mjs";
import { t as Route$20 } from "./blogs._slug-DAQ7xgBK.mjs";
import { t as Toaster } from "../_libs/sonner.mjs";
import { t as Route$21 } from "./programs._slug-DM0suVNu.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-D56yUaL1.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-63D3CS4a.css";
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
var Sheet = Root;
var SheetTrigger = Trigger;
var SheetClose = Close;
var SheetPortal = Portal;
var SheetOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Overlay, {
	className: cn("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props,
	ref
}));
SheetOverlay.displayName = Overlay.displayName;
var sheetVariants = cva("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out", {
	variants: { side: {
		top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
		bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
		left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
		right: "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
	} },
	defaultVariants: { side: "right" }
});
var SheetContent = import_react.forwardRef(({ side = "right", className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Content, {
	ref,
	className: cn(sheetVariants({ side }), className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Close, {
		className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Close"
		})]
	}), children]
})] }));
SheetContent.displayName = Content.displayName;
var SheetHeader = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col space-y-2 text-center sm:text-left", className),
	...props
});
SheetHeader.displayName = "SheetHeader";
var SheetFooter = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
	...props
});
SheetFooter.displayName = "SheetFooter";
var SheetTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Title, {
	ref,
	className: cn("text-lg font-semibold text-foreground", className),
	...props
}));
SheetTitle.displayName = Title.displayName;
var SheetDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Description, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
SheetDescription.displayName = Description.displayName;
var TOOLS = [
	{
		to: "/career-navigator",
		label: "Career Navigator"
	},
	{
		to: "/scholarships",
		label: "Scholarship Explorer"
	},
	{
		to: "/opportunity-hub",
		label: "Opportunity Hub"
	},
	{
		to: "/mentors",
		label: "Mentor Network"
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
		className: "flex items-center gap-2.5 group",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: "/logo.png",
			alt: "Disha For India Icon",
			className: "h-10 w-auto object-contain transition-transform group-hover:scale-105"
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
				to: "/career-navigator",
				label: "Career Navigator"
			},
			{
				to: "/scholarships",
				label: "Scholarship Explorer"
			},
			{
				to: "/opportunity-hub",
				label: "Opportunity Hub"
			},
			{
				to: "/mentors",
				label: "Mentor Network"
			},
			{
				to: "/resources",
				label: "Resource Library"
			},
			{
				to: "/volunteer",
				label: "Volunteer Hub"
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
	"How do I find scholarships?",
	"Tips to start a business",
	"How to manage exam stress?"
];
function reply(input) {
	const q = input.toLowerCase();
	if (q.includes("career") || q.includes("suits") || q.includes("path")) return "Great question! Try our Career Navigator — pick your class, interests and goal to get a visual roadmap. If you like Technology, paths include Web Development, Data Science and Cyber Security.";
	if (q.includes("scholar")) return "Head to the Scholarship Explorer. You can filter by class, stream, state and category to find scholarships you're eligible for — including merit, need-based and girls' scholarships.";
	if (q.includes("business") || q.includes("startup") || q.includes("entrepre")) return "Start by finding a real problem and talking to 10 potential customers. Use the Business Model Canvas in our Resource Library, then build a tiny MVP. Our Entrepreneurship bootcamps can guide you further!";
	if (q.includes("stress") || q.includes("anxiety") || q.includes("exam")) return "Breathe slowly for 2 minutes before studying, break work into small chunks, and protect your sleep. Check the 'Managing Exam Stress' toolkit in our Wellness blog.";
	if (q.includes("volunteer")) return "Wonderful! Visit the Volunteer Hub to browse roles in Teaching, Design, Technology, Marketing and Community Outreach — remote and on-site options available.";
	if (q.includes("mentor")) return "Our Mentor Network connects you with experienced professionals in finance, technology, design and more. You can view their expertise and book a session.";
	if (q.includes("hello") || q.includes("hi") || q.includes("hey")) return "Hi there! 👋 I'm Disha Assistant. I can help you explore careers, scholarships, resources and programs. What would you like to know?";
	return "I'm here to guide your growth journey! Ask me about careers, scholarships, entrepreneurship, wellness, volunteering or mentorship — or explore our Student Tools from the menu.";
}
function CareerChatbot() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [messages, setMessages] = (0, import_react.useState)([{
		role: "bot",
		text: "Hi! I'm Disha Assistant 🤖 — your guide to careers, scholarships and growth. How can I help today?"
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
		className: "fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-primary text-primary-foreground shadow-card transition-transform hover:scale-105",
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
var Route$19 = createRootRouteWithContext()({
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
				content: "Disha For India empowers youth through skills, education and opportunities — career tools, scholarships, mentorship, programs and volunteering."
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
				content: "Empowering India's youth through skills, education and opportunities. Explore programs, career tools, scholarships and mentorship."
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
	const { queryClient } = Route$19.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative flex min-h-screen flex-col overflow-x-hidden",
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
var $$splitComponentImporter$17 = () => import("./volunteer-BvBcYSkY.mjs");
var Route$18 = createFileRoute("/volunteer")({
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
	component: lazyRouteComponent($$splitComponentImporter$17, "component")
});
var $$splitComponentImporter$16 = () => import("./vision-mission-C0_Dt4OP.mjs");
var Route$17 = createFileRoute("/vision-mission")({
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
	component: lazyRouteComponent($$splitComponentImporter$16, "component")
});
var $$splitComponentImporter$15 = () => import("./success-stories-CfcqEXwG.mjs");
var Route$16 = createFileRoute("/success-stories")({
	head: () => ({
		meta: [
			{ title: "Success Stories — Disha For India" },
			{
				name: "description",
				content: "Real transformation stories from students, volunteers, mentors and communities empowered by Disha For India."
			},
			{
				property: "og:title",
				content: "Success Stories — Disha For India"
			},
			{
				property: "og:description",
				content: "Filter inspiring journeys by student, volunteer, mentor and community."
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
	component: lazyRouteComponent($$splitComponentImporter$15, "component")
});
var BASE_URL = "";
var Route$15 = createFileRoute("/sitemap.xml")({ server: { handlers: { GET: async () => {
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
			path: "/career-navigator",
			changefreq: "monthly",
			priority: "0.8"
		},
		{
			path: "/scholarships",
			changefreq: "weekly",
			priority: "0.8"
		},
		{
			path: "/opportunity-hub",
			changefreq: "weekly",
			priority: "0.8"
		},
		{
			path: "/mentors",
			changefreq: "monthly",
			priority: "0.7"
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
var $$splitComponentImporter$14 = () => import("./scholarships-BPrxPf9-.mjs");
var Route$14 = createFileRoute("/scholarships")({
	head: () => ({
		meta: [
			{ title: "Scholarship Explorer — Disha For India" },
			{
				name: "description",
				content: "Search and filter scholarships by class, stream, state and category. Find financial support for your education with Disha For India."
			},
			{
				property: "og:title",
				content: "Scholarship Explorer — Disha For India"
			},
			{
				property: "og:description",
				content: "Find scholarships you're eligible for, filtered by class, stream, state and category."
			},
			{
				property: "og:url",
				content: "/scholarships"
			}
		],
		links: [{
			rel: "canonical",
			href: "/scholarships"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$14, "component")
});
var $$splitComponentImporter$13 = () => import("./resources-Be2jUSup.mjs");
var Route$13 = createFileRoute("/resources")({
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
	component: lazyRouteComponent($$splitComponentImporter$13, "component")
});
var $$splitComponentImporter$12 = () => import("./programs-CCaYmP1m.mjs");
var Route$12 = createFileRoute("/programs")({ component: lazyRouteComponent($$splitComponentImporter$12, "component") });
var $$splitComponentImporter$11 = () => import("./opportunity-hub-DA3wAwBe.mjs");
var Route$11 = createFileRoute("/opportunity-hub")({
	head: () => ({
		meta: [
			{ title: "Opportunity Hub — Disha For India" },
			{
				name: "description",
				content: "Discover internships, scholarships, workshops, competitions and hackathons for Indian students. Search and filter opportunities in one place."
			},
			{
				property: "og:title",
				content: "Opportunity Hub — Disha For India"
			},
			{
				property: "og:description",
				content: "Find your next internship, scholarship, workshop, competition or hackathon."
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
	component: lazyRouteComponent($$splitComponentImporter$11, "component")
});
var $$splitComponentImporter$10 = () => import("./mentors-DRXxTSOl.mjs");
var Route$10 = createFileRoute("/mentors")({
	head: () => ({
		meta: [
			{ title: "Mentor Network — Disha For India" },
			{
				name: "description",
				content: "Connect with experienced mentors in technology, finance, design, careers and wellness. View expertise and book a mentorship session."
			},
			{
				property: "og:title",
				content: "Mentor Network — Disha For India"
			},
			{
				property: "og:description",
				content: "Book a session with experienced professional mentors."
			},
			{
				property: "og:url",
				content: "/mentors"
			}
		],
		links: [{
			rel: "canonical",
			href: "/mentors"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$10, "component")
});
var $$splitComponentImporter$9 = () => import("./impact-DE65Izhv.mjs");
var Route$9 = createFileRoute("/impact")({
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
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
var $$splitComponentImporter$8 = () => import("./gallery-Bi5y2gR2.mjs");
var Route$8 = createFileRoute("/gallery")({
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
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./events-ztC4l3c4.mjs");
var Route$7 = createFileRoute("/events")({
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
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./contact-B9DS3ZN2.mjs");
var Route$6 = createFileRoute("/contact")({
	head: () => ({
		meta: [
			{ title: "Contact Us — Disha For India" },
			{
				name: "description",
				content: "Get in touch with Disha For India Foundation & Educational Trust. Volunteer, partner, mentor or simply say hello."
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
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./career-navigator-DYf7B1Bi.mjs");
var Route$5 = createFileRoute("/career-navigator")({
	head: () => ({
		meta: [
			{ title: "Career Navigator — Disha For India" },
			{
				name: "description",
				content: "Generate a personalised visual career roadmap. Pick your class, interest and goal to discover recommended paths and next steps."
			},
			{
				property: "og:title",
				content: "Career Navigator — Disha For India"
			},
			{
				property: "og:description",
				content: "Turn confusion into a clear, visual career roadmap."
			},
			{
				property: "og:url",
				content: "/career-navigator"
			}
		],
		links: [{
			rel: "canonical",
			href: "/career-navigator"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./blogs-BO-Mf7Wp.mjs");
var Route$4 = createFileRoute("/blogs")({ component: lazyRouteComponent($$splitComponentImporter$4, "component") });
var $$splitComponentImporter$3 = () => import("./about-C95XDJmb.mjs");
var Route$3 = createFileRoute("/about")({
	head: () => ({
		meta: [
			{ title: "About Disha For India — Our Story & Founder" },
			{
				name: "description",
				content: "Learn about Disha For India Foundation & Educational Trust, founded by Indu Aggarwal to skill India's youth for employability and entrepreneurship."
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
var $$splitComponentImporter$2 = () => import("./routes-dHASnd8T.mjs");
var Route$2 = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "Disha For India — Student Growth & Opportunity Platform" },
		{
			name: "description",
			content: "Empowering India's youth through skills, education and opportunities. Explore programs, a career navigator, scholarships, mentorship and volunteering."
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
var $$splitComponentImporter$1 = () => import("./programs.index-3C8Slg_b.mjs");
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
var $$splitComponentImporter = () => import("./blogs.index-BmzB3HhW.mjs");
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
var VolunteerRoute = Route$18.update({
	id: "/volunteer",
	path: "/volunteer",
	getParentRoute: () => Route$19
});
var VisionMissionRoute = Route$17.update({
	id: "/vision-mission",
	path: "/vision-mission",
	getParentRoute: () => Route$19
});
var SuccessStoriesRoute = Route$16.update({
	id: "/success-stories",
	path: "/success-stories",
	getParentRoute: () => Route$19
});
var SitemapDotxmlRoute = Route$15.update({
	id: "/sitemap.xml",
	path: "/sitemap.xml",
	getParentRoute: () => Route$19
});
var ScholarshipsRoute = Route$14.update({
	id: "/scholarships",
	path: "/scholarships",
	getParentRoute: () => Route$19
});
var ResourcesRoute = Route$13.update({
	id: "/resources",
	path: "/resources",
	getParentRoute: () => Route$19
});
var ProgramsRoute = Route$12.update({
	id: "/programs",
	path: "/programs",
	getParentRoute: () => Route$19
});
var OpportunityHubRoute = Route$11.update({
	id: "/opportunity-hub",
	path: "/opportunity-hub",
	getParentRoute: () => Route$19
});
var MentorsRoute = Route$10.update({
	id: "/mentors",
	path: "/mentors",
	getParentRoute: () => Route$19
});
var ImpactRoute = Route$9.update({
	id: "/impact",
	path: "/impact",
	getParentRoute: () => Route$19
});
var GalleryRoute = Route$8.update({
	id: "/gallery",
	path: "/gallery",
	getParentRoute: () => Route$19
});
var EventsRoute = Route$7.update({
	id: "/events",
	path: "/events",
	getParentRoute: () => Route$19
});
var ContactRoute = Route$6.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$19
});
var CareerNavigatorRoute = Route$5.update({
	id: "/career-navigator",
	path: "/career-navigator",
	getParentRoute: () => Route$19
});
var BlogsRoute = Route$4.update({
	id: "/blogs",
	path: "/blogs",
	getParentRoute: () => Route$19
});
var AboutRoute = Route$3.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$19
});
var IndexRoute = Route$2.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$19
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
var ProgramsSlugRoute = Route$21.update({
	id: "/$slug",
	path: "/$slug",
	getParentRoute: () => ProgramsRoute
});
var BlogsRouteChildren = {
	BlogsSlugRoute: Route$20.update({
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
	CareerNavigatorRoute,
	ContactRoute,
	EventsRoute,
	GalleryRoute,
	ImpactRoute,
	MentorsRoute,
	OpportunityHubRoute,
	ProgramsRoute: ProgramsRoute._addFileChildren(ProgramsRouteChildren),
	ResourcesRoute,
	ScholarshipsRoute,
	SitemapDotxmlRoute,
	SuccessStoriesRoute,
	VisionMissionRoute,
	VolunteerRoute
};
var routeTree = Route$19._addFileChildren(rootRouteChildren)._addFileTypes();
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
