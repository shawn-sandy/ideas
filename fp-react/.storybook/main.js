module.exports = {
  "stories": [
    "../src/guides/**/*.stories.mdx",
    "../src/tokens/**/*.stories.jsx",
    "../src/elements/**/*.stories.jsx",
    "../src/components/**/*.stories.jsx",
    "../src/modules/**/*.stories.jsx",
    "../src/pages/**/*.stories.jsx",
    "../src/services/**/*.stories.jsx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)",
    "../src/**/*.stories.mdx",
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    '@whitespace/storybook-addon-html',
    "@storybook/addon-storysource",
    '@storybook/addon-a11y',
    "@storybook/preset-create-react-app",
    'storybook-design-token',
    'storybook-addon-designs',
    // 'storybook-addon-performance/register',
    "storybook-addon-pseudo-states",
    '@etchteam/storybook-addon-status',
    {
      name: '@storybook/addon-docs',
      options: {
        sourceLoaderOptions: {
          injectStoryParameters: false,
        },
      },
    },

  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "webpack5"
  },
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
    },
  },
}
