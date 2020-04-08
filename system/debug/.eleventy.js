const fs = require("fs");

const htmlmin = require("html-minifier");

module.exports = function (eleventyConfig) {
  eleventyConfig.setBrowserSyncConfig({
    notify: true,
    open: true,
  });

  eleventyConfig.addPlugin(require("@shawnsandy/ideas"));

  // Minify our HTML
  eleventyConfig.addTransform("htmlmin", (content, outputPath) => {
    if (outputPath.endsWith(".html")) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
      });
      return minified;
    }
    return content;
  });

  return {
    dir: {
      output: "../../www/debug",
      input: ".",
      includes: "../_includes",
      data: "../_data",
    },
    templateFormats: ["njk", "html"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    passthroughFileCopy: true,
    pathPrefix: "/",
  };
};
