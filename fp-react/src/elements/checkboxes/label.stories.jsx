import React from 'react'
import { Label } from './checkbox'

export default {
  title: 'Elements/Inputs/Checkbox',
  component: Label,
  parameters: {
    // layout: 'padded',
  }
}

const LabelTemplate = (args) => <Label {...args} />

export const LabelElement = LabelTemplate.bind({})

LabelElement.args = {
  children: 'Label Element',
  name: 'label'
}
