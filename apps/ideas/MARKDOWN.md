# Eleventy Markdown

An Eleventy markdown plugin for writing MD/parsing syntax in your HTML content.

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
{{ description | md }}
```

**Shortcode**

```html
{% markdown %} ### Header Paragraph text... {% endmarkdown %}
```

### Support

[Issues](https://github.com/shawn-sandy/ideas/issues)

### License MIT
