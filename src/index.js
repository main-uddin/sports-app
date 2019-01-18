import React from 'react'
import ReactDOM from 'react-dom'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'

import './index.css'
import App from './App'
import { yellow, red } from '@material-ui/core/colors'

const theme = createMuiTheme({
  palette: {
    primary: red,
    secondary: yellow
  }
})

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <App />
  </MuiThemeProvider>,
  document.getElementById('root')
)

// if ('serviceWorker' in navigator) {
//   navigator.serviceWorker
//     .register('/sw.js')
//     .then(function () {
//       console.log('CLIENT: service worker registration complete.')
//     })
//     .catch(function () {
//       console.log('CLIENT: service worker registration failure.')
//     })
// }
