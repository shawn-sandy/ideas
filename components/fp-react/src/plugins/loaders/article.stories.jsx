import React from 'react'
import Article from './article'

export default {
  title: 'Plugins/Loaders',
  component: Article
}

const Template = (args) => <Article {...args} />

export const ArticleLoader = Template.bind({})
ArticleLoader.args = {
  speed: 2
}

export const LightBlueLoader = Template.bind({})
LightBlueLoader.args = {
  speed: 5,
  backgroundColor: 'lightblue',
  width: 400
}
