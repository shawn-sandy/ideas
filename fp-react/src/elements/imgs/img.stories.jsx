import React from 'react'
import FpImg from './img'

export default {
  title: 'Elements/Media/Images',
  component: FpImg,
  parameters: {
    layout: 'centered',
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
      // url: 'http://www.url.com/status', // will make the tag a link
      // statuses: { ...} // add custom statuses for this story here
    }
  }
}

const ImgTemplate = (args) => <FpImg { ...args } />

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
