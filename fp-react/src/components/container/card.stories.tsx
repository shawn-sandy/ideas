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
  children: (
    <>
      <h3>Card Title</h3>
      <p>
        First paint is a performance-first,
        accessibility-driven, SCSS/CSS micro-framework...
      </p>
    </>
  )
}

export const CardLg = ComponentTemplate.bind({})

CardLg.args = {
  styles: { "--card": "var(--cd-lg)" },
  children: (
    <>
      <h3>Card Title</h3>
      <p>
        First paint is a performance-first,
        accessibility-driven, SCSS/CSS micro-framework...
      </p>
    </>
  )
}
