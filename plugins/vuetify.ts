import '@mdi/font/css/materialdesignicons.css'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
const myCustomLightTheme: ThemeDefinition = {
    dark: false,
    colors: {
      background: '#FFFFFF00',
      surface: '#FFFFFF',
      primary: '#F48FB1',
      'primary-darken-1': '#3700B3',
      secondary: '#EC407A',
      'secondary-darken-1': '#018786',
      error: '#F06292',
      info: '#2196F3',
      success: '#4CAF50',
      warning: '#FB8C00',
    },
  }

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    // ... your configuration
    theme: {
        defaultTheme: 'myCustomLightTheme',
        themes: {
          myCustomLightTheme,
        },
      },
    })
  app.vueApp.use(vuetify)
})