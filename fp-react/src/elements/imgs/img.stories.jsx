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
  src: 'https://source.unsplash.com/random?w=800',
  alt: 'Placeholder Image',
  styles: {
    '--img-w': '480px',
  }
}

export const ImageMedium = ImgTemplate.bind({})

ImageMedium.args = {
  src: 'https://source.unsplash.com/random?w=800',
  alt: 'Placeholder Image',
  width: '300',
  height: '300',
  fit: 'fill',
  styles: {
    '--img-w': '350px',
    '--img-h': '350px',
  }
}
