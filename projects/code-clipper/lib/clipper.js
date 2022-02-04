/* eslint-disable no-undef */
// <script src="https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.4/clipboard.min.js"></script>

/**
 * ClipboardJS is a JavaScript library that makes it easy to copy and paste content.
 *
 * It works by creating a new ClipboardJS object and then binding it to a HTML element.
 *
 * The HTML element is the trigger element.
 *
 * When the trigger element is clicked, the ClipboardJS object will copy the content of the trigger
element to the clipboard.
 *
 * The content of the trigger element is determined by the textContent property of the element.
 *
 * The textContent property returns the text content of the element.
 *
 * The
 */
ClipboardJS = require('clipboard')
;(function () {
  'use strict'
  const clipboard = new ClipboardJS('.code-clipper')

  /**
  * When the user clicks on the button, the text on the button changes to "Copied", and the text is
 cleared after 1 second.
  * @param e - The ClipboardEvent object
  * @returns None
  */
  clipboard.on('success', (e) => {
    const clipText = e.trigger.textContent
    e.trigger.textContent = 'Copied'

    e.clearSelection()
    setTimeout(function () {
      e.trigger.textContent = clipText
    }, 1000)
  })

  /**
   * It's a function that takes a string and returns a string.
   * @param e - {
   * @returns None
   */
  clipboard.on('error', (e) => {
    // TODO replace console logs statements
    console.error('Action:', e.action)
    console.error('Trigger:', e.trigger)
  })
})()
