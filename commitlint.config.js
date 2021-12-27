const Configuration = {
  /*
   * Resolve and load @commitlint/config-conventional from node_modules.
   * Referenced packages must be installed
   */
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [2, 'always', ['ci', 'chore', 'docs', 'feat', 'fix', 'perf', 'refactor', 'revert', 'style']]
  },

  /*
   * Custom URL to show upon failure
   */
  helpUrl:
    'https://github.com/conventional-changelog/commitlint/#what-is-commitlint'

}

module.exports = Configuration