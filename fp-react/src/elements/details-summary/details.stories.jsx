import React from 'react'
import Details, { Summary } from './details-summary'
import { SummaryElement } from './summary.stories'
// import './index.css'

export default {
  title: 'Elements/Details',
  component: Details,
  subcomponents: { SummaryElement },
  parameters: {
    layout: 'padded'
  }
}

const Template = (args) => (
  <Details {...args}>
    <Summary>{args.title}</Summary>
    <p>{args.children}</p>
  </Details>)

export const DetailsElement = Template.bind({})

DetailsElement.args = {
  children: 'Add some content here to make it work',
  title: "Element Title"
}
