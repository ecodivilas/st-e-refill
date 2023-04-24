import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './common/NavBar'
import Login from './aunthentication/Login'

import Home from './pages/Home'
import ProductsnServices from './pages/ProductsNServices'
import CustomerExperience from './pages/CustomerExperience'
import Insights from './pages/Insights'
import HelpCenter from './pages/HelpCenter'
import Inquiry from './pages/Inquiry'
import UserDashboard from './components/dashboards/UserDashboard'

import OrderTypeSelection from './components/orders/OrderTypeSelection'
import ContainerSelection from './components/orders/ContainerSelection'
import OrderSchedule from './components/orders/OrderSchedule'
import OrderMOP from './components/orders/OrderMOP'
import OrderSummary from './components/orders/OrderSummary'
import OrderSendToDB from './components/orders/OrderSendToDB'

import AdminDashboard from './pages/AdminDashboard'

import Register from './aunthentication/Register'
import DeliveryAddressForm from './components/registration/DeliveryAddressForm'

// import AssignLocalData from './data/AssignLocalData'

import './assets/customizedStyles/customTableStyle.css';

function App() {
  
  return (
    <div>
      <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<Register /> } />
                <Route path="/delivery-address-form" element={<DeliveryAddressForm /> } />
                <Route path="/login" element={<Login /> } />
                
                <Route path="/users-dashboard" element={<UserDashboard />}/>
                
                <Route path="/order" element={<OrderTypeSelection />}/>
                <Route path="/order-container-selection" element={<ContainerSelection />}/>
                <Route path="/order-schedule" element={<OrderSchedule />}/>
                <Route path="/order-mode-of-payment" element={<OrderMOP />}/>
                <Route path="/order-summary" element={<OrderSummary />}/>
                <Route path="/order-processing" element={<OrderSendToDB />}/>

                <Route path="/admin" element={<AdminDashboard />}/>

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