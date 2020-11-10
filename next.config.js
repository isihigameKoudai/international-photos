const path = require('path');

const srcDir = './src';
const serverless = process.env.SERVELESS;
const configServerless = serverless ? { target: serverless} : {};

module.exports = {
  dir: srcDir,
  configServerless,
  webpack(config) {
    config.resolve.alias["@"] = path.resolve(__dirname, srcDir);
    config.module.rules.push({
      test: /\.(woff|woff2|eot|ttf|otf|jpeg|jpg|png)$/,
      use: [
        {
          loader: 'url-loader',
          options: {},
        },
      ],
    })
    return config;
  }
}
