import React from 'react'

function Navbar() {
  return (
    <div>
      
  <nav className="w-full top-1 bg-white z-10 dark:bg-slate-900">
  <div className="flex justify-end items-center w-full bg-white h-20 top-0">
    <div className="flex justify-end align-bottom w-1/4 gap-2 mr-2">
    <button type="button" class="text-white bg-orange-600 hover:bg-orange-600 focus:ring-4 focus:bg-orange-500 font-medium text-lg px-5 py-2.5 dark:bg-orange-500 dark:hover:bg-orange-700 focus:outline-none dark:focus:ring-orange-700 w-1/2">Register</button>
    <button type="button" class="text-white bg-orange-600 hover:bg-orange-600 focus:ring-4 focus:bg-orange-500 font-medium text-lg px-5 py-2.5 dark:bg-slate-900 dark:hover:bg-orange-700 focus:outline-none dark:focus:ring-orange-700 w-1/2">Login</button>
    </div>
  </div>
    <div className="container mx-auto py-5 flex items-center justify-between">
      <div className="flex items-center gap-2">
        {/* <img className="h-5" src={require("./img/ely_logo.png")} alt="logo" /> */}
        {/* <span className="text-2xl font-bold text-indigo-900 dark:text-white"
          >ELY</span> */}
        
      </div>
      <ul
        className="hidden md:flex space-x-10 text-gray-600 dark:text-gray-100 font-bold text-sm capitalize font-medium"
      >
        <li className="hover:text-gray-500">
        <a href="/"><img className="h-5" src={require("./img/icons8-home-24-white.png")} alt="home_button" /></a>
        </li>
        <li className="hover:text-gray-500">
          <a href="/product_and_services">Product & Services</a>
        </li>
        <li className="hover:text-gray-500">
          <a href="#customer_experience">Customer Experience</a>
        </li>
        <li className="hover:text-gray-500">
          <a href="#insights">Insights</a>
        </li>
        <li className="hover:text-gray-500">
          <a href="#help_center">Help Center</a>
        </li>
        <li className="hover:text-gray-500">
          <a href="#inquiry">Inquiry</a>
        </li>
      </ul>
      <img
        id="moon"
        src={require("./img/moon.png")}
        className="hidden md:block w-5 cursor-pointer"
        alt="Dark Mood"
      />
      <div id="hamburger" className="space-y-1 md:hidden cursor-pointer z-20">
        <div className="w-6 h-0.5 bg-black"></div>
        <div className="w-6 h-0.5 bg-black"></div>
        <div className="w-6 h-0.5 bg-black"></div>
      </div>
      <ul
        id="menu"
        className="hidden bg-indigo-900 absolute left-0 top-0 w-full p-10 rounded-b-3xl space-y-10 text-white text-center"
      >
        <li>
          <a id="hLink" href="/">homepage</a>
        </li>
        <li>
          <a id="hLink" href="#about">about me</a>
        </li>
        <li>
          <a id="hLink" href="#services">services</a>
        </li>
        <li>
          <a id="hLink" href="#works">works</a>
        </li>
        <li>
          <a id="hLink" href="#contact">contact</a>
        </li>
      </ul>
    </div>
  </nav>
  </div>
  )
}

export default Navbar