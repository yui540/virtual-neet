import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import VirtualNeet from './components/VirtualNeet'
import '../scss/style.scss'

const store = configureStore()

render(
  <Provider store={store}>
    <VirtualNeet />
  </Provider>,
  document.getElementById('root')
)
