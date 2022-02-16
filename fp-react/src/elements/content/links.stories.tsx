import React from "react"
import Links, { OpenTab } from "./links"
import {
  ComponentStory,
  ComponentMeta
} from "@storybook/react"

export default {
  title: "Elements/Content/Links",
  component: Links,
  subcomponents: { OpenTab },
  parameters: {
    // layout: 'padded',
    status: {
      type: "beta"
    }
  }
} as ComponentMeta<typeof Links>

const Template: ComponentStory<typeof Links> = (args) => (
  <Links {...args} />
)

export const Link: ComponentStory<typeof Links> =
  Template.bind({})

Link.args = {
  children: "Click me...",
  to: "#",
  title: "Title of the link"
}

const OpenTemplate: ComponentStory<typeof Links> = (
  args
) => (
  <>
    <p>
      Creates an external link that opens in a new window{" "}
    </p>
    <p>
      <OpenTab {...args} />
    </p>
  </>
)

export const ExternalLink: ComponentStory<typeof Links> =
  OpenTemplate.bind({})

ExternalLink.args = {
  children: "Open in new tab",
  to: "/",
  title: "Title of the link"
}

export const LinkButton = Template.bind({})

LinkButton.args = {
  children: "Link Button",
  to: "#",
  title: "Title of the link",
  styles: {
    "--btn-bg": "darkblue",
    "--btn-color": "white",
    "--btn-deco": "none"
  }
}
