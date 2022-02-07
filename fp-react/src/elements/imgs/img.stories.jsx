import React from 'react'
import Img from './img'

export default {
  title: 'Elements/Media/Img',
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

// export const Red = Template.bind({})
// Red.args = {
//   children: 'Red Example',
//   styles: { '--btn-bg': 'red', '--btn-color': 'white' },
//   onClick: () => console.log('Clicked DefaultName Example')
// }
