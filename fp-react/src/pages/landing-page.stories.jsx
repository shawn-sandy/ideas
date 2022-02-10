import React from 'react'
import LandingPage from './landing-page'

export default {
  title: 'Pages/LandingPage',
  component: LandingPage,
  parameters: {
    layout: 'padded',
  }
}

const Template = (args) => <LandingPage {...args} />

export const CoverPage = Template.bind({})

CoverPage.args = {
  children: 'This is where your cover page content goes'
}
