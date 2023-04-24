import React, { useState } from 'react'
import { Navigate, useLocation } from 'react-router-dom';

import OrderSendToDB from './OrderSendToDB';

function OrderSummary() {

    // navigation and passing of data
    const [isProceed, setIsProceed] = useState(false)
    
    // acquire data from the previous page
    const { state } = useLocation();
    const { orderData } = state || {};

    const data = JSON.parse(localStorage.getItem('data'))
    // console.log("Ito ang data: ", data)

    const userAddress = data.delivery_address;

    // console.log(userAddress)
    const { address, baranggay, city, tin, description} = userAddress
    const { first_name, last_name } = data

    // Will be replace with user and address table database
    const orderDetails = 
        {
            customerId: 1,
            customerName: `${first_name} ${last_name}`,
            // customerAddress: "234 100flr Mapagmahal St., Cupid Subd., Brgy 145, Caloocan City",
            customerAddress: `${address}, ${baranggay}, ${city}, ${tin}`,
            addressDescription: description
        }
    
    const handleOrderProceed = () => {
        <OrderSendToDB orderData={ orderData } />
        setIsProceed((prev) => !prev)
    }


  return (
    <div className="w-[100vw] flex justify-center p-10">
        <div className="container w-[60vw] bg-gray-600 text-white rounded-lg p-2 px-16 pb-4 text-normal tracking-wide">
            <h2 className="font-bold text-2xl py-5 text-center">Order Summary</h2>
            <div className="flex justify-center">
                <div className="flex-col">
                {
                    orderData === undefined ? (
                        <div className="text-center py-6 rounded bg-slate-700 text-white my-6">No Data Fetched</div>
                    ) : (

                        <div>
                        <div className="py-2"><span className="font-bold">Customer Name: </span>{orderDetails.customerName}</div>
                        <div className="py-2"><span className="font-bold">Customer Address: </span>{orderDetails.customerAddress}</div>
                        <div className="py-2"><span className="font-bold">Address Description: </span>{orderDetails.addressDescription}</div>
                        <div className="flex py-2 gap-2">
                            <span className="font-bold">Order Type: </span>{orderData[0].orderType}
                            <span className="font-bold">Expected Date: </span>{orderData[0].delivery_date.toString()}
                            <span className="font-bold">Expected Time: {orderData[0].delivery_time}</span>
                        </div>
                            <div className="py-2">
                                <span className="font-bold">Order Description: </span>
                                <div className="pl-5">
                                        {
                                            orderData[0].container_items.map((order) => {
                                                return (
                                                    
                                                <div className="py-2 flex gap-2" key={order.container_id}>
                                                    <span className="font-bold">{order.name}</span><span>x{order.quantity}</span><span>₱{order.unit_price * order.quantity}</span>
                                                </div>
                                                    )
                                                })
                                        }
                                </div>
                            </div>
                            <div className="py-2"><span className="font-bold">Mode of Payment: </span>{orderData[0].mode_of_payment.label}</div>
                            <div className="py-2"><span className="font-bold">Total Amount: </span>₱{orderData[0].totalPriceAmount}</div>
                            </div>
                        ) }
        
                        <div className="flex gap-2">
                            <button className="py-5 grow px-10 bg-green-600 text-white font-semibold text-sm">Update Order</button>
                            <button className="py-5 grow px-10 bg-orange-600 text-white font-semibold text-sm" onClick={handleOrderProceed}>Proceed Order</button>
                            <button className="py-5 grow px-10 bg-gray-700 text-white font-semibold text-sm">Cancel</button>
                        </div>
                    </div>              
                </div>
            </div>

        { isProceed && (
                    <Navigate to="/" />
                ) }
        </div>
    )
}

export default OrderSummary