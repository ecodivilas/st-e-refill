import React from 'react'

// import UserDashboard from '../components/user_dashboard/UserDashboard'

import Splash from './Splash'
import { getCurrentDate } from '../services/DateSetter'
import { isAdmin_, isAuthorize } from '../App'
import AdminHomeDashboard from '../components/admin_dashboard/home/AdminHomeDashboard'
import UserDashboard from '../components/user_dashboard/UserDashboard'

function Home({ setIsAuthorized, setIsAdmin, isAuthorized, setIsNavigationOut }) {

  localStorage.setItem("totalPriceAmount", "0")
  localStorage.setItem("selectedService", " ")
  localStorage.setItem("updatedSlimQuantity", "0")
  localStorage.setItem("updatedRoundQuantity", "0")
  localStorage.setItem("updatedHalfSlimQuantity", "0")
  localStorage.setItem("scheduleType", "anytime")
  localStorage.setItem("dateValue", getCurrentDate())
  localStorage.setItem("today", getCurrentDate())
  localStorage.setItem("timeValue", "00:00:00")
  localStorage.setItem("orderMOP", "cash_on_delivery")

  setIsNavigationOut(false)

  return (
    //Flipping of the Dashboard
    <div>
        {isAdmin_ ? <AdminHomeDashboard setIsAuthorized={setIsAuthorized} setIsAdmin={setIsAdmin} /> :
        isAuthorize ? <UserDashboard setIsAuthorized={setIsAuthorized} setIsAdmin={setIsAdmin} /> : <Splash isAuthorized={ isAuthorized } />
        }
        
        {/* <UserDashboard /> */}
    </div>
  )
}

export default Home