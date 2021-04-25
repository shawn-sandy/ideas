# `@shawnsandy/code-clipper`

> A code clipper plugin for vs 11ty

## Usage

* Add the plugin to your `eleventy.js` config file

``` javascript
// eleventy.js
module.exports = function(eleventyConfig) {
    eleventyConfig.addPlugin(require('@shawnsandy/code-clipper'))
}
```

* Add the clipboard.js script to your page above the `</body>` using the following shortcode

``` html
{% clipboardscript %}
```

* Copy the code in and html element using the following shortcode

``` html
{% clip "Copy Code", "#mx-clip", '.btn btn-primaty' %}

{% endclip %}
```

* Copy a string using the following shortcode

``` html
{% clipbutton "Copy Code", "#mx-clip", '.btn btn-primaty' %}
String to copy
{% endclipbutton %}
```
