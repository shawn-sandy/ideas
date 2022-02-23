/** @format */

import React from "react"
import {
  ComponentMeta,
  ComponentStory
} from "@storybook/react"
import { Card } from "./layout"

export default {
  title: "Components/Layout",
  component: Card,
  parameters: {
    layout: "centered",
    status: {
      type: "alpha"
    }
  }
} as ComponentMeta<typeof Card>

const ComponentTemplate: ComponentStory<typeof Card> = (
  args
) => <Card {...args} />

export const Cards = ComponentTemplate.bind({})

Cards.args = {
  children: "You can add a caption to an image"
}
