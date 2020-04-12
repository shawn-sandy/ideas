//  eleventyConfig.addPlugin(require("@shawnsandy/ideas"));
const elements = require("./lib/elements");
const shared = require("./lib/shared");
const htmlmin = require("html-minifier");

module.exports = (eleventy, options = {}) => {
  let siteMap = options.siteMap || ["**/*.njk", "apps/**/*.html"];

  /**
   * Collections
   */
  eleventy.addCollection("all", (collection) => {
    return shared.getAll(collection);
  });

  eleventy.addCollection("content", (collection) => {
    return collection.getFilteredByGlob([
      "content/**/*.html",
      "content/**/*.md"
    ]);
  });

  eleventy.addCollection("apps", (collection) => {
    return collection.getFilteredByGlob(["apps/**/*.html", "apps/**/*.md"]);
  });

  eleventyConfig.addCollection("pages", (collection) => {
    return collection.getFilteredByGlob(siteMap);
  });
};
