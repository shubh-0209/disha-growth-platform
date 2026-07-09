import { o as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { r as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { t as Button } from "./button-Bq5vK6RO.mjs";
import { _ as TESTIMONIALS, f as PROGRAMS, g as STORIES, h as STATS, r as EVENTS, t as BLOGS } from "./site-data-BqP6S8R0.mjs";
import { n as motion } from "../_libs/framer-motion.mjs";
import { t as Reveal } from "./Reveal-D41dhdcQ.mjs";
import { t as SectionHeading } from "./SectionHeading-D1GLZG-y.mjs";
import { t as AnimatedCounter } from "./AnimatedCounter-IfLpjwCb.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { D as GraduationCap, G as ArrowRight, M as Compass, l as Star, u as Sparkles, w as Heart } from "../_libs/lucide-react.mjs";
import { i as StoryCard, n as EventCard, r as ProgramCard, t as BlogCard } from "./cards-DE852qYQ.mjs";
import { t as CareerNavigator } from "./CareerNavigator-DFcAFypm.mjs";
import { t as ScholarshipExplorer } from "./ScholarshipExplorer-R7Zt71SK.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-dHASnd8T.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var heroImages = [
	{
		src: "/assets/hero-1-BGcE5z-9.jpg",
		alt: "Indian children smiling in a rural classroom"
	},
	{
		src: "/assets/hero-2-e_Muuiwm.jpg",
		alt: "Students learning and writing in notebooks"
	},
	{
		src: "/assets/hero-3-DL3-yBYH.jpg",
		alt: "Group of diverse students working on laptops"
	},
	{
		src: "/assets/hero-4-_IEEhYpq.jpg",
		alt: "Young students actively participating in education"
	},
	{
		src: "/assets/hero-5-CbE3OZM6.jpg",
		alt: "Skill development and focused classroom learning"
	}
];
function HeroCarousel() {
	const [currentSlide, setCurrentSlide] = (0, import_react.useState)(0);
	const [isHovered, setIsHovered] = (0, import_react.useState)(false);
	const [touchStart, setTouchStart] = (0, import_react.useState)(null);
	const [isReducedMotion, setIsReducedMotion] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
		setIsReducedMotion(mediaQuery.matches);
		const motionHandler = (e) => setIsReducedMotion(e.matches);
		if (mediaQuery.addEventListener) mediaQuery.addEventListener("change", motionHandler);
		else mediaQuery.addListener(motionHandler);
		return () => {
			if (mediaQuery.removeEventListener) mediaQuery.removeEventListener("change", motionHandler);
			else mediaQuery.removeListener(motionHandler);
		};
	}, []);
	(0, import_react.useEffect)(() => {
		if (isHovered || isReducedMotion) return;
		const timer = setInterval(() => {
			setCurrentSlide((prev) => (prev + 1) % heroImages.length);
		}, 5e3);
		return () => clearInterval(timer);
	}, [isHovered, isReducedMotion]);
	const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroImages.length);
	const prevSlide = () => setCurrentSlide((prev) => prev === 0 ? heroImages.length - 1 : prev - 1);
	const handleTouchStart = (e) => setTouchStart(e.targetTouches[0].clientX);
	const handleTouchEnd = (e) => {
		if (touchStart === null) return;
		const diff = touchStart - e.changedTouches[0].clientX;
		if (diff > 50) nextSlide();
		else if (diff < -50) prevSlide();
		setTouchStart(null);
	};
	const handleKeyDown = (e) => {
		if (e.key === "ArrowRight") nextSlide();
		if (e.key === "ArrowLeft") prevSlide();
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "group relative h-full min-h-[400px] w-full overflow-hidden rounded-[2rem] border border-border shadow-card bg-muted/20",
		onMouseEnter: () => setIsHovered(true),
		onMouseLeave: () => setIsHovered(false),
		onTouchStart: handleTouchStart,
		onTouchEnd: handleTouchEnd,
		onKeyDown: handleKeyDown,
		tabIndex: 0,
		role: "region",
		"aria-label": "Image Carousel",
		"aria-roledescription": "carousel",
		children: [
			heroImages.map((img, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: img.src,
				alt: img.alt,
				width: 1600,
				height: 1200,
				loading: index === 0 ? "eager" : "lazy",
				className: `absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-in-out ${index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"}`,
				"aria-hidden": index !== currentSlide
			}, index)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				onClick: prevSlide,
				className: "absolute left-4 top-1/2 z-20 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-background/80 text-foreground opacity-0 backdrop-blur transition-all hover:bg-background hover:text-primary focus-visible:opacity-100 group-hover:opacity-100 lg:flex",
				"aria-label": "Previous image",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "sr-only",
					children: "Previous"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
					viewBox: "0 0 24 24",
					fill: "none",
					stroke: "currentColor",
					strokeWidth: "2.5",
					strokeLinecap: "round",
					strokeLinejoin: "round",
					className: "h-5 w-5",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M15 18l-6-6 6-6" })
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				onClick: nextSlide,
				className: "absolute right-4 top-1/2 z-20 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-background/80 text-foreground opacity-0 backdrop-blur transition-all hover:bg-background hover:text-primary focus-visible:opacity-100 group-hover:opacity-100 lg:flex",
				"aria-label": "Next image",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "sr-only",
					children: "Next"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
					viewBox: "0 0 24 24",
					fill: "none",
					stroke: "currentColor",
					strokeWidth: "2.5",
					strokeLinecap: "round",
					strokeLinejoin: "round",
					className: "h-5 w-5",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M9 18l6-6-6-6" })
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 gap-2 rounded-full bg-black/20 px-3 py-2 backdrop-blur-sm",
				children: heroImages.map((_, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setCurrentSlide(index),
					className: `h-2 w-2 rounded-full transition-all ${index === currentSlide ? "w-6 bg-white" : "bg-white/50 hover:bg-white/80"}`,
					"aria-label": `Go to slide ${index + 1}`,
					"aria-current": index === currentSlide
				}, index))
			})
		]
	});
}
function Home() {
	const upcoming = EVENTS.filter((e) => e.status === "upcoming").slice(0, 3);
	const featuredBlogs = BLOGS.filter((b) => b.featured).slice(0, 3);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative overflow-hidden bg-gradient-hero",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-grid" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 lg:grid-cols-2 lg:py-24",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "inline-flex items-center gap-2 rounded-full border border-border bg-background px-3.5 py-1.5 text-xs font-semibold text-primary",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3.5 w-3.5" }), " India's Student Growth & Opportunity Platform"]
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .05,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "mt-5 text-4xl font-extrabold leading-[1.05] text-foreground sm:text-5xl lg:text-6xl",
							children: [
								"Empowering India's Youth Through",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-primary",
									children: "Skills"
								}),
								",",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-green",
									children: "Education"
								}),
								" and Opportunities"
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .1,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground",
							children: "From career roadmaps and scholarships to mentorship and real impact — Disha For India gives every student the tools, guidance and community to build a brighter future."
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .15,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-wrap gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								size: "lg",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/programs",
									children: ["Explore Programs ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "ml-1 h-4 w-4" })]
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								size: "lg",
								variant: "outline",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/volunteer",
									children: "Become a Volunteer"
								})
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .2,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex items-center gap-6 text-sm text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex items-center gap-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GraduationCap, { className: "h-4 w-4 text-primary" }), " 25,000+ students"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex items-center gap-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "h-4 w-4 text-green" }), " 1,200+ volunteers"]
							})]
						})
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .1,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroCarousel, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								opacity: 0,
								y: 20
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: { delay: .5 },
							className: "absolute bottom-4 left-4 z-30 rounded-2xl border border-border bg-card p-4 shadow-card sm:-bottom-4 sm:-left-4 lg:-bottom-5 lg:-left-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-2xl font-bold text-primary",
								children: "5 Lakh+"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground",
								children: "Youth to be skilled"
							})]
						})]
					})
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-y border-border bg-gradient-section py-16 text-foreground",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					className: "mb-10 text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-2xl font-bold text-ink sm:text-3xl",
						children: "Our impact, in numbers"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-muted-foreground",
						children: "Fingerprints on the lives we touch never fade."
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-2 gap-6 md:grid-cols-5",
					children: STATS.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						delay: i * .08,
						className: "text-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-3xl font-extrabold text-primary sm:text-4xl",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedCounter, {
								value: s.value,
								suffix: s.suffix
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1.5 text-sm text-muted-foreground",
							children: s.label
						})]
					}, s.label))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
						eyebrow: "Career Navigator",
						title: "Turn confusion into a clear roadmap",
						description: "Select your class, interest and goal to generate a personalised, visual career path — built to guide India's students step by step."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CareerNavigator, { compact: true })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "outline",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/career-navigator",
								children: ["Open full Career Navigator ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "ml-1 h-4 w-4" })]
							})
						})
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-y border-border bg-gradient-section py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
						eyebrow: "Scholarship Explorer",
						title: "Find scholarships you're eligible for",
						description: "Search and filter scholarships by class, stream, state and category — so no deserving student misses an opportunity."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScholarshipExplorer, { limit: 4 })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "outline",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/scholarships",
								children: ["Explore all scholarships ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "ml-1 h-4 w-4" })]
							})
						})
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Our Programs",
					title: "Skilling youth across every dimension",
					description: "From financial literacy to entrepreneurship, wellness and the environment — our programs build employable, confident, conscious citizens."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4",
					children: PROGRAMS.slice(0, 4).map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * .06,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProgramCard, { program: p })
					}, p.slug))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-y border-border bg-gradient-section py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
						eyebrow: "Success Stories",
						title: "Real journeys, real transformation",
						description: "Students, volunteers and communities whose lives changed direction with Disha For India."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10 grid gap-6 md:grid-cols-3",
						children: STORIES.slice(0, 3).map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: i * .06,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StoryCard, { story: s })
						}, s.id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "outline",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/success-stories",
								children: ["Read more stories ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "ml-1 h-4 w-4" })]
							})
						})
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
						eyebrow: "Upcoming Events",
						title: "Join our next gathering",
						description: "Career fairs, bootcamps and community drives — opportunities to learn, connect and contribute."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10 grid gap-6 md:grid-cols-3",
						children: upcoming.map((e, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: i * .06,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EventCard, { event: e })
						}, e.id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "outline",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/events",
								children: ["View all events ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "ml-1 h-4 w-4" })]
							})
						})
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-y border-border bg-gradient-section py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
						eyebrow: "From the Blog",
						title: "Insights to grow by",
						description: "Practical guides on money, careers, entrepreneurship, wellness and the environment."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10 grid gap-6 md:grid-cols-3",
						children: featuredBlogs.map((b, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: i * .06,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BlogCard, { blog: b })
						}, b.slug))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "outline",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/blogs",
								children: ["Read the blog ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "ml-1 h-4 w-4" })]
							})
						})
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Testimonials",
					title: "What people say about Disha For India",
					align: "center"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid gap-6 md:grid-cols-3",
					children: TESTIMONIALS.map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * .06,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
							className: "flex h-full flex-col rounded-3xl border border-border bg-card p-6 shadow-soft",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex gap-0.5 text-primary",
									children: Array.from({ length: 5 }).map((_, k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-4 w-4 fill-current" }, k))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
									className: "mt-4 flex-1 text-sm leading-relaxed text-foreground/80",
									children: [
										"\"",
										t.quote,
										"\""
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
									className: "mt-5 flex items-center gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: t.photo,
										alt: t.name,
										loading: "lazy",
										className: "h-11 w-11 rounded-full object-cover"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm font-semibold text-foreground",
										children: t.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-muted-foreground",
										children: t.role
									})] })]
								})
							]
						})
					}, t.name))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "pb-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto max-w-7xl px-5",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative overflow-hidden rounded-[2.5rem] bg-gradient-hero px-6 py-16 text-center text-foreground sm:px-12",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative mx-auto max-w-2xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Compass, { className: "mx-auto h-10 w-10 text-primary" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-5 text-3xl font-bold text-ink sm:text-4xl",
								children: "Invest your time. Uplift a life."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-muted-foreground",
								children: "Join 1,200+ volunteers making a powerful contribution to India's youth. Teach, mentor, design or build — there's a role for you."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8 flex flex-wrap justify-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									size: "lg",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/volunteer",
										children: "Become a Volunteer"
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									size: "lg",
									variant: "outline",
									className: "border-primary/20 bg-card hover:bg-primary-soft",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/mentors",
										children: "Become a Mentor"
									})
								})]
							})
						]
					})
				}) })
			})
		})
	] });
}
//#endregion
export { Home as component };
