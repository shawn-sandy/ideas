const markdown = require("@shawnsandy/marked");

const CleanCSS = require("clean-css");

module.exports = function (eleventyConfig) {
  // css-min filter
  eleventyConfig.addFilter("cssmin", (code) => {
    return new CleanCSS({}).minify(code).styles;
  });

  eleventyConfig.setBrowserSyncConfig({
    notify: true,
    open: true,
  });

  eleventyConfig.addPassthroughCopy("./src/*.css", "./dist");
  eleventyConfig.addPassthroughCopy("./src/v2/*.css", "./dist");
  eleventyConfig.addPassthroughCopy("./src/css", "./dist");
  eleventyConfig.addPassthroughCopy("./src/img", "./dist");

  eleventyConfig.addPlugin(markdown);

  eleventyConfig.setQuietMode(true);

  eleventyConfig.addPlugin(require("@shawnsandy/code-clipper"));

  return {
    dir: {
      input: "./src",
      includes: "/_includes",
      data: "/_data",
      output: "./dist",
    },
    templateFormats: ["njk", "html"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    passthroughFileCopy: true,
    // pathPrefix: "/"
  };
};
