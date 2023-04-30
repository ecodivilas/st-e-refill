import React from 'react'

// import UserDashboard from '../components/user_dashboard/UserDashboard'

import Splash from './Splash'
import { getCurrentDate } from '../services/DateSetter'
import { isAdmin_ } from '../App'
import AdminDashboard from '../components/admin_dashboard/AdminDashboard'

function Home({ setIsAuthorized, setIsAdmin, isAuthorized }) {

  localStorage.setItem("totalPriceAmount", "0")
  localStorage.setItem("selectedService", " ")
  localStorage.setItem("updatedSlimQuantity", "0")
  localStorage.setItem("updatedRoundQuantity", "0")
  localStorage.setItem("updatedHalfSlimQuantity", "0")
  localStorage.setItem("scheduleType", "anytime")
  localStorage.setItem("dateValue", getCurrentDate())
  localStorage.setItem("today", getCurrentDate())
  localStorage.setItem("timeValue", "00:00:00")
  localStorage.setItem("orderMOP", "")

  return (
    <div>
        {isAdmin_ ? <AdminDashboard setIsAuthorized={setIsAuthorized} setIsAdmin={setIsAdmin} /> : <Splash isAuthorized={ isAuthorized } /> }
        
        {/* <UserDashboard /> */}
    </div>
  )
}

export default Home