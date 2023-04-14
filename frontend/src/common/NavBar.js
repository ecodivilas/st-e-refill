import React from 'react'

// import React, { useState } from 'react'
import { navigation } from '../data/navbarLinks'
import { useNavigate } from 'react-router-dom'

function Navbar() {
    // const [nav, setNav] = useState(false)
    const navigate = useNavigate()
  return (
    <div>
        <div className="flex flex-row justify-end">
            <button onClick={() => navigate('/')}>
                <img className="h-5" src={require("./img/icons8-home-24.png")} alt="home_button" />
            </button>

{navigation.map(({ id, link, path }) => (
                <ul className="list-none">
                    <li
                        key={id}
                        className="px-3 cursor-pointer font-medium tracking-wider hover:scale-100 hover:text-gray-700"
                    >
                        <button onClick={() => navigate(path)}> {link}</button>
                    </li>
                </ul>
            ))}    
        </div>
  </div>
  )
}

export default Navbar