import React, { useState, useEffect } from 'react'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'

import { useLocation } from 'react-router-dom';
import { Navigate } from "react-router-dom";

let updatedSlimQuantity = 0;
let updatedRoundQuantity = 0;
let updatedHalfSlimQuantity = 0;

function ContainerSelection() {

    // navigation and passing of data
    const [isProceed, setIsProceed] = useState(false)

    const [slimQuantity, setSlimQuantity] = useState(0);
    const [roundQuantity, setRoundQuantity] = useState(0);
    const [halfSlimQuantity, setHalfSlimQuantity] = useState(0);

    const [slimPriceAmount, setSlimPriceAmount] = useState(0);
    const [roundPriceAmount, setRoundPriceAmount] = useState(0);
    const [halfSlimPriceAmount, setHalfSlimPriceAmount] = useState(0);

    const [totalPriceAmount, setTotalPriceAmount] = useState(0);

    useEffect(() => {
        setTotalPriceAmount(slimPriceAmount + roundPriceAmount + halfSlimPriceAmount)
    },[slimPriceAmount, roundPriceAmount, halfSlimPriceAmount])

    // useLocationPassingData
    const { state } = useLocation();
    const { orderData } = state || {};

    console.log("Fetched from order type selection: ", orderData)

    const handleDecrementQuantity = (id) => {
        if (id === 1) {
            if (updatedSlimQuantity > 0) {
                setSlimQuantity(slimQuantity - 1);
                updatedSlimQuantity = updatedSlimQuantity - 1
                setSlimPriceAmount(updatedSlimQuantity * 25)
            }
        }
        else if (id === 2) {
            if (updatedRoundQuantity > 0) {
                setRoundQuantity(roundQuantity - 1);
                updatedRoundQuantity = updatedRoundQuantity - 1
                setRoundPriceAmount(updatedRoundQuantity * 25)
            }
        }

        else if (id === 3) {
            if (updatedHalfSlimQuantity > 0) {
                setHalfSlimQuantity(halfSlimQuantity - 1);
                updatedHalfSlimQuantity = updatedHalfSlimQuantity - 1
                setHalfSlimPriceAmount(updatedHalfSlimQuantity * 15)
            }
        }
    }

    const handleIncrementQuantity = (id) => {
        if (id === 1) {
            setSlimQuantity(slimQuantity + 1);
            updatedSlimQuantity = updatedSlimQuantity + 1
            setSlimPriceAmount(updatedSlimQuantity * 25)
        }
        else if (id === 2) {
            setRoundQuantity(roundQuantity + 1);
            updatedRoundQuantity = updatedRoundQuantity + 1
            setRoundPriceAmount(updatedRoundQuantity * 25)
        }
        else if (id === 3) {
            setHalfSlimQuantity(halfSlimQuantity + 1);
            updatedHalfSlimQuantity = updatedHalfSlimQuantity + 1
            setHalfSlimPriceAmount(updatedHalfSlimQuantity * 15)
        }
    }

    const containers = [
        {
            id: 1,
            containerPicture: <img className="h-15 mr-10" src={require("./img/slim.webp")} alt="home_button" />,
            containerName: "Slim 5 gallons standard size",
            pricePerContainer: 25,
            quantity: slimQuantity,
            priceAmount: slimPriceAmount
        },
        {
            id: 2,
            containerPicture: <img className="h-15 mr-10" src={require("./img/round.webp")} alt="home_button" />,
            containerName: "Round 5 gallons standard size",
            pricePerContainer: 25,
            quantity: roundQuantity,
            priceAmount: roundPriceAmount
        },
        {
            id: 3,
            containerPicture: <img className="h-15 mr-10" src={require("./img/half_slim.webp")} alt="home_button" />,
            containerName: "Half slim 2.5 gallons",
            pricePerContainer: 15,
            quantity: halfSlimQuantity,
            priceAmount: halfSlimPriceAmount

        }
    ]

    return (
        <div className="flex flex-col gap-2 items-center">
            <div className="py-2 font-semibold text-center text-2xl">What is your container and how many?</div>
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-[80vw]">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase text-left bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Container Name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Price
                                </th>
                                <th scope="col" className="px-6 py-3 text-center">
                                    Quantity
                                </th>
                                <th scope="col" className="px-6 py-3 flex justify-center">
                                    Amount
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            containers.map((container)=>{
                                return  (
                                <tr key={container.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 ">
                                    <td className="px-6 py-4 flex justify-center">
                                        {container.containerPicture}
                                    </td>
                                    <td className="text-lg px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {container.containerName}
                                    </td>
                                    <td className="text-lg px-6 py-4 dark:text-white">
                                        ₱{container.pricePerContainer}
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex flex-row items-center text-right">
                                            <button
                                            className="bg-gray-600 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-l"
                                            onClick={() => handleDecrementQuantity(container.id)}
                                            >
                                                <AiOutlineMinus className="h-6 text-white"/>
                                            </button>
                                            <div className="px-4 bg-white py-1">
                                                <span className='text-lg text-black'>{container.quantity}</span>
                                            </div>
                                            <button
                                            className="bg-gray-600 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-r"
                                            onClick={() => handleIncrementQuantity(container.id)}
                                            >
                                                <AiOutlinePlus className="h-6 text-white"/>
                                            </button>
                                        </div>
                                    </td>
                                    <td className="text-lg px-6 py-4 dark:text-white text-center">
                                        ₱{container.priceAmount}
                                    </td>
                                </tr>
                                )
                            })
                        }
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 px-6 h-24">
                            <td className="text-lg px-6 py-4"></td>
                            <td className="text-lg px-6 py-4"></td>
                            <td className="text-lg px-6 py-4"></td>
                            <td className="text-lg px-6 py-4 text-white">Total Amount</td>
                            <td className="text-lg px-6 py-10 dark:text-white flex justify-center items-center grow">₱{totalPriceAmount}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <button className="py-2 bg-slate-600 text-white font-semibold text-xl px-5 mb-60" onClick={() => setIsProceed((prev) => !prev)}>Proceed</button>

                { isProceed && (
                    <Navigate to="/order-schedule" state={{ orderData }} />
                ) }
        </div>
    )
}

export default ContainerSelection