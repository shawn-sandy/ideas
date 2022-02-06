import React from 'react'
import { Label } from './checkbox'

import { InputElement } from './checkbox.stories'

export default {
  title: 'Elements/Checkbox',
  component: Label,
  parameters: {
    // layout: 'padded',
  }
}

const Template = (args) => <Label {...args} >
  <InputElement id={args.name} /> {args.children}
</Label>

export const CheckboxComponent = Template.bind({})

CheckboxComponent.args = {
  name: 'checkbox',
  children: 'Checkbox Label'
}

const LabelTemplate = (args) => <Label {...args} />

export const LabelElement = LabelTemplate.bind({})

LabelElement.args = {
  children: 'Label Element',
  name: 'label'
}
