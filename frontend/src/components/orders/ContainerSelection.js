import React, { useEffect, useState } from 'react'
import { Navigate, useLocation } from 'react-router-dom';

import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import { getAllContainers } from '../../services/ContainerService';

let updatedSlimQuantity = 0;
let updatedRoundQuantity = 0;
let updatedHalfSlimQuantity = 0;

function ContainerSelection() {

    // From the database
    const [dbContainers, setContainers] = useState([
        { refill_price: 0 },
        { refill_price: 0 },
        { refill_price: 0 }
    ])

    // Navigation and passing of data
    const [isProceed, setIsProceed] = useState(false)

    const [slimQuantity, setSlimQuantity] = useState(updatedSlimQuantity);
    const [roundQuantity, setRoundQuantity] = useState(updatedRoundQuantity);
    const [halfSlimQuantity, setHalfSlimQuantity] = useState(updatedHalfSlimQuantity);

    const [totalPriceAmount, setTotalPriceAmount] = useState(0);
    
    const slimPriceAmount = updatedSlimQuantity * dbContainers[0].refill_price
    const roundPriceAmount = updatedRoundQuantity * dbContainers[1].refill_price
    const halfSlimPriceAmount = updatedHalfSlimQuantity * dbContainers[2].refill_price
    
    useEffect(() => {
        getAllContainers()
        .then((dbContainers) => {
            setContainers(dbContainers)
        })
        .catch((error) => {
            console.log(error)
        })
        setTotalPriceAmount(slimPriceAmount + roundPriceAmount + halfSlimPriceAmount)
    },[slimPriceAmount, roundPriceAmount, halfSlimPriceAmount])
        
    // useLocationPassingData
    const { state } = useLocation();
    const { orderData } = state || {};

    const handleDecrementQuantity = (id) => {
        if (id === 1) {
            if (updatedSlimQuantity > 0) {
                setSlimQuantity(slimQuantity - 1);
                updatedSlimQuantity = updatedSlimQuantity - 1
            }
        }
        else if (id === 2) {
            if (updatedRoundQuantity > 0) {
                setRoundQuantity(roundQuantity - 1);
                updatedRoundQuantity = updatedRoundQuantity - 1
            }
        }

        else if (id === 3) {
            if (updatedHalfSlimQuantity > 0) {
                setHalfSlimQuantity(halfSlimQuantity - 1);
                updatedHalfSlimQuantity = updatedHalfSlimQuantity - 1
            }
        }
    }

    const handleIncrementQuantity = (id) => {
        if (id === 1) {
            setSlimQuantity((previousState) => {
                return previousState + 1;
              });
              updatedSlimQuantity = updatedSlimQuantity + 1
        }
        else if (id === 2) {
            setRoundQuantity(roundQuantity + 1);
            updatedRoundQuantity = updatedRoundQuantity + 1
        }
        else if (id === 3) {
            setHalfSlimQuantity(halfSlimQuantity + 1);
            updatedHalfSlimQuantity = updatedHalfSlimQuantity + 1
        }
    }

    const additionalData = [
        {
            id: 1,
            containerPicture: <img className="h-15 mr-10" src={require("./img/slim.webp")} alt="home_button" />,
            quantity: slimQuantity,
            priceAmount: slimPriceAmount
        },
        {
            id: 2,
            containerPicture: <img className="h-15 mr-10" src={require("./img/round.webp")} alt="home_button" />,
            quantity: roundQuantity,
            priceAmount: roundPriceAmount
        },
        {
            id: 3,
            containerPicture: <img className="h-15 mr-10" src={require("./img/half_slim.webp")} alt="home_button" />,
            quantity: halfSlimQuantity,
            priceAmount: halfSlimPriceAmount
        }
    ]

    const handleNext = () => {
        if (dbContainers){
            orderData[0].totalPriceAmount = totalPriceAmount
            orderData[0].container_items = [];
            for (let i = 0; i <= dbContainers.length - 1; i++) {
                orderData[0].container_items[i] = { 
                    container_id: dbContainers[i].id,
                    name: dbContainers[i].name,
                    unit_price: dbContainers[i].refill_price,
                    quantity: additionalData[i].quantity
                }
              }
            setIsProceed((prev) => !prev)
        }
    }

    return (
        <div className="flex flex-col gap-2 items-center">
            <div className="py-2 font-semibold text-center text-2xl mt-20 mb-10">What is your available container and how many?</div>
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
                                    Capacity (Gal.)
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Price (₱)
                                </th>
                                <th scope="col" className="px-6 py-3 text-center">
                                    Quantity
                                </th>
                                <th scope="col" className="px-6 py-3 flex justify-center">
                                    Amount (₱)
                                </th>
                            </tr>
                        </thead>
                    <tbody>
                        {
                            dbContainers[0].refill_price !== 0 ? (
                                dbContainers.map((container)=>{
                                    return  (
                                    <tr key={container.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 ">
                                        <td className="px-6 py-4 flex justify-center">
                                            {additionalData[container.id - 1].containerPicture}
                                        </td>
                                        <td className="text-lg px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {container.name}
                                        </td>
                                        <td className="text-lg px-6 py-4 dark:text-white">
                                            {container.capacity}
                                        </td>
                                        <td className="text-lg px-6 py-4 dark:text-white">
                                            {container.refill_price}
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
                                                    <span className='text-lg text-black'>{additionalData[container.id - 1].quantity}</span>
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
                                            {parseInt(additionalData[container.id - 1].priceAmount).toFixed(2)}
                                        </td>
                                    </tr>
                                    )
                                })
                            ) : (
                                console.log("wala pang laman", dbContainers)
                            )
                        }
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 px-6 h-24">
                            <td className="text-lg px-6 py-4"></td>
                            <td className="text-lg px-6 py-4"></td>
                            <td className="text-lg px-6 py-4"></td>
                            <td className="text-lg px-6 py-4"></td>
                            <td className="text-lg px-6 py-4 text-white">Total Amount</td>
                            <td className="text-lg px-6 py-10 dark:text-white flex justify-center items-center grow">₱{totalPriceAmount.toFixed(2)}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div className="flex justify-around gap-2">
                    <button className="py-2 bg-slate-600 text-white font-semibold text-xl px-5 mb-60" onClick={handleNext}>Next</button>
                </div>

                { isProceed && (
                    <Navigate to="/order-schedule" state={{ orderData }} />
                ) }
        </div>
    )
}

export default ContainerSelection