// .storybook/FirstPaint.js

import { create } from '@storybook/theming'

export default create({
  base: 'light',
  brandTitle: 'FirstPaint',
  brandUrl: 'https://firstpaint.dev',
  brandImage: 'https://res.cloudinary.com/dqjs95c7n/image/upload/v1643757934/fpb-logo-sm_vhhgyb.png',
  // UI settings
  appBg: 'white',
  appContentBg: 'white',
  appBorderColor: 'whitesmoke',
  colorSecondary: 'darkgreen',
  // Text colors
  textColor: 'black',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: 'sliver',
  barSelectedColor: 'green',
  barBg: 'whitesmoke',

  // Form colors
  inputBg: 'white',
  inputBorder: 'silver',
  inputTextColor: 'black',
  inputBorderRadius: 4,
})
