
const webpack = require('webpack')

const webpackConfig = {
  module: {
    rules: [
      {
        test: /\.examples\.md$/, // see comment below!
        type: 'javascript/auto' // Tell webpack to interpret the result from examples-loader as JavaScript
      }
    ]
  },
  plugins: [
    // Rewrites the absolute paths to those two files into relative paths
    new webpack.NormalModuleReplacementPlugin(
      /react-styleguidist\/lib\/loaders\/utils\/client\/requireInRuntime$/,
      'react-styleguidist/lib/loaders/utils/client/requireInRuntime'
    ),
    new webpack.NormalModuleReplacementPlugin(
      /react-styleguidist\/lib\/loaders\/utils\/client\/evalInContext$/,
      'react-styleguidist/lib/loaders/utils/client/evalInContext'
    )
  ]
}

module.exports = {
  webpackConfig,
  components: [
    'src/components/**/*.{js,jsx,ts,tsx}'
  ],
  ignore: ['src/components/**/index.cjs'],
  skipComponentsWithoutExample: true,
  theme: {

  }
}
