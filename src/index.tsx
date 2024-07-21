/// <reference types="react-scripts" />

import 'react-app-polyfill/stable'
import 'core-js'
import { createRoot } from 'react-dom/client'
import reportWebVitals from './reportWebVitals'
import App from './_projectConfig/App'

createRoot(document.getElementById('root')!).render(
  <App />,
)

if (module.hot) {
  module.hot.accept();
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
