import React from 'react'

import Layout from './container'

export default {
  title: 'Components/Layout',
  component: Layout
}

const Template = (args) => <Layout {...args} />

export const Section = Template.bind({})

Section.args = {

  children: 'The is a default container, can be added using the children prop'
}
