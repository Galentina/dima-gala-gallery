import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import './styles/_global.scss'
import 'antd/dist/reset.css'
import { RecoilRoot } from 'recoil'
import reportWebVitals from './reportWebVitals'
import Layout from './Layout'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <React.StrictMode>
    <RecoilRoot>
      <Suspense fallback="Loading...">
        <Layout />
      </Suspense>
    </RecoilRoot>
  </React.StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
