/**
 * Markdown plugin for eleventy
 */
const Marked = require('marked')
module.exports = (eleventy, options = {}) => {
  // https://www.11ty.dev/docs/filters/
  eleventy.addFilter('md', function (value = null) {
    if (value === null) return
    return Marked(value)
  })

  // https://www.11ty.dev/docs/shortcodes/
  eleventy.addPairedShortcode('markdown', (content) => {
    if (content === null) return
    return Marked(content)
  })
}
