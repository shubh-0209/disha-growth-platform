//#region node_modules/.nitro/vite/services/ssr/assets/__23tanstack-start-server-fn-resolver-ZUUQuy3f.js
var manifest = {
	"9bdbda3951f350ee6ec6d53453583d29e50d73bb7947aa58d8f9e7582e156913": {
		functionName: "getLeaderboardStats_createServerFn_handler",
		importer: () => import("./_ssr/leaderboard.functions-B_adJor7.mjs")
	},
	"c6db4288b7c420af1db82252418037707cdae8f9d4a287e3a06b45810906db95": {
		functionName: "getLeaderboardData_createServerFn_handler",
		importer: () => import("./_ssr/leaderboard.functions-B_adJor7.mjs")
	}
};
async function getServerFnById(id, access) {
	const serverFnInfo = manifest[id];
	if (!serverFnInfo) throw new Error("Server function info not found for " + id);
	const fnModule = serverFnInfo.module ?? await serverFnInfo.importer();
	if (!fnModule) throw new Error("Server function module not resolved for " + id);
	const action = fnModule[serverFnInfo.functionName];
	if (!action) throw new Error("Server function module export not resolved for serverFn ID: " + id);
	return action;
}
//#endregion
export { getServerFnById as t };
