import React from 'react'

function ProductsNServices() {
    const products = [
        {
            id: 1,
            name: 'Purified Water (Gallon)',
        },
        {
            id: 2,
            name: 'Purified Water (500ml)',
        },
        {
            id: 3,
            name: 'Mineral Water (Gallon)',
        },
        {
            id: 4,
            name: 'Alkaline Water (Gallon)',
        },
        {
            id: 5,
            name: 'Distilled Water (Gallon)',
        },
        {
            id: 6,
            name: 'Ionized Water (Gallon)',
        },
    ]
    return (
        // <div className="flex items-center justify-center bg-green-700 text-white h-[100vh] font-bold text-3xl pb-32">Products And Services</div>
        <div className="bg-gray-100 h-[100vh] pt-16">
            <div className="container mx-auto py-10">
                <div className="grid grid-cols-2 gap-5">
                    <div>
                        <h2 className="text-2xl font-bold mb-3">Products</h2>

                        <ul>
                            {products.map((product) => {
                                return (
                                    <li className="mb-2" key={product.id}>
                                        {product.name}
                                    </li>
                                )
                            })}
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
