import React from 'react'

import Layout from './container'

export default {
  title: 'Components/Layout',
  component: Layout
}

const Template = (args) => (
  <Layout {...args} styles={{ '--box-max-w': '100%' }}>
    <p>Some content can go here to see that happens</p>
  </Layout>
)

export const Section = Template.bind({})

Section.args = {

}
