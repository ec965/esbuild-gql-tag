/**
 * @returns {import("esbuild").Plugin}
 */
function plugin() {
  const { default: gql } = require("graphql-tag");
  const fs = require("fs");

  return {
    name: "graphql-tag",
    setup(build) {
      build.onLoad({ filter: /\.(graphql|gql)$/ }, async (args) => {
        let code = await fs.promises.readFile(args.path, { encoding: "utf8" });
        let gqlAst = gql(code);
        let contents = `var g = ${JSON.stringify(gqlAst)};\nexport default g;`;
        console.log(contents);
        return { contents, loader: "js" };
      });
    },
  };
}

module.exports = plugin;
