import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './common/NavBar'
import UserLogin from './aunthentication/user/Login'
import AdminLogin from './aunthentication/admin/Login'

import UserDashboard from './components/user_dashboard/UserDashboard'
import AdminDashboard from './components/admin_dashboard/AdminDashboard'

import Home from './pages/Home'
import ProductsnServices from './pages/ProductsNServices'
import CustomerExperience from './pages/CustomerExperience'
import Insights from './pages/Insights'
import HelpCenter from './pages/HelpCenter'
import Inquiry from './pages/Inquiry'

import OrderTypeSelection from './components/orders/OrderTypeSelection'
import ContainerSelection from './components/orders/ContainerSelection'
import OrderSchedule from './components/orders/OrderSchedule'
import OrderMOP from './components/orders/OrderMOP'
import OrderSummary from './components/orders/OrderSummary'
import ContainerCards from './components/orders/ContainerCards'
import Register from './aunthentication/user/Register'
import DeliveryAddressForm from './components/registration/DeliveryAddressForm'

import './assets/customizedStyles/customTableStyle.css'
// import UsersList from './components/user_dashboard/UserList'
// import Posts from './components/user_dashboard/Posts'

export let isAuthorize
function App() {
  

const [isAuthorized, setIsAuthorized] = useState(
    sessionStorage.getItem("jwt") ? true : false
  )

isAuthorize = isAuthorized

  return (
    <div>
      <BrowserRouter>
        {/* <Navbar setIsAuthorized={setIsAuthorized} /> */}
        <Routes>
          {isAuthorized ? 
            <>
              <Route path="/delivery-address-form" element={<DeliveryAddressForm /> } />
              <Route path="/users-dashboard/*" element={<UserDashboard />}/>
              {/* <Route path="/posts/*" element={<Posts />}/> */}
              <Route path="/admin-dashboard" element={<AdminDashboard />}/>
              <Route path="/order" element={<OrderTypeSelection />}/>
              <Route path="/order-container-selection" element={<ContainerSelection />}/>
              <Route path="/order-schedule" element={<OrderSchedule />}/>
              <Route path="/order-mode-of-payment" element={<OrderMOP />}/>
              <Route path="/order-summary" element={<OrderSummary />}/>
              <Route path="/cards" element={<ContainerCards />}/>
            </>
            :
            <>
              <Route path="/login" element={<UserLogin setIsAuthorized={setIsAuthorized} /> } />
              <Route path="/admin" element={<AdminLogin setIsAuthorized={setIsAuthorized} />}/>
              <Route path="/register" element={<Register /> } />
            </>
          }
        
          <Route path="/*" element={<Home isAuthorized={isAuthorized} />} />
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
