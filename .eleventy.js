module.exports = function(eleventyConfig) {
  eleventyConfig.setBrowserSyncConfig({
    notify: true,
    open: true
  });
  eleventyConfig.addPassthroughCopy("**/dist/styles/css");
  eleventyConfig.addPassthroughCopy("**/dist/js");
  eleventyConfig.addPassthroughCopy("**/dist/images");

  eleventyConfig.addPassthroughCopy("system/styles/css", "css");
  eleventyConfig.addPassthroughCopy("system/js/*.js", "js");
  eleventyConfig.addPassthroughCopy("system/images", "images");

  return {
    dir: {
      output: "./www",
      input: ".",
      includes: "/system/_includes",
      data: "/system/_data"
    },
    templateFormats: ["njk", "html"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    passthroughFileCopy: true,
    pathPrefix: "/"
  };
};
