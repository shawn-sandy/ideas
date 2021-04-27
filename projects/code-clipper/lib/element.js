// @ts-check
'use strict'
module.exports = {
  copyElement: (content, target = '#mx-clip', classes) => {
    return `<button type="button" class="mix-clipboard ${classes}" data-clipboard-target="${target}">${content} </button>
    `
  },
  copyString: (content, string = 'You copied a String...', classes) => {
    return `
    <button type="button" class="mix-clipboard ${classes}"
          data-clipboard-text="${string}">${content} </button>
    `
  }
}
