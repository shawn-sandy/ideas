import React from 'react'
import { FpCaption } from './img'


export default {
  title: 'Elements/Media/Images',
  component: FpCaption,
  parameters: {
    layout: 'centered',
    status: {
      type: 'beta'
    }
  }
}

const ComponentTemplate = (args) => <FpCaption { ...args } />

export const Caption = ComponentTemplate.bind({})

Caption.args = {
  children: 'You can add a caption to an image',
}