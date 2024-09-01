import React from 'react'
import './layout.scss'
import { Header } from './Header'
import { Footer } from './Footer'
import { PageGallery } from '../pages/PageGallery'

const Layout = () => {
  return (
    <div className="container">
      <div className="layout">
        <Header/>
        <PageGallery/>
        <Footer/>
      </div>
    </div>
  )
}

export default Layout
