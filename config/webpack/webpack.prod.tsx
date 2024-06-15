const configAppProd = require("lib-components-react/lib/webpack/webpack.config.build");

module.exports = (arg: any, env: any) => {

  const mode = "production";
  const htmlTitle = "Stock Track";
  const dirname = __dirname;

  let mainWebpack = configAppProd.executeConfigBuild(mode, { htmlTitle: htmlTitle, dirname: dirname });

  console.log("Webpack config prod", JSON.stringify(mainWebpack, null, 2));
  return mainWebpack;
}