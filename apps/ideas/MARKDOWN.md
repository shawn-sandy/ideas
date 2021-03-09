# Eleventy Markdown

An Eleventy markdown plugin for writing/parsing MARKDOWN syntax in your HTML content.

## Install:

- Inatall `npm i -D @shawnsandy/ideas`
- Add to you eleventy config
  ```js
  const markdown = require("@shawnsandy/ideas/libs/markdown.js");
  //add plugin
  module.exports = function (eleventyConfig) {
    eleventyConfig.addPlugin(markdown);
  };
  ```

### USage

**Filter**

```html
{{ "### markdown description" | markdown }}
```
*Filter output*

### markdown description

----

**Shortcode**

```html
{% markdown %} ### Header Paragraph text... {% endmarkdown %}
```
*Shortcode output*

### Header Paragraph text...

----

### Support

[Issues](https://github.com/shawn-sandy/ideas/issues)

### License MIT
