import React from 'react'
import { ImgBox } from './img'

export default {
  title: 'Elements/Media/Images',
  component: ImgBox,
  parameters: {
    layout: 'centered'
  }
}

const Template = (args) => <ImgBox {...args} />

export const Box = Template.bind({})

Box.args = {
  children: <img src="https://via.placeholder.com/500" alt='' />,
  styles: { '--pic-w': '250px' }

}
