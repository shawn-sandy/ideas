import React from 'react'
import { Fig } from './img'
import { FigCaption } from './img-caption.stories'

export default {
  title: 'Elements/Media/Images/Figure',
  component: Fig,
  subcomponents: { ImgCaption: FigCaption },
  parameters: {
    layout: 'centered'
  }
}

const ChildElement = (args) => (
  <>
    <img src="https://source.unsplash.com/random?w=800" alt='' />
    <FigCaption>A Caption for my image</FigCaption>
  </>
)

const ComponentTemplate = (args) => <Fig {...args} />

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

