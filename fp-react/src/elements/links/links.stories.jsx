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

export const Link = Template.bind({})

Link.args = {
  children: 'Click me...',
  to: '#'
}

const OpenTemplate = (args) => (
  <>
    <p>Open link in new</p>
    <Open {...args} />
  </>
)

export const ExternalLink = OpenTemplate.bind({})

ExternalLink.args = {
  children: 'Click me...',
  to: '/'
}
