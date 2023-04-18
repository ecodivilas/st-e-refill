import React, { useState } from 'react'
import { AiOutlineCaretUp, AiOutlineCaretDown } from "react-icons/ai"
import { FaCartArrowDown } from "react-icons/fa"
import { GiWaterBottle } from "react-icons/gi"

function WaterService() {

    const [isOpen, setIsOpen] = useState(false)
    const [selectedService, setSelectedService] = useState("Services")

    const handleSelect = (service) => setSelectedService(service);
    
    const services = [
        {
          id: 1,
          service: "Pick up Empty Container",
          icon: <FaCartArrowDown />
        },
        {
          id: 2,
          service: "Buy New Filled Container",
          icon: <GiWaterBottle />
        }
      ]


  return (
    <div>
        <div className="relative flex flex-col item-center w-[340px] h-[250px] rounded">
        <button onClick={() => setIsOpen((prev) => !prev)} className="bg-white drop-shadow-lg p-2 pl-5 w-full flex items-center justify-between font-bold text-lg rounded-lg tracking-wide border-1 active:border-white duration-300 active:text-white">{selectedService}
        {isOpen ? (
          <AiOutlineCaretDown className="h-8" />
        ):(
          <AiOutlineCaretUp className="h-8" />
        )}
        </button>

        {isOpen && (
          <div className="drop-shadow-lg bg-white absolute top-20 flex flex-col items-start rounded-lg p-2 w-full">
            {services.map((service)=>(
              <div className="flex w-full justify-between  p-4 hover:bg-slate-100 cursor-pointer rounded-r-lg border-l-transparent hover:border-l-orange-600 border-l-4" key={service.id}>
                {service.icon}
                <button type="button" className="font-bold w-full" onClick={() => handleSelect(service.service)}>
                   {service.service}
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default WaterService