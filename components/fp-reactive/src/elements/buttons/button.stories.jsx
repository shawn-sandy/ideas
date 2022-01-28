import React from 'react'
import Button from './button'

export default {
  title: 'Elements/Button',
  component: Button
}

const Template = (args) => <Button {...args} />

export const Default = Template.bind({})

Default.args = {
  children: 'Default Button',
  onClick: () => console.log('Clicked Default Button')
}
