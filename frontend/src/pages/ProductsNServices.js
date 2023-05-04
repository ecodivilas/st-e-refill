import React from 'react'

function ProductsNServices() {
    return (
        // <div className="flex items-center justify-center bg-green-700 text-white h-[100vh] font-bold text-3xl pb-32">Products And Services</div>
        <div className="bg-gray-100 h-[100vh] pt-16">
            <div className="container mx-auto py-10">
                <div className="grid grid-cols-2 gap-5">
                    <div>
                        <h2 className="text-2xl font-bold mb-3">Products</h2>

                        <ul>
                            <li className="mb-2">Purified Water (Gallon)</li>
                            <li className="mb-2">Purified Water (500ml)</li>
                            <li className="mb-2">Mineral Water (Gallon)</li>
                            <li className="mb-2">Alkaline Water (Gallon)</li>
                            <li className="mb-2">Distilled Water (Gallon)</li>
                            <li className="mb-2">Ionized Water (Gallon)</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold mb-3">Services</h2>

                        <ul>
                            <li className="mb-2">Water Refilling</li>
                            <li className="mb-2">Water Delivery</li>
                            <li className="mb-2">Water Quality Testing</li>
                            <li className="mb-2">
                                Water Equipment Sales and Installation
                            </li>
                            <li className="mb-2">Water Cooler Rental</li>
                            <li className="mb-2">
                                Water Dispenser Cleaning and Maintenance
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductsNServices
