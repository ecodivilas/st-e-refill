import React from 'react'
// import './App.css'

import UserDashboard from './components/UserDashboard'
import CreateUser from './components/CreateUser'

function App() {
  return (
    <div className="bg-gray-700">
        <div className="flex justify-center items-center h-[100vh]">
          <p className="text-white">Cool Application!!!</p> 🎉
        </div>
        <CreateUser />
        <UserDashboard />
    </div>
  )
}

export default App