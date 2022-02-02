import React from 'react'

import Layout from './container'

export default {
  title: 'Components/Layout',
  component: Layout
}

const Template = (args) => (
  <Layout {...args} styles={{ '--box-max-w': '100%' }} />
)

export const Section = Template.bind({})

Section.args = {

}
