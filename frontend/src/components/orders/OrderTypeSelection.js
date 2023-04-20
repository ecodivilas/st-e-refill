import React, { useState } from 'react'
import { AiOutlineCaretUp, AiOutlineCaretDown } from "react-icons/ai"
import { FaCartArrowDown } from "react-icons/fa"
import { GiWaterBottle } from "react-icons/gi"

import { Navigate } from "react-router-dom";

// import ContainerSelection from './ContainerSelection'

function OrderTypeSelection() {

  const services = [
      {
        id: 1,
        service: "Pick up Empty Container",
        icon: <FaCartArrowDown />
      },
      {
        id: 2,
        service: "Buy New Filled Container",
        icon: <GiWaterBottle className="text-gray-400" />
      }
    ]

    const [isOpen, setIsOpen] = useState(false)
    const [isProceed, setIsProceed] = useState(false)

    // This will be pass into ContainerSelection
    const [selectedService, setSelectedService] = useState(services[0].service)

    const handleSelect = (service) => {
      setSelectedService(service);
      setIsOpen((prev) => !prev)
    }
      
  return (
    <div className="w-[100vw] h-[100vh] flex bg-slate-100 justify-center items-start pt-20">
        <div className="flex-col items-center">
          <div className="py-10 font-semibold text-center text-2xl">Please choose the order you want to avail?</div>
          <div className="relative flex flex-col item-center rounded">
            <button onClick={() => setIsOpen((prev) => !prev)} className="bg-white drop-shadow-lg p-2 pl-5 w-full flex items-center justify-between font-bold text-lg rounded-lg tracking-wide border-1 active:border-white duration-300 active:text-white">{selectedService}
            {isOpen ? (
              <AiOutlineCaretDown className="h-8" />
            ):(
              <AiOutlineCaretUp className="h-8" />
            )}
            </button>

            {isOpen && (
              <div className="drop-shadow-lg bg-white absolute top-10 flex flex-col items-start rounded-lg p-2 w-full">
                {services.map((service)=>(
                  <div className="flex w-full justify-between  p-4 hover:bg-slate-100 cursor-pointer rounded-r-lg border-l-transparent hover:border-l-orange-600 border-l-4" key={service.id}>
                    {service.icon}
                    {service.id === 1 ? (
                      <button type="button" className="font-bold w-full" onClick={() => handleSelect(service.service)}>
                      {service.service}
                    </button>
                    ) : (
                      <button type="button" className="font-bold text-gray-400 w-full" onClick={() => handleSelect(service.service)} disabled>
                        {service.service}
                      </button> 
                    )
                  }
                  </div>
                ))}
              </div>
            )}
          </div>
            <button className="py-2 bg-slate-600 text-white font-semibold text-xl px-5 mt-44" onClick={() => setIsProceed((prev) => !prev)}>Proceed</button>
          
          { isProceed && (
            <Navigate to="/order-container-selection" state={{ orderData: [{orderType: selectedService}] }} />
          ) }
        </div>

    </div>
  )
}

export default OrderTypeSelection