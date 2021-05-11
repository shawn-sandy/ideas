// @ts-check
'use strict'
module.exports = {
  copyElement: (content, target = '#mx-clip', classes) => {
    return `<button type="button" class="code-clipper ${classes}" data-clipboard-target="${target}">${content} </button>
    `
  },
  copyString: (content, string = 'You copied a String...', classes = null) => {
    return `
    <button type="button" class="code-clipper ${classes}"
          data-clipboard-text="${string}">${content} </button>
    `
  }
}
