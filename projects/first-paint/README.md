# First Paint

> Lightweight, Fast, Accessible, Inclusive

First Paint is an easy to use CSS/SCSS starter library that contains accessibility focused, classless, semantic HTML elements and components for quickly scaffolding/building modern, lightweight mobile friendly websites.

## Getting started

### Quick Start

**Simple & Easy copy paste option**

- Create an empty html page
- Copy and paste the code from [Gist](https://gist.github.com/shawn-sandy/0be9ce998760ec2193e31ac1d7ae2e85) this gist into your new HTML page
- Launch you page in your browser
- Edit/customize your page `markup and content`

### Customized Build

- Copy and add the stylesheet below into the `<head></head>` of you HTML page

```html
<link
  rel="stylesheet"
  src="https://cdn.jsdelivr.net/npm/@shawnsandy/mix@0.9.2/dist/fp/index.css"
/>
```

- Build your page using FistPaint component markup
- Add content :)

### Components

#### Navigation Bar

```html
<nav class="mx-bg-lightgray border-bottom" role="navigation">
  <section id="navigation">
    <div><a href="#">First Paint</a></div>
    <div>
      <a href="#">Blog</a> <a href="#">About</a> <a href="#">Contact Us</a>
    </div>
  </section>
</nav>
```

#### Banner (Header)

```html
<header>
  <section>
    <div>
      <h1>FirstPaint</h1>
      <h4>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae
        assumenda odio rem maiores ad minima doloribus.
      </h4>
      <a
        href="#"
        role="button"
        title="Add word, cta action, to your button title"
        >Call to action</a
      >
    </div>
  </section>
</header>
```

#### Grid 3-col flex grid

```html
<section aria-label="feature">
  <div role="list">
    <div role="listitem">
      <h4>Feature...</h4>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
      consectetur assumenda, porro repudiandae repellendus placeat iure officia
      inventore sint voluptas et blanditiis facilis voluptate quas accusamus
      itaque ea, corporis odio.
    </div>
    <div role="listitem">
      <h4>Feature...</h4>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
      consectetur assumenda, porro repudiandae repellendus placeat iure officia
      inventore sint voluptas et blanditiis facilis voluptate quas accusamus
      itaque ea, corporis odio.
    </div>
    <div role="listitem">
      <h4>Feature...</h4>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
      consectetur assumenda, porro repudiandae repellendus placeat iure officia
      inventore sint voluptas et blanditiis facilis voluptate quas accusamus
      itaque ea, corporis odio.
    </div>
  </div>
</section>
```

#### Main Content

```html
<main>
  <section class="articles">
    <article>
      <h3>Sample Article 1</h3>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae
        assumenda odio rem maiores ad minima doloribus. Pariatur quibusdam
        dolorum distinctio repellendus vero natus explicabo mollitia ea, nemo
        sunt voluptatibus eaque!
      </p>
      <footer>
        <p><a href="" role="button">Read more</a></p>
        <p><a href="#">Read more</a></p>
      </footer>
    </article>
    <aside role="sidebar">
      <h5>Sidebar</h5>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos error,
        quas at facilis temporibus optio rem, doloremque, modi numquam commodi
        illum cumque. Sit eveniet, quod expedita libero obcaecati a laudantium.
      </p>
    </aside>
  </section>
</main>
```

#### Un Ordered List

```html
<ul>
  <li>One</li>
  <li>Two</li>
  <li>Three</li>
  <li>Four</li>
  <li>Five</li>
</ul>
```

#### Ordered List

```html
<ol>
  <li>One</li>
  <li>Two</li>
  <li>Three</li>
  <li>Four</li>
  <li>Five</li>
</ol>
```

#### Unstyled List wrap list in `<span></span>` tags

Un Ordered unstyled

```html
<span>
  <ul>
    <li>One</li>
    <li>Two</li>
    <li>Three</li>
    <li>Four</li>
    <li>Five</li>
  </ul>
</span>
```

Orderd unstyled

```html
<span>
  <ol>
    <li>One</li>
    <li>Two</li>
    <li>Three</li>
    <li>Four</li>
    <li>Five</li>
  </ol>
</span>
```

#### Form components

**Input text, email, password**

````
**Select box**

```html
<label for="select">Text Input Component</label>
<select name="select" id="">
  <option value="">Select</option>
  <option value="">Options</option>
  <option value="">Options</option>
</select>
````

**Text area**

```html
<label for="textarea">Textarea Component</label>
<textarea name="textarea" id="" cols="30" rows="10"></textarea>
```

---

### TODOS

- Complete the docs
- Add examples

## Licence (MIT)

The MIT License (MIT)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Contribute

## Enjoy

**Wakanda Forever :)**
