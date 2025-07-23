/**
 * @type {import('@remix-run/dev').AppConfig}
 */
module.exports = {
  serverBuildTarget: "cloudflare-pages",
  future: { v3_routeConvention: true }, // if using Remix v2+
  assetsBuildDirectory: "public/build",
  publicPath: "/build/",
};