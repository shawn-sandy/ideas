import React from 'react'
import FpImg from './img'

export default {
  title: 'Elements/Media/Images',
  component: FpImg,
  parameters: {
    layout: 'centered'
  }
}

const ImgTemplate = (args) => <FpImg {...args} />

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
