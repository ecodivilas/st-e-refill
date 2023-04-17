import React, { useState } from 'react'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'

function ContainerSelection() {
    const [initialNumber, setInitialNumber] = useState(0);

    const handleDecrementValue = () => {
        if ( initialNumber !== 0 ) {
            setInitialNumber(initialNumber - 1);
        }
    };

    const handleIncrementValue = () => {
        setInitialNumber(initialNumber + 1);
    };

    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setInitialNumber((prev) => {
    //         return { ...prev, [name]: value };
    //     })
    //     console.log(name, value)
    // };

    const containers = [
        {
            id: 1,
            containerPicture: <img className="h-15 mr-10" src={require("../assets/img/slim.webp")} alt="home_button" />,
            containerName: "Slim 5 gallons standard size",
            pricePerContainer: 25,
        },
        {
            id: 2,
            containerPicture: <img className="h-15 mr-10" src={require("../assets/img/round.webp")} alt="home_button" />,
            containerName: "Round 5 gallons standard size",
            pricePerContainer: 25,
        },
        {
            id: 3,
            containerPicture: <img className="h-15 mr-10" src={require("../assets/img/half_slim.webp")} alt="home_button" />,
            containerName: "Half slim 2.5 gallons",
            pricePerContainer: 15,
        }
    ]

    return (
        <div className="flex flex-col gap-4 items-center">
            <div>What is your order?</div>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg mb-60 w-[80vw]">
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
                                Total Amount
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
                                        onClick={handleDecrementValue}
                                        >
                                            <AiOutlineMinus className="h-6 text-white"/>
                                        </button>
                                        <div className="px-4 bg-white py-1">
                                            {/* <input className="text-lg text-black" type="number" name="quantity" onChange={handleChange} value={initialNumber}/> */}
                                            <span className='text-lg text-black'>{initialNumber}</span>
                                        </div>
                                        <button
                                        className="bg-gray-600 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-r"
                                        onClick={handleIncrementValue}
                                        >
                                            <AiOutlinePlus className="h-6 text-white"/>
                                        </button>
                                    </div>
                                </td>
                                <td className="text-lg px-6 py-4 dark:text-white text-center">
                                    ₱50
                                </td>
                            </tr>
                            )
                        })
                    }
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 px-6 h-24">
                        <td className="text-lg px-6 py-4"></td>
                        <td className="text-lg px-6 py-4"></td>
                        <td className="text-lg px-6 py-4"></td>
                        <td className="text-lg px-6 py-4"></td>
                        <td className="text-lg px-6 py-10 dark:text-white flex justify-center items-center grow">₱100</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ContainerSelection