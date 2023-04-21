import React, { useState } from 'react'
import { Navigate, useLocation } from 'react-router-dom';

import Select from 'react-tailwindcss-select';


let modeOfPayment = ""

function OrderMOP() {


// navigation and passing of data
const [isProceed, setIsProceed] = useState(false)

// useLocationPassingData
const { state } = useLocation();
const { orderData } = state || {};

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
    setMOP(value);
    modeOfPayment = value.value
    console.log("value:", modeOfPayment);
};

const handleNext = () => {
    console.log("MOP: ", MOP)
    orderData[0].mode_of_payment = MOP
    console.log("Updated Data: ", orderData)
    setIsProceed((prev) => !prev)
}

console.log("Dito na ako sa MOP blee: ", orderData)
  return (
    <div className="w-[100vw] h-[100vh] flex bg-slate-100 justify-center items-start pt-20">
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
                    <img className="h-[400px]" src={require("./img/gcash.webp")} alt="gcash payment qr code" />
                </div>
            </div>
            ) : (
                <div></div>
            )}
            <div className="flex justify-around">
                <button className="py-2 bg-slate-600 text-white font-semibold text-xl px-5 mt-20 mb-60" onClick={handleNext}>Proceed</button>
            </div>
        </div>

        { isProceed && (
                    <Navigate to="/order-summary" state={{ orderData }} />
                ) }
    </div>
  )
}

export default OrderMOP