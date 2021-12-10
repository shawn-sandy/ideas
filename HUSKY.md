# Husky setup files

## Husky

> Modern native git hooks made easy [More Info](<[https://link](https://typicode.github.io/husky/#/)>)

### Install Husky

```bash
 npx husky-init && npm install
```

_It will setup husky, modify package.json and create a sample pre-commit hook that you can edit. By default, it will run npm test when you commit._

## Commit Lint

Commit lint helps your team adhering to a commit convention. By supporting npm-installed configurations it makes sharing of commit conventions easy. [https://commitlint.js.org/](https://commitlint.js.org/)

Commit ling config `commitlint.config.js`

```json
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
