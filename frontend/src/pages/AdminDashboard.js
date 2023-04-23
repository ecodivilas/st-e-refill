import React, { useState } from 'react'
import Sidebar from '../common/Sidebar'
import UserDashboard from '../components/dashboards/UserDashboard'

function AdminDashboard() {
    const [open, setOpen] = useState(false);
  return (
    <div>
        {/* <section className="flex gap-6"> */}
        <section className="relative flex gap-2 overflow-scroll max-w-full bg-zinc-700">
        {/* <div className="fixed top-20 bg-green-900 z-30 w-72 p-12"></div> */}
            <Sidebar open={open} setOpen={setOpen} />
        {/* </div> */}
        {/* <div className={`${ open ? "w-3/4" : "w-full"
        } flex justify-center bg-red-500 z-20 p-4`}> */}
          <div className= "grow flex z-20 p-4" >
            <div className='w-full p-2'>

                <UserDashboard />   
            </div>
        </div>
        
        </section>
    </div>
  )
}

export default AdminDashboard