import React from 'react'
import Checkbox from './checkbox'

export default {
  title: 'Elements/Checkbox/Input',
  component: Checkbox,
  parameters: {
    layout: 'padded',
  }
}

const Template = (args) => <Checkbox {...args} />

export const Base = Template.bind({})

Base.args = {
  click: () => console.log('Clicked DefaultName Example')
}
