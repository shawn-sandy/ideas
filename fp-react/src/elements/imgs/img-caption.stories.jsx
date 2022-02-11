import React from 'react'
import { FpCaption } from './img'


export default {
  title: 'Elements/Media/Images/Figure',
  component: FpCaption,
  parameters: {
    layout: 'centered',
  }
}

const ComponentTemplate = (args) => <FpCaption {...args} />

export const FigCaption = ComponentTemplate.bind({})

FigCaption.args = {
  children: 'You can add a caption to an image',
}
