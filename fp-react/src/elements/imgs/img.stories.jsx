import React from 'react'
import Img from './img'

export default {
  title: 'Elements/Media/Images',
  component: Img,
  parameters: {
    layout: 'centered',
  }
}

const ImgTemplate = (args) => <Img {...args} />

export const Image = ImgTemplate.bind({})

Image.args = {
  src: 'https://via.placeholder.com/150',
  alt: 'Placeholder Image'
}

export const ImageMedium = ImgTemplate.bind({})

ImageMedium.args = {
  src: 'https://via.placeholder.com/300',
  alt: 'Placeholder Image',
  width: '300',
  height: '300'
}
