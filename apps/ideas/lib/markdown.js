/**
 * Markdown plugin for eleventy
 */
const Marked = require('marked')

module.exports = (eleventy) => {
  // https://www.11ty.dev/docs/filters/

  /** md is deprecated and would be removed in future versions */
  eleventy.addFilter('md', (value = null) => {
    if (value !== null) { return Marked(value) }
    return null
  })

  eleventy.addFilter('markdown', (value = null) => {
    if (value !== null) { return Marked(value) }
    return null
  })

  // https://www.11ty.dev/docs/shortcodes/
  eleventy.addPairedShortcode('markdown', (content) => {
    if (content === null) return
    return Marked(content)
  })
}
