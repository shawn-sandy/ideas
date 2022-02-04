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

_deprecated `md` syntax_

```html
{{ "### markdown description" | md }}
```

_Filter output_

### markdown description

---

**Shortcode**

```html
{% markdown %} ### Header Paragraph text... {% endmarkdown %}
```

_Shortcode output_

### Header Paragraph text...

---

### Support

[Issues](https://github.com/shawn-sandy/ideas/issues)

### License MIT
