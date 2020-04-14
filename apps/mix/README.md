# Atomix `(beta)`

A SASS toolkit for generating CSS utility classes and components from 
**Design Tokens**.

## Install

- **Install Atomix(beta)**

```

npm i -D @shawnsandy/mix

```

- **Install Style Dictionary**

> Style Dictionary is a build system that allows you to define styles once, in a way for any platform or language to consume. A single place to create and edit your styles, and a single command exports these rules to all the places you need them - iOS, Android, CSS, JS, HTML, sketch files, style documentation, or anything you can think of. It is available as a CLI through npm, but can also be used like any normal node module if you want to extend its functionality.

```

// global
npm i -g style-dictionary

```

**Uility classes** (example)

1. Create/Import your tokens [(creating tokens)](#creating-tokens)
2. Config Atomix using SASS defaults
3. Import Atomix
4. Include the utility mixin and run you build
5. View [UTILITY TOKENS]('./dist/color.css') example

```scss

/** Import tokens, replace the import file below with your own **/
@import "node_modules/@shawnsandy/mix/tokens/tokens";

/** Config Atomix SASS defaults */

$mix-tokens: $tokens; // token variable name
$mix-namespace: "ui"; // namespace
$mix-base: "base"; // default utility name
$mix-colors: "color"; // color key
$mix-fonts: "fonts"; // font key
$mix-spacing: "spacing"; // padding and margin
$mix-sizing: "sizing"; //  width heights
$mix-prefix: "-"; // separator for you class names my-class-name
$mix-components: "components"; // default component key
$mix-modifier-states: active focus focus-within hover visited; // define the states that you use
$mix-color-attrs: "color", "background-color", "border-color";

/** import Atomix **/
@import "node_modules/@shawnsandy/mix/index";

/** utility mixin example--create font utility form our tokens **/
.ui {
  @include mix-utilities("font");
}

```


#### Creating Design Tokens


*The workflow below is not mandatory but strongly recommend*, Atomix really only needs a SASS-MAPS to do it's thing can write SASS-MAPS on your own, thats entirely up to you, once you stick to the map format(s).

*What are design tokens?*

> Design tokens are the visual design atoms of the design system — specifically, they are named entities that store visual design attributes. We use them in place of hard-coded values (such as hex values for color or pixel values for spacing) in order to maintain a scalable and consistent visual system for UI development. [Token Guide](./tokens.md)


- If you haven't yet install the Style Dictionary : [Style Dictionary Quick Start](https://amzn.github.io/style-dictionary/#/quick_start)
- Create a `token.js` config file
- Write your tokens be sure to read about how to [format tokens for Atomix](./tokens.md#token-formats)
- Run style-dictionary

```js
// config file tokens.js
const config = require("@shawnsandy/mix/config/tokens.js");

module.exports = config({
  source: "tokens/**/*", // tokens dir--/tokens/my-tokens.json
  build: "scss/_tokens/", // build dir trailing slash required--scss/_tokens.scss
  name: "token/", // name of you scss token output file--tokens.scss
});
```

#### Run the build script

- Command line

```
style-dictionary build --config ./tokens.js

```

- NPM scripts

```
 "scripts": {
    "tokens": "style-dictionary build --config ./tokens.js"
  },
```

Run the scripts

```

npm run tokens

```

### License

The MIT License (MIT)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

**Enjoy!**
