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
    '@storybook/addon-a11y',
    "@storybook/preset-create-react-app",
    "@storybook/addon-storysource",
    'storybook-design-token',
    'storybook-addon-designs',
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
  }
}
