import React from 'react'
import Details, { Summary } from './details-summary'
// import './index.css'

export default {
  title: 'Elements/Details',
  component: Details,
  subcomponents: { Summary },
  parameters: {
    layout: 'padded'
  }
}

export const DetailsTempalte = (...args) => (
  <Details {...args}>
    <Summary>Summary title</Summary>
    <p>This is the content for the details summary, a native accordion component</p>
  </Details>
)

const Template = (args) => (
  <Details {...args}>
    <Summary>Template Title</Summary>
    {args.children}
  </Details>)

export const DetailsElement = Template.bind({})

DetailsElement.args = {
  children: 'This is the content for the details summary, a native accordion component'
}
