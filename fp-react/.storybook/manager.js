// .storybook/manager.js

import { addons } from '@storybook/addons'
import { themes } from '@storybook/theming'
import FirstPaint from './FirstPaint'

addons.setConfig({
  isFullscreen: false,
  showNav: false,
  showPanel: true,
  panelPosition: 'bottom',
  enableShortcuts: true,
  isToolshown: true,
  selectedPanel: undefined,
  initialActive: 'sidebar',
  theme: FirstPaint,
  sidebar: {
    showRoots: false,
    collapsedRoots: ['other'],
  },
  toolbar: {
    title: { hidden: false, },
    zoom: { hidden: true, },
    eject: { hidden: false, },
    copy: { hidden: false, },
    fullscreen: { hidden: true, }
  }
})
