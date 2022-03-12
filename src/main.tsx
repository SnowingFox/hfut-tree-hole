import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import '@/plugins/wydr'
import '@/assets/scss/override.scss'
import ThemeConfig from '@/theme'
import GlobalStyles from '@/theme/theme-config/global-style'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeConfig>
        <GlobalStyles />
        <App />
      </ThemeConfig>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
)
