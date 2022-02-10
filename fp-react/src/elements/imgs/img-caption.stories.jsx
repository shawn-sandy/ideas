import React from 'react'
import { Caption } from './img'


export default {
  title: 'Elements/Media/Images/Figure',
  component: Caption,
  parameters: {
    layout: 'centered',
  }
}

const ComponentTemplate = (args) => <Caption {...args} />

export const FigCaption = ComponentTemplate.bind({})

FigCaption.args = {
  children: 'You can add a caption to an image',
}
