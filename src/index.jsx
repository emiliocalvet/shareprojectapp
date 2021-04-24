import React from 'react'
import { render } from "react-dom"
import { positions, Provider } from "react-alert"
import AlertMUITemplate from "react-alert-template-mui"
import App from './App'

const options = {
  position: positions.MIDDLE
}

const Root = () => (
  <Provider template={AlertMUITemplate} {...options}>
    <App />
  </Provider>
)

render(<Root />, document.getElementById('root'))

