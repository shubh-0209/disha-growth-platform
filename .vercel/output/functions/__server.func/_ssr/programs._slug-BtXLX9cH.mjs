import { l as PROGRAMS } from "./site-data-D1js5LWO.mjs";
import { f as lazyRouteComponent, j as notFound, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/programs._slug-BtXLX9cH.js
var $$splitComponentImporter = () => import("./programs._slug-BPfa1Xth.mjs");
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
