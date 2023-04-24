import React from 'react'

import Splash from './Splash'

function Home() {

  localStorage.setItem("totalPriceAmount", "0")
  localStorage.setItem("selectedService", " ")
  localStorage.setItem("updatedSlimQuantity", "0")
  localStorage.setItem("updatedRoundQuantity", "0")
  localStorage.setItem("updatedHalfSlimQuantity", "0")
  localStorage.setItem("scheduleType", "anytime")
  localStorage.setItem("dateValue", "")
  localStorage.setItem("timeValue", "")
  localStorage.setItem("orderMOP", "")

  return (
    <div>
        <Splash />
    </div>
  )
}

export default Home