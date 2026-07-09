import { t as BLOGS } from "./site-data-BqP6S8R0.mjs";
import { A as notFound, f as lazyRouteComponent, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/blogs._slug-DAQ7xgBK.js
var $$splitComponentImporter = () => import("./blogs._slug-BFS-aPTf.mjs");
var $$splitErrorComponentImporter = () => import("./blogs._slug-CThGYuyN.mjs");
var $$splitNotFoundComponentImporter = () => import("./blogs._slug-C_-fZTgx.mjs");
var Route = createFileRoute("/blogs/$slug")({
	loader: ({ params }) => {
		const blog = BLOGS.find((b) => b.slug === params.slug);
		if (!blog) throw notFound();
		const related = BLOGS.filter((b) => b.slug !== blog.slug && b.category === blog.category).slice(0, 3);
		return {
			blog,
			related: related.length ? related : BLOGS.filter((b) => b.slug !== blog.slug).slice(0, 3)
		};
	},
	head: ({ loaderData }) => {
		const b = loaderData?.blog;
		return {
			meta: [
				{ title: `${b?.title ?? "Article"} — Disha For India` },
				{
					name: "description",
					content: b?.excerpt ?? ""
				},
				{
					property: "og:title",
					content: b?.title ?? ""
				},
				{
					property: "og:description",
					content: b?.excerpt ?? ""
				},
				{
					property: "og:type",
					content: "article"
				},
				{
					property: "og:image",
					content: b?.cover ?? ""
				},
				{
					property: "og:url",
					content: `/blogs/${b?.slug}`
				},
				{
					name: "twitter:image",
					content: b?.cover ?? ""
				}
			],
			links: [{
				rel: "canonical",
				href: `/blogs/${b?.slug}`
			}],
			scripts: b ? [{
				type: "application/ld+json",
				children: JSON.stringify({
					"@context": "https://schema.org",
					"@type": "Article",
					headline: b.title,
					image: b.cover,
					datePublished: b.date,
					author: {
						"@type": "Person",
						name: b.author
					}
				})
			}] : []
		};
	},
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent"),
	errorComponent: lazyRouteComponent($$splitErrorComponentImporter, "errorComponent"),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
