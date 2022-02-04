import React from 'react'

import Layout from './container'

export default {
  title: 'Components/Layout',
  component: Layout,
  parameters: {
    layout: 'padded'
  }

}

const Template = (args) => (
  <Layout {...args} styles={{ '--box-max-w': '100%' }} />
)

export const Section = Template.bind({})

Section.args = {
  children: 'First paint is a performance-first, accessibility-driven, SCSS/CSS micro-framework'

}