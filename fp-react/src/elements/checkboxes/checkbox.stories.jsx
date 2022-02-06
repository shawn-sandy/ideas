import React from 'react'
import Checkbox from './checkbox'

export default {
  title: 'Elements/Inputs/Checkbox',
  component: Checkbox,
  parameters: {
    // layout: 'padded',
  }
}

const Template = (args) => <Checkbox {...args} />

export const InputField = Template.bind({})

InputField.args = {
  name: 'checkbox',
  click: () => console.log('Clicked DefaultName Example')
}
