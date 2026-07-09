import { f as PROGRAMS } from "./site-data-BqP6S8R0.mjs";
import { A as notFound, f as lazyRouteComponent, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/programs._slug-DM0suVNu.js
var $$splitComponentImporter = () => import("./programs._slug-CIHODKWv.mjs");
var $$splitErrorComponentImporter = () => import("./programs._slug-CPhnmQWf.mjs");
var $$splitNotFoundComponentImporter = () => import("./programs._slug-DZszJQIV.mjs");
var Route = createFileRoute("/programs/$slug")({
	loader: ({ params }) => {
		const program = PROGRAMS.find((p) => p.slug === params.slug);
		if (!program) throw notFound();
		return { program };
	},
	head: ({ loaderData }) => {
		const p = loaderData?.program;
		return {
			meta: [
				{ title: `${p?.title ?? "Program"} — Disha For India` },
				{
					name: "description",
					content: p?.description ?? ""
				},
				{
					property: "og:title",
					content: `${p?.title} — Disha For India`
				},
				{
					property: "og:description",
					content: p?.description ?? ""
				},
				{
					property: "og:type",
					content: "article"
				},
				{
					property: "og:url",
					content: `/programs/${p?.slug}`
				}
			],
			links: [{
				rel: "canonical",
				href: `/programs/${p?.slug}`
			}]
		};
	},
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent"),
	errorComponent: lazyRouteComponent($$splitErrorComponentImporter, "errorComponent"),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
