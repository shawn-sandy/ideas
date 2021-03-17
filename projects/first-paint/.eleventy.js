const markdown = require("@shawnsandy/marked")


module.exports = function (eleventyConfig) {

  eleventyConfig.setBrowserSyncConfig({
    notify: true,
    open: true
  })

  eleventyConfig.addPassthroughCopy("./src/*.css", './dist')
  eleventyConfig.addPassthroughCopy("./src/styles/*.css", './dist')
  eleventyConfig.addPassthroughCopy("./src/img", './dist')

  eleventyConfig.addPlugin(markdown)

  eleventyConfig.setQuietMode(true)

  return {
    dir: {
      input: "./src",
      includes: "/_includes",
      data: "/_data",
      output: "./dist"
    },
    templateFormats: ["njk", "html"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    passthroughFileCopy: true,
    // pathPrefix: "/"
  }
}
