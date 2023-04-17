import React from 'react'
import { FaHome } from 'react-icons/fa'

// import React, { useState } from 'react'
import { pagesNavigations } from '../data/pagesLinks'
import { useNavigate } from 'react-router-dom'

function Navbar() {
  // const [nav, setNav] = useState(false) // DarkMode
  const navigate = useNavigate()
  return (
    <div>
      <nav className="w-full top-1 bg-white">
        <div className="flex items-center w-full bg-white h-15 top-0">
          <div className="flex justify-start items-center pt-1.5 w-3/4 pl-2">
            <button type="button" onClick={() => navigate('/')}> <img className="h-12  mt-0.75" src={require("../assets/img/e_refill_logo.webp")} alt="logo" /> </button>
          </div>

          <div className="flex justify-end align-bottom w-1/4 gap-4 mr-2 my-2 h-12">
            <button type="button" onClick={() => navigate('/register')} className="text-white bg-orange-600 hover:bg-slate-900 font-medium text-base px-5 dark:bg-orange-500 dark:hover:bg-orange-900 w-1/2">Register</button>
            <button type="button" onClick={() => navigate('/login')} className="text-white bg-orange-600 hover:bg-orange-600 font-medium text-base px-5 dark:bg-slate-900 dark:hover:bg-slate-800 w-1/2">Login</button>
          </div>
        </div>

        <div className="p-5 flex items-center justify-center z-10 dark:bg-slate-900 h-12 w-full">
          <button onClick={() => navigate('/')}>
            {/* <img className="h-5 mr-10" src={require("../assets/img/icons8-home-24-white.png")} alt="home_button" /> */}
            <FaHome className="text-white hover:!text-orange-600 mr-10 !h-[50px]"/>
          </button>

          <ul className="hidden md:flex space-x-10 text-gray-600 dark:text-gray-100 font-bold text-sm capitalize font-medium">

          {pagesNavigations.map(({ id, link, path }) => (
              <li key={id} className="hover:text-orange-500">
                <button className="!tracking-wide" onClick={() => navigate(path)}> {link}</button>
              </li>
          ))}    
          
          </ul>

          <img
            id="moon"
            src={require("../assets/img/moon.webp")}
            className="hidden md:block w-5 cursor-pointer ml-10"
            alt="Dark Mood"
          />
          <div id="hamburger" className="space-y-1 md:hidden cursor-pointer z-20">
            <div className="w-6 h-0.5 bg-black"></div>
            <div className="w-6 h-0.5 bg-black"></div>
            <div className="w-6 h-0.5 bg-black"></div>
          </div>
        </div>
      </nav>  
    </div>
  )
}

export default Navbar