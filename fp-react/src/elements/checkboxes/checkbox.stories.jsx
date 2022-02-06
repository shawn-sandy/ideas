import React from 'react'
import Checkbox from './checkbox'

export default {
  title: 'Elements/Checkbox',
  component: Checkbox,
  parameters: {
    // layout: 'padded',
  }
}

const Template = (args) => <Checkbox {...args} />

export const InputElement = Template.bind({})

InputElement.args = {
  name: 'checkbox',
  click: () => console.log('Clicked DefaultName Example')
}
