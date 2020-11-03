const path = require('path');

const srcDir = './src';
const serverless = process.env.SERVELESS;
const configServerless = serverless ? { target: serverless} : {};

module.exports = {
  dir: srcDir,
  configServerless,
  webpack(config) {
    config.resolve.alias["@"] = path.resolve(__dirname, srcDir);
    return config;
  }
}
