# First Paint

> Lightweight, Fast, Accessible, Inclusive

First Paint is an easy to use HTML toolkit that contains accessibility focused, classless, semantic HTML elements and components for quickly building modern, lightweight mobile friendly websites.

## Getting started

### Quick Start

**Simple & Easy copy paste option**

* Create an empty html page
* Copy and paste the code from [Gist](https://gist.github.com/shawn-sandy/0be9ce998760ec2193e31ac1d7ae2e85) this gist into your new HTML page
* Launch you page in your browser
* Edit/customize your page `markup and content`

### Customized Build

* Copy and add the stylesheet below into the `<head></head>` of you HTML page

``` html
<link rel="stylesheet" src="https://cdn.jsdelivr.net/npm/@shawnsandy/mix@0.9.2/dist/fp/index.css" />
```

* Build your page using FistPaint component markup
* Add content :)

### Components

#### Navigation Bar

``` html
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

``` html
<header>
    <section>
        <div>
            <h1>FirstPaint</h1>
            <h4>
                A SASS/CSS toolkit designed to promote HTML development using semantic
                HTML/ARIA elements and attributes, class-names optional.
            </h4>
            <a href="#" role="button" title="Add word, cta action, to your button title">Read the Docs</a>
        </div>
    </section>
</header>
```

### Grid

``` html
<section aria-label="feature">
    <div role="list">
        <div role="listitem">
            <h4>Feature...</h4>
            Lorem ipsum dolor sit amet consectetur...
        </div>
        <div role="listitem">
            <h4>Feature...</h4>
            Lorem ipsum dolor sit amet consectetur...
        </div>
        <div role="listitem">
            <h4>Feature...</h4>
            Lorem ipsum dolor sit amet consectetur...
        </div>
    </div>
</section>
```

#### Main with Sidebar

``` html
 <main>
     <section class="articles">
         <article>
             <h3>Sample Article 1</h3>
             <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
             <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
             <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
             <footer>
                 <p> <a href="" role="button">Read more</a> </p>
                 <p> <a href="#">Read more</a> </p>
             </footer>
         </article>
         <aside role="sidebar">
             <h5>Sidebar</h5>
             <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos error, quas at facilis temporibus optio rem,
                 doloremque, modi numquam commodi illum cumque. Sit eveniet, quod expedita libero obcaecati a laudantium. </p>
         </aside>
     </section>
 </main>
```

#### Un Ordered List

``` html
<ul>
    <li>One</li>
    <li>Two</li>
    <li>Three</li>
    <li>Four</li>
    <li>Five</li>
</ul>
```

#### Ordered List

``` html
<ol>
    <li>One</li>
    <li>Two</li>
    <li>Three</li>
    <li>Four</li>
    <li>Five</li>
</ol>
```

#### Unstyled List wrap list in `<span></span>` tags

**Un Ordered unstyled**

``` html
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

**Orderd unstyled**

``` html
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

``` html
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

**Select box**

``` html
<label for="select">Text Input Component</label>
<select name="select" id="">
    <option value="">Select</option>
    <option value="">Options</option>
    <option value="">Options</option>
</select>
```

**Text area**

``` html
<label for="textarea">Textarea Component</label>
<textarea name="textarea" id="" cols="30" rows="10"></textarea>
```

## Full page

``` html
<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title>Atomix</title>
    <meta name="description" content="Atomix">
    <meta name="author" content="Shawn Sandy">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script src="https://kit.fontawesome.com/e2ffdf4c70.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/normalize.css@8.0.1/normalize.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@shawnsandy/mix@0.9.2/dist/fp/index.csss">
</head>

<body>
    <nav class="mx-bg-lightgray border-bottom" role="navigation">
        <section id="navigation">
            <div> <a href="#">First Paint</a> </div>
            <div> <a href="#">Blog</a> <a href="#">About</a> <a href="#">Contact Us</a> </div>
        </section>
    </nav>
    <header>
        <section>
            <div>
                <h1>FirstPaint</h1>
                <h4>A SASS/CSS toolkit designed to promote HTML...</h4> <a href="#" role="button" title="Add word, cta action, to your button title">Read
                    the Docs</a>
            </div>
        </section>
    </header>
    <section aria-label="feature">
        <div role="list">
            <div role="listitem">
                <h4>Feature...</h4> Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
            <div role="listitem">
                <h4>Feature...</h4> Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
            <div role="listitem">
                <h4>Feature...</h4> Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
            <div role="listitem">
                <h4>Feature...</h4> Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
        </div>
    </section>
    <hr>
    <main>
        <section class="articles">
            <article>
                <h3>Sample Article 1</h3>
                <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit... </p>
                <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit... </p>
                <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit... </p>
                <footer>
                    <p> <a href="" role="button">Read more</a> </p>
                    <p> <a href="#">Read more</a> </p>
                </footer>
            </article>
            <aside role="sidebar">
                <h5>Sidebar</h5>
                <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit... </p>
            </aside>
        </section>
    </main>
    <footer>
        <section>
            <p> <small> Lorem ipsum dolor sit amet, consectetur adipisicing elit...</small> </p>
        </section>
    </footer>
    <!--   <script src="/src.e31bb0bc.js"></script> -->
</body>

</html>
```
