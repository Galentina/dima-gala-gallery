import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import './styles/_global.scss'

// import 'antd/dist/reset.css'
import reportWebVitals from './reportWebVitals'
import Layout from './Layout'
import { Provider } from 'jotai'

const container = document.getElementById('root')

if (!container) {
  throw new Error('Root element not found')
}

const root = ReactDOM.createRoot(container)

root.render(
  <React.StrictMode>
    <Provider>
      <Suspense fallback={<div>Loading...</div>}>
        <Layout />
      </Suspense>
    </Provider>
  </React.StrictMode>,
)

reportWebVitals()