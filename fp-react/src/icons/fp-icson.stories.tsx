/** @format */

import React from "react"
import {
  ComponentMeta,
  ComponentStory
} from "@storybook/react"
import FpIcon from "./fp-icons"

export default {
  title: "Elements/Media/Icons",
  component: FpIcon,
  parameters: {
    layout: "centered",
    status: {
      type: "alpha"
    }
  }
} as ComponentMeta<typeof FpIcon>

const ComponentTemplate: ComponentStory<typeof FpIcon> = (
  args
) => <FpIcon {...args} />

export const FPIcons = ComponentTemplate.bind({})

FPIcons.args = {
  title: "The title of the Icon(s)",
  fill: "blue",
  size: "48",
  children: (
    <path d="M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm0 376c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm0-128c-53.02 0-96 42.98-96 96s42.98 96 96 96c-106.04 0-192-85.96-192-192S141.96 64 248 64c53.02 0 96 42.98 96 96s-42.98 96-96 96zm0-128c-17.67 0-32 14.33-32 32s14.33 32 32 32 32-14.33 32-32-14.33-32-32-32z"></path>
  )
}
