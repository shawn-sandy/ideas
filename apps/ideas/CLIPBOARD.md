# Clipboard

**Clipboard buttons** copy to clipboard

- Copy an Element - generates a button that copied an element
- Install [Clipboard.js](https://clipboardjs.com)

```html
{% clip %} copy element {% endclip %}
```

- Copy a string - generates a button that copied a string

```html
{% cliptext "String to copy here", "classnames... button button-md m-2" %} copy
string {% endcliptext%}
```

**Manual Usage**

- Copy an element/content on a page using the id/class name `#mx-clip` or `.mx-clip`

```html
<button class="mix-clipboard" data-clipboard-target="#mx-clip">
  copy element <i class="fal fa-cut" aria-hidden="true"></i>
</button>
```

- Copy a string--place the string in the data-clipboard-ext-attribute `data-clipboard-text="text/string to copy"`

```html
<button class="mix-clipboard" data-clipboard-text="copied string">
  copy string <i class="fad fa-copy" aria-hidden="true"></i>
</button>
```
