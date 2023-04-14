import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div className='w-[90%] mx-auto'>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  )
}

export default App
