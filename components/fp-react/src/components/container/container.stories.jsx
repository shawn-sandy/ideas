import React from 'react'

import Container from './container'

export default {
  title: 'Components/Container',
  component: Container
}

const Template = (args) => <Container {...args} />

export const Default = Template.bind({})

Default.args = {

  children: 'The is a default container, can be added using the children prop'
}

