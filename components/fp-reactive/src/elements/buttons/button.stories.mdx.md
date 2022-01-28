<!-- Button.stories.mdx -->

import { Meta, Story } from "@storybook/addon-docs"

import Button from "./button"

<Meta
  title="Button"
  component={Button}
  argTypes={{
    children: {
      control: { type: "text" }
    }
  }}
/>

# Button component

<Story
  name="Primary"
  args="{{
    children: 'Button Children',
}}"
>
  <p>
    <Button>Primary</Button>
  </p>
</Story>

<Story name="Secondary">
  <p>
    <Button
      styles={{ "--btn-bg": "red", "--btn-color": "white" }}
    >
      Red & white
    </Button>
  </p>
</Story>

As Button element that allows you to create mutiple components
