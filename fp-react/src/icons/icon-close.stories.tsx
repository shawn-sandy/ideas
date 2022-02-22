import React from "react"
import {
  ComponentMeta,
  ComponentStory
} from "@storybook/react"
import WindowClose from "./icon-close"

export default {
  title: "Elements/Media/Icons",
  component: WindowClose,
  parameters: {
    layout: "centered",
    status: {
      type: "alpha"
    }
  }
} as ComponentMeta<typeof WindowClose>

const ComponentTemplate: ComponentStory<
  typeof WindowClose
> = (args) => <WindowClose {...args} />

export const CustomIcon = ComponentTemplate.bind({})

// WindowCloseIcon.args = {
// }
