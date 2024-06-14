const configAppDev = require("lib-components-react/lib/webpack/webpack.config.dev");

module.exports = (arg: any, env: any) => {

  const mode = "development";
  const htmlTitle = "Stock Track Dev build demo";
  const dotEnvFile = ".env.demo.development";
  const dirname = __dirname;

  let mainWebpack = configAppDev.executeConfigDev(mode, { htmlTitle: htmlTitle, dirname: dirname, dotEnvFile: dotEnvFile });

  console.log("Webpack config dev", JSON.stringify(mainWebpack, null, 2));
  return mainWebpack;
}