require("esbuild")
  .build({
    platform: "node",
    logLevel: "info",
    entryPoints: ["index.js"],
    bundle: true,
    outfile: "out.js",
    plugins: [require("../src/index")()],
  })
  .catch(() => process.exit(1));
