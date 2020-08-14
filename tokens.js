// config.js
const config = require('@shawnsandy/mix/config/tokens.js')
// const config = require("./system/styles/_tokens/_tokens.scss");

module.exports = config({
  source: [
    'node_modules/@shawnsandy/mix/tokens/**.json',
    'system/_data/tokens/**/*.json'
  ], // tokens dir--/tokens/my-tokens.json
  build: 'system/styles/_tokens/', // build dir trailing slash required--scss/_tokens.scss
  name: '_tokens' // name of you scss token output file--tokens.scss
})
