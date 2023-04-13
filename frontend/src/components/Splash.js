import React from 'react'

function Splash() {
  return (
    <div className="flex justify-end items-top h-[100vh]">
        <img className="h-[80vh]" src={require("./img/watery1.jpg")} alt="splash_photo" />
        <img className="h-[80vh]" src={require("./img/watery.jpg")} alt="splash_photo" />
    </div>
  )
}

export default Splash