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
  onClick: () => console.log('Clicked Default Button')
}

/**
 * General component description in JSDoc format. Markdown is *supported*.
 */
export const Red = Template.bind({})
Red.args = {
  children: 'Red Button',
  styles: { '--btn-bg': 'red', '--btn-color': 'white' },
  onClick: () => console.log('Clicked Default Button')
}
