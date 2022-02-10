import React from 'react'
import { Caption } from './img'


export default {
  title: 'Elements/Media/Images',
  component: Caption,
  parameters: {
    layout: 'centered',
  }
}

const ComponentTemplate = (args) => <Caption {...args} />

export const ImgCaption = ComponentTemplate.bind({})

ImgCaption.args = {
  children: 'You can add a caption to an image',
}
