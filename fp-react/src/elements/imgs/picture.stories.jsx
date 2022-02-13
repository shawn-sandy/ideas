import React from 'react'
import { FpFig } from './img'
import { Caption } from './img-caption.stories'

export default {
  title: 'Elements/Media/Images',
  component: FpFig,
  subcomponents: { ImgCaption: Caption },
  parameters: {
    layout: 'centered',
    status: {
      type: 'beta'
    }
  }
}

const ChildElement = (args) => (
  <>
    <img src="https://source.unsplash.com/random?w=800" alt='' />
    <Caption>A Caption for my image</Caption>
  </>
)

const ComponentTemplate = (args) => <FpFig { ...args } />

export const Figure = ComponentTemplate.bind({})

Figure.args = {
  children: <img src="https://source.unsplash.com/random?w=800" alt='' />,
  styles: { '--pic-w': '250px' }

}

export const FigureCaption = ComponentTemplate.bind({})

FigureCaption.args = {
  children: <ChildElement />,
  styles: { '--pic-w': '250px' }

}

