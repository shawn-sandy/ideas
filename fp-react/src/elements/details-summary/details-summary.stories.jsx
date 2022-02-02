import React from 'react'
import DetailsSummary from './details-summary'

export default {
  title: 'Elements/DetailsElement',
  component: DetailsSummary
}

const Template = (args) => <DetailsSummary {...args} />

export const DetailsElement = Template.bind({})

DetailsElement.args = {
  content: 'This is the content for the details summary, a native accordion component'
}
