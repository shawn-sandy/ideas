import React from 'react'
import Links, { Open } from './links'

export default {
  title: "Elements/Links/Element",
  component: Links,
  parameters: {
    layout: 'padded',
  }
}

const Template = (args) => <Links {...args} />

export const Element = Template.bind({})

Element.args = {
  children: 'Click me...',
  to: '#'
}

const OpenTemplate = (args) => (
  <>
    <p>Open link in new</p>
    <Open {...args} />
  </>
)

export const OpenTarget = OpenTemplate.bind({})

OpenTarget.args = {
  children: 'Click me...',
  to: '/'
}
