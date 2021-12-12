const fs = require('fs')

const htmlmin = require('html-minifier')
const pluginRss = require('@11ty/eleventy-plugin-rss')
const markdown = require('./projects/marked/lib/marked')

module.exports = function (eleventyConfig) {
  eleventyConfig.setQuietMode(true)

  eleventyConfig.setBrowserSyncConfig({
    notify: true,
    open: true,
    callbacks: {
      ready: function (err, bs) {
        bs.addMiddleware('*', (req, res) => {
          const content_404 = fs.readFileSync('www/404.html')
          // Provides the 404 content without redirect.
          res.write(content_404)
          // Add 404 http status code in request header.
          // res.writeHead(404, { "Content-Type": "text/html" });
          res.writeHead(404)
          res.end()
        })
      }
    }
  })

  eleventyConfig.addPassthroughCopy('apps/**/builds/*.css')
  eleventyConfig.addPassthroughCopy('apps/**/builds/*.js')
  eleventyConfig.addPassthroughCopy('apps/**/builds/images')

  eleventyConfig.addPassthroughCopy('system/styles/css', 'css')
  eleventyConfig.addPassthroughCopy('system/js/*.js', 'js')
  eleventyConfig.addPassthroughCopy('labs/js/', 'js')
  eleventyConfig.addPassthroughCopy('labs/css/', 'css')
  eleventyConfig.addPassthroughCopy('system/images', 'images')

  eleventyConfig.addWatchTarget('www/**/*.css')

  // Minify our HTML
  eleventyConfig.addTransform('htmlmin', (content, outputPath) => {
    if (outputPath.endsWith('.html')) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true
      })
      return minified
    }
    return content
  })

  /**
   * Plugin @shawnsandy/ideas
   *
   */

  // eleventyConfig.addPlugin(require("@shawnsandy/ideas", {siteMap: ["**/*.njk", "apps/**/*.html"];})); // siteMap defines directory to include

  // eleventyConfig.addPlugin(require("@shawnsandy/ideas"));
  eleventyConfig.addPlugin(require('./apps/ideas/eleventy'))
  eleventyConfig.addPlugin(require('./apps/ideas/lib/markdown'))

  eleventyConfig.addPlugin(pluginRss)
  eleventyConfig.addPlugin(markdown)

  return {
    dir: {
      output: './www',
      input: './src',
      includes: '../system/_includes',
      data: '../system/_data'
    },
    templateFormats: ['njk', 'html'],
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    passthroughFileCopy: true,
    pathPrefix: '/'
  }
}
