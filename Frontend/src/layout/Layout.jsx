import React from 'react'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import Routers from '../routes/Routers'
import Chatbot from '../Components/Chatbot/Chatbot'

function Layout() {
  return (
    <>
    <Header/>
    <main>
      <Routers/>
    </main>
    <Chatbot/>
    <Footer/>
    </>
  )
}

export default Layout
