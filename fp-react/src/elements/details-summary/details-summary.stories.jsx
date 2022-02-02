import React from 'react'
import Details, { Summary } from './details-summary'

export default {
  title: 'Elements/Details',
  component: Details,
  subcomponents: { Summary },
  parameters: {
    layout: 'padded'
  }
}

const Template = (args) => <Details {...args}><Summary /></Details>

export const DetailsElement = Template.bind({})

DetailsElement.args = {
  content: 'This is the content for the details summary, a native accordion component'
}
