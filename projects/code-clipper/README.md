# Code-clipper

A [clipboard.js](https://clipboardjs.com/) shortcode plugin for vs 11ty static site generator

> Copying text to the clipboard shouldn't be hard. It shouldn't require dozens of steps to configure or hundreds of KBs to load. But most of all, it shouldn't depend on Flash or any bloated framework.

- [Code-clipper](#code-clipper)
  - [Install](#install)
  - [Usage](#usage)
  - [License MIT](#license-mit)

## Install

- npm `npm i -D @shawnsandy/code-clipper`

## Usage

- Add the plugin to your `eleventy.js` config file

```javascript
// eleventy.js
module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(require('@shawnsandy/code-clipper'))
}
```

- Add the clipboard.js script link to your page above the `</body>` using the following shortcode; this will link to the CDN

```html
<body>
  .... {% clipboardscript %}
</body>
```

- Optionally (don't like shortcodes) you can add the following above the `</body>` instead.

```html
<body>
  ...
  <script src="https://cdn.jsdelivr.net/npm/@shawnsandy/code-clipper@0.2.1/lib/clipper.min.js"></script>
  <.body>
</body>
```

- Copy the code in and html element using the following shortcode. Warning this plugin does not yet work in `*.md` files.

```html
<!-- copy section -->
<textarea id="mx-clip" role="presentation">
  <img src=" img/fp.svg" alt="" />
  <h2>Lightweight, Fast, Accessible, Inclusive</h2>
  <p>
      <span>First Paint is lightweight easy to use CSS/SCSS starter library for
          quickly scaffolding/building modern, mobile friendly websites.</span>
  </p>
  <a href="#" role="button" aria-label="Add word, cta action, to your button title">
  <span>Get Started</span></a>
</textarea>

<!-- Params target id, button classes  -->
{% clip "#mx-clip", '.btn btn-primaty' %} Copy Code {% endclip %}
```

- Copy a string using the following shortcode

```html
<!-- params string to copy, button classes -->
{% clipbutton "Copy Code", ".btn btn-primary" %} Copy to clipboard {%
endclipbutton %}
```

## License MIT

Copyright (c) 2021 Shawn Sandy creative@shawnsandy.design

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
