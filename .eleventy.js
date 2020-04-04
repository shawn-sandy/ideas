module.exports = function(eleventyConfig) {
  eleventyConfig.setBrowserSyncConfig({
    notify: true,
    open: true
  });
  eleventyConfig.addPassthroughCopy({
    "**/src/styles/*.css": "styles"
  });

  eleventyConfig.addPassthroughCopy({
    "**/src/js/*.js": "js"
  });

  eleventyConfig.addPassthroughCopy({
    "**/src/images/**.*": "images"
  });

  return {
    dir: {
      output: "./dist",
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
