import React, { useState } from 'react'

import Select from 'react-tailwindcss-select';

import { useLocation } from 'react-router-dom';
import { Navigate } from "react-router-dom";

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

const [MOP, setMOP] = useState(null);

const handleChange = (value) => {
    setMOP(value);
    modeOfPayment = value.value
    console.log("value:", modeOfPayment);
};

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
            <button className="py-2 bg-slate-600 text-white font-semibold text-xl px-5 mt-20 mb-60" onClick={() => setIsProceed((prev) => !prev)}>Proceed</button>
        </div>

        { isProceed && (
                    <Navigate to="/order-summary" state={{ orderData }} />
                ) }
    </div>
  )
}

export default OrderMOP