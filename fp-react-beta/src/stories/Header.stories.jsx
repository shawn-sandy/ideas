// @ts-ignore
import React from 'react'

import { Header } from './Header'

export default {
  title: 'Example/Header',
  component: Header,
}


// @ts-ignore
const Template = (args) => <Header { ...args } />

export const LoggedIn = Template.bind({})
// @ts-ignore
LoggedIn.args = {
  user: {},
}

export const LoggedOut = Template.bind({})
// @ts-ignore
LoggedOut.args = {}
