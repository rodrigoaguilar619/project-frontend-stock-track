const configAppDevServer = require("lib-components-react/lib/bundlers/webpack/webpack.config.server");

module.exports = (arg: any, env: any) => {

  const mode = "development";
  const htmlTitle = "Stock Track Dev Server";
  const dirname = __dirname;

  let mainWebpack = configAppDevServer.executeConfigServer(mode, { htmlTitle: htmlTitle, dirname: dirname });

  console.log("Webpack config dev server", JSON.stringify(mainWebpack, null, 2));
  return mainWebpack;
}