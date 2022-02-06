import React from 'react'
import Button from './button'

export default {
  title: 'Elements/Buttons',
  component: Button
}

const Template = (args) => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
  children: 'Default Button',
  click: () => console.log('Clicked Default Button')
}

/**
 * General component description in JSDoc format. Markdown is *supported*.
 */
export const RedStyle = Template.bind({})
RedStyle.args = {
  children: 'Red Custom Style',
  styles: { '--btn-bg': 'red', '--btn-color': 'white' },
  click: () => console.log('Clicked red Button')
}

export const Disabled = Template.bind({})
Disabled.args = {
  disabled: true,
  children: 'Disabled Button',
  click: () => console.log('Clicked Disabled Button')
}
