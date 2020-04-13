// config.js
const config = require("@shawnsandy/mix/config/tokens.js");

module.exports = config({
  source: ["system/_data/tokens/**/*.json"], // tokens dir--/tokens/my-tokens.json
  build: "styles/_tokens/", // build dir trailing slash required--scss/_tokens.scss
  name: "tokens", // name of you scss token output file--tokens.scss
});
