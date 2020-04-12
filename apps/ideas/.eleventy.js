//  eleventyConfig.addPlugin(require("@shawnsandy/ideas"));
const elements = require("./lib/elements");
const shared = require("./lib/shared");
const htmlmin = require("html-minifier");

module.exports = (eleventy, options = {}) => {
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
  os;

  /**
   * Shortcodes
   */
  eleventy.addPairedShortcode("ButtonElement", (content, styles, attrs) => {
    return elements.button(content, styles, attrs);
  });

  eleventy.addPairedShortcode(
    "LinkElement",
    (content, link = "", classes, attrs) => {
      return elements.link(content, link, classes, attrs);
    }
  );

  eleventy.addPairedShortcode(
    "LinkButton",
    (content, link = "#", classes, attrs) => {
      let _classes = classes ? classes + " btn" : "button";
      return elements.link(content, link, _classes, attrs);
    }
  );

  /**
   * Copy Element
   */
  eleventy.addPairedShortcode("CopyString", (content, string, classes) => {
    return elements.copyString(content, string, classes);
  });

  /**
   * Copy Swatch
   */
  eleventy.addPairedShortcode("CopyElement", (content, target, classes) => {
    return elements.copyElement(content, target, classes);
  });

  /**
   * Plugins
   */

  // // adds Mo
  // eleventy.addPlugin(require("./libs/modular"));
  // // adds atomic modules as collections
  // eleventy.addPlugin(require("./libs/atomic"));
};
