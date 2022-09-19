/**
 * @returns {import("esbuild").Plugin}
 */
function plugin() {
  const { default: gql } = require("graphql-tag");
  const fs = require("fs");

  return {
    name: "gql-tag",
    setup(build) {
      build.onLoad({ filter: /\.(graphql|gql)$/ }, async (args) => {
        let code = await fs.promises.readFile(args.path, { encoding: "utf8" });
        let gqlAst = gql(code);
        let contents = `var g = ${JSON.stringify(gqlAst)};\nexport default g;`;
        return { contents, loader: "js" };
      });
    },
  };
}

module.exports = plugin;
