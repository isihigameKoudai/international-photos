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
          loader: 'file-loader',
          options: {
            // name: '[name]-[hash:8].[ext]',
            // publicPath: (url) => {
            //   return `/_next/static/css/${url}`;
            // },
            // outputPath: `${isServer ? '../' : ''}static/css/`,
            // esModule: false,
          },
        },{
          loader: 'url-loader',
          options: {
            // name: '[name]-[hash:8].[ext]',
            // publicPath: (url) => {
            //   return `/_next/static/css/${url}`;
            // },
            // outputPath: `${isServer ? '../' : ''}static/css/`,
            // esModule: false,
          },
        },
      ],
    })
    return config;
  }
}
