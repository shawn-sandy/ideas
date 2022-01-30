module.exports = {
  "stories": [
    "../src/guides/**/*.stories.mdx",
    "../src/elements/**/*.stories.jsx",
    "../src/components/**/*.stories.jsx",
    "../src/plugins/**/*.stories.jsx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)",
    "../src/**/*.stories.mdx",
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app"
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "webpack5"
  }
}
