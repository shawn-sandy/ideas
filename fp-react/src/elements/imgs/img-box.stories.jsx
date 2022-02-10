import React from 'react'
import { Pics } from './img'
import { ImgCaption } from './img-caption.stories'

export default {
  title: 'Elements/Media/Images',
  component: Pics,
  subcomponents: { ImgCaption },
  parameters: {
    layout: 'centered'
  }
}

const ComponentTemplate = (args) => <Pics {...args} />

export const PictureElm = ComponentTemplate.bind({})

PictureElm.args = {
  children: <img src="https://via.placeholder.com/500" alt='' />,
  styles: { '--pic-w': '250px' }

}

