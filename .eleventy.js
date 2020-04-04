const fs = require("fs")


module.exports = function (eleventyConfig) {
  eleventyConfig.setBrowserSyncConfig({
    notify: true,
    open: true,
    callbacks: {
      ready: function(err, bs) {
        bs.addMiddleware("*", (req, res) => {
          const content_404 = fs.readFileSync("www/404.html");
          // Provides the 404 content without redirect.
          res.write(content_404);
          // Add 404 http status code in request header.
          // res.writeHead(404, { "Content-Type": "text/html" });
          res.writeHead(404);
          res.end();
        });
      }
    }
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
