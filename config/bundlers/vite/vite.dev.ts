import path from 'path';
const configDev = require("lib-components-react/lib/bundlers/vite/vite.config");
module.exports = (arg: Record<string, any>, env: Record<string, any>) => {

  console.log("Vite config dev");

  const mode = "development";
  const htmlTitle = "Stock Track dev";
  const dirname = path.resolve(__dirname, '../../../');

  let mainVite = configDev.executeCommonConfig(mode, { htmlTitle: htmlTitle, dirname: dirname });
  return mainVite;
};  