import React, { useState } from 'react'
import Sidebar from '../../common/Sidebar'
// import UsersList from './UsersList'
import OrderHistory from './OrderHistory';

function UserDashboard( { setIsAdmin, setIsAuthorized } ) {
  const [open, setOpen] = useState(false);
  return (
    <div>
        <section className="relative flex gap-2 overflow-scroll max-w-full bg-zinc-700">
            <Sidebar open={open} setOpen={setOpen} isAdmin={true} setIsAdmin={setIsAdmin} setIsAuthorized={setIsAuthorized} />
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