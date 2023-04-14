import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './common/NavBar'
import Login from './aunthentication/Login'

import Dashboard from './pages/Dashboard'


import CreateUser from './components/CreateUserDashboard'
import SignUp from './aunthentication/Signup'


function App() {
  return (
    <div>
      <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/sign-up" element={<SignUp /> } />
                <Route path="/login" element={<Login /> } />
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App