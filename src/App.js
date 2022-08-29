import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import Main from './components/Main/Main'
function App() {
  return (
    <div>
        <Navbar/>
        <div className='d-flex mt-3'>
        <Sidebar/>
        <Main/>
        </div>
        <Footer/>
    </div>
  )
}

export default App
