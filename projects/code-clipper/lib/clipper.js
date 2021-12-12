/* eslint-disable no-undef */
// <script src="https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.4/clipboard.min.js"></script>

ClipboardJS = require('clipboard')
;(function () {
  'use strict'
  const clipboard = new ClipboardJS('.code-clipper')

  clipboard.on('success', (e) => {
    const clipText = e.trigger.textContent
    e.trigger.textContent = 'Copied'

    e.clearSelection()
    setTimeout(function () {
      e.trigger.textContent = clipText
    }, 1000)
  })

  clipboard.on('error', (e) => {
    // TODO replace console logs statements
    console.error('Action:', e.action)
    console.error('Trigger:', e.trigger)
  })
})()
