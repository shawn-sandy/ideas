# Husky setup files

## Husky

> Modern native git hooks made easy [More Info](<[https://link](https://typicode.github.io/husky/#/)>)

### Install Husky

```bash
 npx husky-init && npm install
```

_It will setup husky, modify package.json and create a sample pre-commit hook that you can edit. By default, it will run npm test when you commit._

### Commit Lint

> Commit lint helps your team adhering to a commit convention. By supporting npm-installed configurations it makes sharing of commit conventions easy. [more info](https://commitlint.js.org/)

Install commitlint globally

```bash
npm install -g @commitlint/cli @commitlint/config-conventional
```

```bash
npm install @commitlint/cli @commitlint/config-conventional
```

Copy the code below to your `commitlint.config.js`

```js
const Configuration = {
  /*
   * Resolve and load @commitlint/config-conventional from node_modules.
   * Referenced packages must be installed
   */
  extends: ['@commitlint/config-conventional'],

  /*
   * Custom URL to show upon failure
   */
  helpUrl:
    'https://github.com/conventional-changelog/commitlint/#what-is-commitlint',
  /*
   * Custom prompt configs
   */
  prompt: {
    messages: {},
    questions: {
      type: {
        description: 'please input type:'
      }
    }
  }
}

module.exports = Configuration
```

### PRETTY QUICK

> Runs Prettier on your changed files [more info](https://github.com/okonet/lint-staged).

Install

```bash
npm install --save-dev prettier pretty-quick
```

Add this code to you `.husky/precommit` file

```property
echo 'Starting prettier...'
npx pretty-quick --staged
```

### LINT STAGED

> Run linters against staged git files and don't let 💩 slip into your code base! [more info](https://github.com/okonet/lint-staged)

Install
``bash
npm install -D lint-staged

`

`

`

`

````

Add the following to your `.husky/precommit` file

```bash
# lint-stages
echo 'Starting eslint...'
npx lint-staged "$1"
````

## ESLINT setup

Intall ESLint

```bash
npm install eslint --save-dev
```

Create an eslint config file

Use the eslint config interactive command tool

```base
npx eslint --init
```

or create using the following

`

`

`

`

````bash

```json
{
  "env": {
    "browser": true,
    "es2021": true,
    "node": true
  },
  "extends": ["standard"],
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "script"
  },
  "rules": {},
  "ignorePatterns": ["temp.js", "**/vendor/*.js", "**/node_modules/*.js"]
}
````

Create a `.eslintignore` file in your project root

```txt
node_modules
package-lock.json

# Cache
.npm
.cache
.eslintcache

# ignore built packages
dist
esm
public
generated
*.min.js

# Coverage
coverage

# Output of 'npm pack'
*.tgz

# Mac files
.DS_Store

# Logs
logs
*.log

*.hbs
**/node_modules/**
**/build/**
**/coverage/**
**/docs/**
**/dist/**
```

## STYLELINT

> A mighty, modern linter that helps you avoid errors and enforce conventions in your styles. [more info](https://stylelint.io/)

Install

```bash
npm install --save-dev stylelint stylelint-config-standard
```

Create a .stylelintrc.json configuration file in the root of your project with the following content:

```json
{
  "extends": "stylelint-config-standard"
}
```

### Update you package.json

```json
"config": {
    "commitizen": {
      "path": "./node_modules/cz-conventional-changelog"
    }
  },
  "husky": {
    "hooks": {}
  },
  "lint-staged": {
    "*.js": "eslint --fix",
    "*.{scss, css}": "stylelint --fix"
  }
```

## GIST

You can get all the files from on gist (updated) [open](https://gist.github.com/shawn-sandy/137ade88316323150e08878d2ef54d08)

### Complete Husky `pre-commit` file

```bash
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

# npm test
echo 'Starting prettier...'
npx pretty-quick --staged "$1"

# lint-stages
echo 'Starting eslint...'
npx lint-staged "$1"

# commitizen
echo 'Starting commitlint...'
npx --no -- commitlint --edit "$1"

# If everything passes... Now we can commit
echo '✅✅✅✅ Excellent all test passed, I am committing this now...'

# ignore built packages
dist
esm
public
generated
*.min.js

# Coverage
coverage

# Output of 'npm pack'
*.tgz

# Mac files
.DS_Store

# Logs
logs
*.log

*.hbs
**/node_modules/**
**/build/**
**/coverage/**
**/docs/**
**/dist/**
```

## STYLELINT

> A mighty, modern linter that helps you avoid errors and enforce conventions in your styles. [more info](https://stylelint.io/)

Install

```bash
npm install --save-dev stylelint stylelint-config-standard
```

Create a .stylelintrc.json configuration file in the root of your project with the following content:

```json
{
  "extends": "stylelint-config-standard"
}
```

## WEBHINT

> webhint helps you improve your site's accessibility, speed, cross-browser compatibility, and more by checking your code for best practices and common errors. [more info](https://webhint.io/)

Install

```bash
npm i -D hint
```

Create a `hintrc`

run `npx create hintrc` to create a hintrc file

Add a `.hintrc` file to you project root

```json
{
  "extends": ["accessibility"]
}
```

### Update you package.json

```json
"config": {
    "commitizen": {
      "path": "./node_modules/cz-conventional-changelog"
    }
  },
  "husky": {
    "hooks": {}
  },
  "lint-staged": {
    "*.js": "eslint --fix",
    "*.{scss, css}": "stylelint --fix"
  }
```

HUSKY PRE-COMMIT

```bash
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

# npm test
echo 'Starting prettier...'
npx pretty-quick --staged "$1"

# lint-stages
echo 'Starting eslint...'
npx lint-staged "$1"

# commitizen
echo 'Starting commitlint...'
npx --no -- commitlint --edit "$1"

# If everything passes... Now we can commit
echo '✅✅✅✅ Excellent all test passed, I am committing this now...'
```

## GIST

You can get all the files from on gist (updated) [open](https://gist.github.com/shawn-sandy/137ade88316323150e08878d2ef54d08)

## RESOURCES

### Conventional Commits

The Conventional Commits specification is a lightweight convention on top of commit messages. It provides an easy set of rules for creating an explicit commit history; which makes it easier to write automated tools on top of. This convention dovetails with SemVer, by describing the features, fixes, and breaking changes made in commit messages [more info](https://www.conventionalcommits.org/en/v1.0.0/).

The commit message should be structured as follows:

```txt
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

### Commit Message editor

A VS code extension that allows to write quickly write standard conventional commit messages [Download](https://marketplace.visualstudio.com/items?itemName=adam-bender.commit-message-editor&utm_source=pocket_mylist)

## Tips

### Commit lint has an error from current or previous commit

- Open the `.git/COMMIT_EDITMSG` file and remove all content.
- Create a new commit with the `--amend` option
