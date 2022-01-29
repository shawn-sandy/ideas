// .storybook/FirstPaint.js

import { create } from '@storybook/theming'

export default create({
  base: 'light',
  brandTitle: 'FirstPaint',
  brandUrl: 'https://firstpaint.dev',
  brandImage: 'https://first-paint.netlify.app/img/fp.svg',
  // UI settings
  appBg: 'white',
  appContentBg: 'white',
  appBorderColor: 'lightgrey',
  colorSecondary: '#767676',
  // Text colors
  textColor: 'black',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: 'sliver',
  barSelectedColor: 'black',
  barBg: 'whitesmoke',

  // Form colors
  inputBg: 'white',
  inputBorder: 'silver',
  inputTextColor: 'black',
  inputBorderRadius: 4,
})
