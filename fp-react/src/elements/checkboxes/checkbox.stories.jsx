import React from 'react'
import Checkbox from './checkbox'

export default {
  title: 'Elements/Inputs/Checkbox',
  component: Checkbox,
  parameters: {
    // layout: 'padded',
  }
}

const Template = (args) => (
  <Checkbox {...args} />
)

export const InputField = Template.bind({})

InputField.args = {
  name: 'checkbox-input',
  click: () => console.log('Clicked DefaultName Example')
}

const CheckboxTemplate = (args) => (
  <label>
    <Checkbox {...args} />
  </label>
)

export const CheckboxInput = CheckboxTemplate.bind({})

CheckboxInput.args = {
  name: 'checkbox-component',
  click: () => console.log('Clicked DefaultName Example')
}
