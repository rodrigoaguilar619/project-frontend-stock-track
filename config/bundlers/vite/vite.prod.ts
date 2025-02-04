import path from 'path';
const configProd = require("lib-components-react/lib/bundlers/vite/vite.config");
module.exports = (arg: Record<string, any>, env: Record<string, any>) => {

  console.log("Vite config production");

  const mode = "production";
  const htmlTitle = "Stock Track";
  const dirname = path.resolve(__dirname, '../../../');

  let mainVite = configProd.executeCommonConfig(mode, { htmlTitle: htmlTitle, dirname: dirname });
  return mainVite;
};  