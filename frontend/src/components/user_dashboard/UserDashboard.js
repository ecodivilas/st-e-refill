import React, { useState } from 'react'
import Sidebar from '../../common/Sidebar'
import OrderHistory from './OrderHistory'

function UserDashboard() {
  const [open, setOpen] = useState(false);
  return (
    <div>
         {/* <div
        className="fixed top-0 flex justify-end items-center background w-screen -z-10 mt-24"
        style={{
        // filter: 'brightness(40%)',
        backgroundImage: `url(${require('../../assets/img/watery.webp')})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '100vh',
      }}
        ></div> */}
        <section className="relative flex gap-2 overflow-scroll max-w-full bg-zinc-700">
            <Sidebar open={open} setOpen={setOpen} isAdmin={true} />
            <div className= "grow flex z-20 p-4" >
              <div className='w-full p-2'>
              <OrderHistory />
              </div>
            </div>
        </section>
    </div>
  )
}

export default UserDashboard