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
  <Grid>
    <div role="gridcell">
      <h3>Grid col</h3>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing
        elit. Quod nulla totam dolorem nemo facere ex
        expedita illum laboriosam sit. Ea laboriosam rem
        omnis sit autem temporibus ipsum maxime dignissimos
        id.
      </p>
      <a href="http://www.w3.org/TR/wai-aria-1.1/">
        ARIA 1.1 Specification
      </a>
    </div>
    <div role="gridcell">
      <h3>Grid col</h3>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing
        elit. Quod nulla totam dolorem nemo facere ex
        expedita illum laboriosam sit. Ea laboriosam rem
        omnis sit autem temporibus ipsum maxime dignissimos
        id.
      </p>
      <a href="https://www.w3.org/TR/core-aam-1.1/">
        Core Accessibility API Mappings 1.1
      </a>
    </div>
    <div role="gridcell">
      <h3>Grid col</h3>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing
        elit. Quod nulla totam dolorem nemo facere ex
        expedita illum laboriosam sit. Ea laboriosam rem
        omnis sit autem temporibus ipsum maxime dignissimos
        id.
      </p>
      <a href="https://www.w3.org/WAI/intro/aria.php">
        WAI-ARIA Overview
      </a>
    </div>
    <div role="gridcell">
      <h3>Grid col</h3>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing
        elit. Quod nulla totam dolorem nemo facere ex
        expedita illum laboriosam sit. Ea laboriosam rem
        omnis sit autem temporibus ipsum maxime dignissimos
        id.
      </p>
      <a href="https://www.w3.org/WAI/intro/wcag">
        WCAG Overview
      </a>
    </div>
  </Grid>
)
