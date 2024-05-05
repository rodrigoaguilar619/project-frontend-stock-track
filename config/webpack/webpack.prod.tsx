const configAppProd = require("lib-components-frontend-ts/lib/webpack/webpack.config.prod");

module.exports = (arg: any, env: any) => {

  const mode = "production";
  const htmlTitle = "Stock Track";
  const dirname = __dirname;

  let mainWebpack = configAppProd.executeConfigProd(mode, { htmlTitle: htmlTitle, dirname: dirname });

  console.log("Webpack config prod", JSON.stringify(mainWebpack, null, 2));
  return mainWebpack;
}