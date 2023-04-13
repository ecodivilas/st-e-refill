import React from 'react'

function Footer() {
  return (
    <div className="w-full bg-gray-800">
      <div className="container mx-auto py-5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img className="w-8" src="./img/logo.png" alt="" />
          <span className="text-2xl font-bold text-white">E-Refill</span>
        </div>
        <span className="hidden md:block font-medium text-white"
          >© 2023 E-Refill. The design is very human </span
        >
        <div className="flex gap-2">
          <img className="w-4 cursor-pointer" src={require("./img/facebook.png")} alt="fb" />
          <img className="w-4 cursor-pointer" src={require("./img/instagram.png")} alt="insta" />
          <img className="w-4 cursor-pointer" src={require("./img/twitter.png")} alt="twitter" />
          <img className="w-4 cursor-pointer" src={require("./img/linkedin.png")} alt="linkedin" />
        </div>
      </div>
    </div>
  )
}

export default Footer