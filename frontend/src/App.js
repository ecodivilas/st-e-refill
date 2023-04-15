import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './common/NavBar'
import Login from './aunthentication/Login'

import Dashboard from './pages/Dashboard'
import ProductsnServices from './pages/ProductsNServices'
import CustomerExperience from './pages/CustomerExperience'
import Insights from './pages/Insights'
import HelpCenter from './pages/HelpCenter'
import Inquiry from './pages/Inquiry'

import CreateUser from './components/CreateUserDashboard'
import Register from './aunthentication/Register'


function App() {
  return (
    <div>
      <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/register" element={<Register /> } />
                <Route path="/login" element={<Login /> } />

                <Route path="/products-and-services" element={<ProductsnServices />} />
                <Route path="/customer-experience" element={<CustomerExperience />} />
                <Route path="/insights" element={<Insights />} />
                <Route path="/help-center" element={<HelpCenter />} />
                <Route path="/inquiry" element={<Inquiry />} />
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App