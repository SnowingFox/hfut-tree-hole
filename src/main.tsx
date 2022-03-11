import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import '@/plugins/wydr'
import { hot } from 'react-hot-loader/root'
import '@/assets/scss/override.scss'
import ThemeConfig from '@/theme'
import GlobalStyles from '@/theme/theme-config/global-style'

const HotApp = hot(App)

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeConfig>
        <GlobalStyles />
        <HotApp />
      </ThemeConfig>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
)
