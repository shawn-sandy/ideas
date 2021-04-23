// @ts-check
'use strict'

/**
 * Markdown plugin for eleventy
 */
const Marked = require('marked')

module.exports = (eleventy) => {
  eleventy.addFilter('markdown', (value = null) => {
    if (value !== null) { return Marked(value) }
    return null
  })

  eleventy.addPairedShortcode('markdown', (content) => {
    if (content === null) return
    return Marked(content)
  })
}
