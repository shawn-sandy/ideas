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
    "@storybook/addon-storysource"
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "webpack5"
  }
}
