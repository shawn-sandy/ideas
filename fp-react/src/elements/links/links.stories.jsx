import React from 'react'
import Links, { Open } from './links'

export default {
  title: "Elements/Links/Element",
  component: Links,
  subcomponents: { Open },
  parameters: {
    // layout: 'padded',
  }
}

const Template = (args) => <Links {...args} />

export const Link = Template.bind({})

Link.args = {
  children: 'Click me...',
  to: '#',
  title: 'Title of the link',
}

const OpenTemplate = (args) => (
  <>
    <p>
      Creates an external link that opens in a new window {" "}
    </p>
    <p>
      <Open {...args} />
    </p>
  </>
)

export const ExternalLink = OpenTemplate.bind({})

ExternalLink.args = {
  children: 'Open in new tab',
  to: '/',
  title: 'Title of the link',
}

export const LinkButton = Template.bind({})

LinkButton.args = {
  children: 'Link Button',
  to: '#',
  title: 'Title of the link',
  styles: { '--btn-bg': 'darkblue', '--btn-color': 'white', '--btn-deco': 'none' }
}
