import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

ReactDOM.render(<App />, document.getElementById('root'))

if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/sw.js')
    .then(function () {
      console.log('CLIENT: service worker registration complete.')
    })
    .catch(function () {
      console.log('CLIENT: service worker registration failure.')
    })
}
