import React from 'react'
import { Pics } from './img'

export default {
  title: 'Elements/Media/Images',
  component: Pics,
  parameters: {
    layout: 'centered'
  }
}

const Template = (args) => <Pics {...args} />

export const Box = Template.bind({})

Box.args = {
  children: <img src="https://via.placeholder.com/500" alt='' />,
  styles: { '--pic-w': '250px' }

}
