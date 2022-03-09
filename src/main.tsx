import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import '@/plugins/wydr'
import { hot } from 'react-hot-loader/root'

const HotApp = hot(App)

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <HotApp />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
)
