// @ts-check
'use strict'
const elements = require('./element')
/**
 * Markdown plugin for eleventy
 */

module.exports = (eleventy) => {
  eleventy.addPairedShortcode('clip', (content, description) => {
    return elements.copyElement(content, description)
  })

  eleventy.addPairedShortcode('clipbutton', (content, description) => {
    return elements.copyString(content, description)
  })

  eleventy.addShortcode('clipboardscript', () => {
    // eslint-disable-next-line quotes
    return `<script src="https://cdn.jsdelivr.net/npm/@shawnsandy/code-clipper@0.2.1/lib/clipper.min.js"></script>`
  })
}
