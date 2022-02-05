import React from 'react'
import Checkbox from './checkbox'

export default {
  title: 'Elements/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'padded',
  }
}

const Template = (args) => <Checkbox {...args} />

export const Checkboxes = Template.bind({})

Checkboxes.args = {
  children: 'Check me out',
  onClick: () => console.log('Clicked DefaultName Example')
}
