/** @format */
import React from "react"

import {
  ComponentStory,
  ComponentMeta
} from "@storybook/react"

import Grid from "./grid"

export default {
  title: "Components/Grids",
  component: Grid,
  parameters: {
    layout: "padded",
    status: {
      type: "beta"
    }
  }
} as ComponentMeta<typeof Grid>

export const FPGrid: ComponentStory<typeof Grid> = () => (
  <Grid primary />
)
