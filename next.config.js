const path = require('path');

const serverless = process.env.SERVELESS;
const configServeless = serverless ? { target: serverless} : {};

module.exports = {
  dir: './src'
}
