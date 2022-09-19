require("esbuild")
  .build({
    entryPoints: ["index.js"],
    bundle: true,
    outfile: "out.js",
    plugins: [require("../src/index")()],
  })
  .catch(() => process.exit(1));
