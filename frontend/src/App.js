import React from 'react'
// import './App.css'

import Navbar from './common/NavBar'
import Splash from './components/Splash'
import UserDashboard from './components/UserDashboard'
import CreateUser from './components/CreateUserDashboard'
import Footer from './common/Footer'

function App() {
  return (
    // <div className="bg-gray-700">
    <div>
      <Navbar />
      <Splash />
      <CreateUser />
      <UserDashboard />
      <Footer />
    </div>
  )
}

export default App