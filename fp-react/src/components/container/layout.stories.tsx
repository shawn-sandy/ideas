import React from "react"
import {
  ComponentMeta,
  ComponentStory
} from "@storybook/react"

import Layout from "./layout"

export default {
  title: "Components/Layout",
  component: Layout,
  parameters: {
    layout: "padded",
    status: {
      type: "alpha"
    }
  }
} as ComponentMeta<typeof Layout>

const Template: ComponentStory<typeof Layout> = ({
  ...args
}) => (
  <Layout
    {...args}
    styles={{ "--box-max-w": "100%" }}
  ></Layout>
)

export const LayoutSection = Template.bind({})

LayoutSection.args = {
  children:
    "First paint is a performance-first, accessibility-driven, SCSS/CSS micro-framework..."
}
