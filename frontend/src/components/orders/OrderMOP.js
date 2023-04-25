import React, { useState } from 'react'
import { Navigate } from 'react-router-dom';

import Select from 'react-tailwindcss-select';


let modeOfPayment = localStorage.getItem("orderMOP")

function OrderMOP() {


// navigation and passing of data
const [isProceed, setIsProceed] = useState(false)

const options = [
    {value: "cash_on_delivery", label: "Cash On Delivery"},
    {value: "gcash", label: "Gcash"}
];

// MOP value
const [MOP, setMOP] = useState({
    value: "cash_on_delivery",
    label: "Cash On Delivery"
});

const handleChange = (value) => {
    modeOfPayment = value.value
    setMOP(value);
    modeOfPayment = value.value
    console.log("value:", modeOfPayment);
};

const handleNext = () => {
    console.log("MOP: ", MOP)
    localStorage.setItem("orderMOP", modeOfPayment)

    setIsProceed((prev) => !prev)
}

  return (
    <div className="w-[100vw] h-full flex bg-slate-100 justify-center items-start pt-20">
        <div className="flex-col">
            <div className="py-7 font-semibold text-center text-2xl flex-col">
                <div>How do you want to pay?</div>
                <div className="text-sm py-2 text-gray-600">Please select your mode of payment</div>
            </div>
            <div className="flex-col items-center gap-3">
                    <Select
                    value={MOP}
                        onChange={handleChange}
                    options={options}
                />
            </div>
            {modeOfPayment === "gcash" ? (
                <div className="flex justify-center mt-5">
                    <div className="flex-col">
                        <div className="py-2 text-sm">Please scan the QR code to pay</div>
                        {/* <img className="h-[400px]" src={require("./img/gcash.webp")} alt="gcash payment qr code" /> */}
                    </div>
                </div>
            ) : (
                <div></div>
            )}
            <div className="flex justify-around">
                <button className="py-2 bg-slate-600 text-white font-semibold text-xl px-5 mt-5 mb-60" onClick={handleNext}>Proceed</button>
            </div>
        </div>

        { isProceed && (
                    <Navigate to="/order-summary" />
                ) }
    </div>
  )
}

export default OrderMOP