# Design Tokens

**What are design tokens?**

> Design tokens are the visual design atoms of the design system — specifically, they are named entities that store visual design attributes. We use them in place of hard-coded values (such as hex values for color or pixel values for spacing) in order to maintain a scalable and consistent visual system for UI development.

[What are design Tokens (CSS-Tricks)](https://css-tricks.com/what-are-design-tokens/)

[Tokens in a design System](<[https://link](https://medium.com/eightshapes-llc/tokens-in-design-systems-25dd82d58421)>)

[SALES FORCE DESIGN TOKENS](https://www.lightningdesignsystem.com/design-tokens)

### What are SASS Maps

> Maps in Sass hold pairs of keys and values, and make it easy to look up a value by its corresponding key. They’re written ( `<expression>: <expression>, <expression>: <expression>` ). The expression before the : is the key, and the expression after is the value associated with that key. The keys must be unique, but the values may be duplicated. Unlike lists, maps must be written with parentheses around them. A map with no pairs is written ().
>
> [Read more about SASS maps](https://sass-lang.com/documentation/values/maps)

#### Token Formats

Utility tokens allow you to generate SASS Maps for utility classes.
Structure **ELEMENT/MODIFIER/item-group/Items/\_** method or in a case where you don't need a group structure **_Rule/Item/Subitems_** when creating tokens for utilities classes:

**Utility Token Structure**

- ELEMENT: CSS element (fonts, color)
- MODIFIER: Targets the CSS rule size for e.g: `size: 1rem`
- group: named maps fr grouped elements
- Items/Subitems: are used for the class names `.prefix-item-subitem: 0.75rem` e.g: `.mx-fs-xs: 0.75rem`

```json
{
  "ELEMENT": {
    "MODIFIER": {
      "group": {
        "ITEM": {
          "key": "VALUE",
          "comments": "COMMENT"
        }
      }
    }
  }
}
```

**Font-Size Utility Tokens** (example)

```json
// fonts.json
{
  "font": {
    "size": {
      "group": {
        "sm": {
          "value": "0.875rem",
          "comment": "descriptions..."
        },
        "md": {
          "value": "1.3rem",
          "comment": "descriptions..."
        },
        "lg": {
          "value": "1.5rem",
          "comment": "descriptions..."
        }
      }
    }
  }
}
```

**Color Utility Tokens** (examples)

```json
{
  "color": {
    "black": {
      "value": "#000000"
    },
    "white": {
      "value": "#ffffff"
    },
    "gray": {
      "value": "#6a737d"
    },
    "red": {
      "value": "#d73a49"
    }
  }
}
```

**Component Token Structure** (example)

Component tokens are structured a lot like how you write rules for a CSS button/card and will generate all the SASS/CSS for your element.
Structure **_Group/Name/Rules/Nesting/Rules_**:

- Group: Component SASS group
- Name: Component name
- Rules: Rules that style the Component e.g: `size: 1rem`
- Nested/Rules: Components can have nested rules

```json
{
  "GROUP": {
    "NAME": {
      "RULE": {
        "KEY": "VALUE",
        "COMMENT": "COMMENT"
      },
      "NESTED": {
        "RULE": {
          "KEY": "VALUE",
          "COMMENT": "COMMENT"
        }
      }
    }
  }
}
```

```json

{
 "component": {
     "navbar": {
       "display": {
         "value": "flex"
       },
       "align-items": {
         "value": "center"
       },
       "height": {
         "value": "60px"
       }
     }
 }

```

- Utilities
- Components
- Helpers
- Functions

`to be continue--WIP`

#### [Read the docs for more info on setup, usages and examples (WIP)](./docs)

#### Inspiration, Links & Resources

**[Amazon Style Dictionary](https://amzn.github.io/style-dictionary/#/?id=style-dictionary)**
Style Dictionary is a build system that allows you to define styles once, in a way for any platform or language to consume. A single place to create and edit your styles, and a single command exports these rules to all the places you need them - iOS, Android, CSS, JS, HTML, sketch files, style documentation, or anything you can think of. It is available as a CLI through npm, but can also be used like any normal node module if you want to extend its functionality.

**[How to manage your Design Tokens with Style Dictionary](https://medium.com/@didoo/how-to-manage-your-design-tokens-with-style-dictionary-98c795b938aa)**

**[Generate All Your Utility Classes with Sass Maps](https://frontstuff.io/generate-all-your-utility-classes-with-sass-maps)**

**[Mastering Maps: Build a Flexible Variable System in Sass](https://www.viget.com/articles/maps-math-and-magic-build-a-flexible-variable-system-in-sass/)**

**[Advanced Use of Sass Maps](<[https://link](https://itnext.io/advanced-use-of-sass-maps-bd5a47ca0d1a)>)**
