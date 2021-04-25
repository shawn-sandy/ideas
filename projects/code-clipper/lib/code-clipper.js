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

  eleventy.addShortcode('clipboardscript', (content, description) => {
    // eslint-disable-next-line quotes
    return `<script src="https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.4/clipboard.min.js"></script>`
  })
}
