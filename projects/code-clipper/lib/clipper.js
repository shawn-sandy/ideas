/* eslint-disable no-undef */
// <script src="https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.4/clipboard.min.js"></script>

// ClipboardJS = require('clipboard');

(function () {
  'use strict'
  const clipboard = new ClipboardJS('.mix-clipboard')

  clipboard.on('success', e => {
    var clipText = e.trigger.innerHTML
    e.trigger.innerHTML = '<span>copied</span>'

    e.clearSelection()
    setTimeout(function () {
      e.trigger.innerHTML = clipText
    }, 1000)
  })

  clipboard.on('error', e => {
    console.error('Action:', e.action)
    console.error('Trigger:', e.trigger)
  })
})()
