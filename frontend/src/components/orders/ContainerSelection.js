import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'

import { AiOutlinePlus, AiOutlineMinus } from '../../assets/icons/icons'
import { getAllContainers } from '../../services/ContainerService'

// Local Storage Getter
const getLSData = (item) => localStorage.getItem(item)

let updatedSlimQuantity = getLSData('updatedSlimQuantity')
    ? Number(getLSData('updatedSlimQuantity'))
    : 0

let updatedRoundQuantity = getLSData('updatedRoundQuantity')
    ? Number(getLSData('updatedRoundQuantity'))
    : 0

let updatedHalfSlimQuantity = getLSData('updatedHalfSlimQuantity')
    ? Number(getLSData('updatedHalfSlimQuantity'))
    : 0

function ContainerSelection() {
    // Navigation and passing of data
    const [isProceed, setIsProceed] = useState(false)

    const [slimQuantity, setSlimQuantity] = useState(updatedSlimQuantity)
    const [roundQuantity, setRoundQuantity] = useState(updatedRoundQuantity)
    const [halfSlimQuantity, setHalfSlimQuantity] = useState(
        updatedHalfSlimQuantity
    )

    const [totalPriceAmount, setTotalPriceAmount] = useState(0)

    const [dbContainers, setContainers] = useState([
        { refill_price: 0 },
        { refill_price: 0 },
        { refill_price: 0 },
    ])

    const slimPriceAmount = slimQuantity * dbContainers[0].refill_price
    const roundPriceAmount = roundQuantity * dbContainers[1].refill_price
    const halfSlimPriceAmount = halfSlimQuantity * dbContainers[2].refill_price

    useEffect(() => {
        getAllContainers()
            .then((dbContainers) => {
                setContainers(dbContainers)
            })
            .catch((error) => {
                console.log(error)
            })

        // Cleanup on unmount
        return () =>
            setContainers([
                { refill_price: 0 },
                { refill_price: 0 },
                { refill_price: 0 },
            ])
    }, [])

    useEffect(() => {
        setTotalPriceAmount(
            slimPriceAmount + roundPriceAmount + halfSlimPriceAmount
        )

        return () => {
            setTotalPriceAmount(0)
        }
    }, [slimPriceAmount, roundPriceAmount, halfSlimPriceAmount])

    const quantityStates = [
        {
            id: 1,
            quantity: slimQuantity,
            uiStateSetter: setSlimQuantity,
            localName: 'updatedSlimQuantity',
        },
        {
            id: 2,
            quantity: roundQuantity,
            uiStateSetter: setRoundQuantity,
            localName: 'updatedRoundQuantity',
        },
        {
            id: 3,
            quantity: halfSlimQuantity,
            uiStateSetter: setHalfSlimQuantity,
            localName: 'updatedHalfSlimQuantity',
        },
    ]

    const handleDecrementQuantity = (id) => {
        const result = quantityStates.filter((state) => state.id === id)
        const data = result[0]
        if (data.quantity > 0) {
            data.quantity--
            data.uiStateSetter(data.quantity)
        }
    }

    const handleIncrementQuantity = (id) => {
        const result = quantityStates.filter((state) => state.id === id)
        const data = result[0]
        data.quantity++
        data.uiStateSetter(data.quantity)
    }

    const handleNext = () => {
        localStorage.setItem(
            'totalPriceAmount',
            totalPriceAmount.toFixed(2).toString()
        )
        // Map every quantity and set to local storage
        quantityStates.map((state) => {
            return (
                localStorage.setItem(
                    state.localName,
                    state.quantity.toString()
                ),
                state.uiStateSetter(0)
            )
        })

        setIsProceed((prev) => !prev)
    }

    // Adapter data before render()
    const uiData = [
        {
            id: 1,
            containerPicture: (
                <img
                    className="h-20 mx-10"
                    src={require('../../assets/img/containers/slim.webp')}
                    alt="home_button"
                />
            ),
            quantity: slimQuantity,
            priceAmount: slimPriceAmount,
        },
        {
            id: 2,
            containerPicture: (
                <img
                    className="h-20 mx-10"
                    src={require('../../assets/img/containers/round.webp')}
                    alt="home_button"
                />
            ),
            quantity: roundQuantity,
            priceAmount: roundPriceAmount,
        },
        {
            id: 3,
            containerPicture: (
                <img
                    className="h-14 mx-10 my-3"
                    src={require('../../assets/img/containers/half_slim.webp')}
                    alt="home_button"
                />
            ),
            quantity: halfSlimQuantity,
            priceAmount: halfSlimPriceAmount,
        },
    ]

    return (
        <div className="flex flex-col gap-2 items-center">
            <div className="py-2 font-semibold text-center text-2xl mt-20 mb-10">
                What is your available container and how many?
            </div>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-[80vw]">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase text-left bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3"></th>
                            <th scope="col" className="px-6 py-3">
                                Description
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
                            <th
                                scope="col"
                                className="px-6 py-3 flex justify-center"
                            >
                                Amount (₱)
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {dbContainers[0].refill_price !== 0 ? (
                            dbContainers.map((container) => {
                                return (
                                    <tr
                                        key={container.container_id}
                                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                                    >
                                        <td className="px-6 py-4 flex justify-center">
                                            {
                                                uiData[
                                                    container.container_id - 1
                                                ].containerPicture
                                            }
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
                                                    onClick={() =>
                                                        handleDecrementQuantity(
                                                            container.container_id
                                                        )
                                                    }
                                                >
                                                    <AiOutlineMinus className="h-6 text-white" />
                                                </button>
                                                <div className="px-4 bg-white py-1">
                                                    <span className="text-lg text-black">
                                                        {
                                                            uiData[
                                                                container.container_id -
                                                                    1
                                                            ].quantity
                                                        }
                                                    </span>
                                                </div>
                                                <button
                                                    className="bg-gray-600 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-r"
                                                    onClick={() =>
                                                        handleIncrementQuantity(
                                                            container.container_id
                                                        )
                                                    }
                                                >
                                                    <AiOutlinePlus className="h-6 text-white" />
                                                </button>
                                            </div>
                                        </td>
                                        <td className="text-lg px-6 py-4 dark:text-white text-center">
                                            {parseInt(
                                                uiData[
                                                    container.container_id - 1
                                                ].priceAmount
                                            ).toFixed(2)}
                                        </td>
                                    </tr>
                                )
                            })
                        ) : (
                            <></>
                        )}
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 px-6 h-24">
                            <td className="text-lg px-6 py-4"></td>
                            <td className="text-lg px-6 py-4"></td>
                            <td className="text-lg px-6 py-4"></td>
                            <td className="text-lg px-6 py-4"></td>
                            <td className="text-lg px-6 py-4 text-white">
                                Total Amount
                            </td>
                            <td className="text-lg px-6 py-10 dark:text-white flex justify-center items-center grow">
                                ₱{totalPriceAmount.toFixed(2)}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="flex justify-around gap-2">
                <button
                    className="py-2 bg-slate-600 text-white font-semibold text-xl px-5 mb-60"
                    onClick={handleNext}
                >
                    Next
                </button>
            </div>

            {isProceed && (
                <div>
                    <Navigate to="/order-schedule" />
                </div>
            )}
        </div>
    )
}

export default ContainerSelection
