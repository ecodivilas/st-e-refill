// import React from 'react'

// function Invoice({ order }) {
//     console.log("Ang laman nang order", order)
//   return (
//     <div>{order.user_id}</div>
//   )
// }

// export default Invoice


import React, { useEffect, useState } from 'react'

import { getOneOrderItems } from '../../../services/OrderService'

const Invoice = ({ order }) => {
    
    const [orderDetails, setOrderDetails] = useState([order])
    const [orderItemsDetails, setOrderItemsDetails] = useState([])
 
    const [showModal, setShowModal] = useState(false)

    const toggleModal = (e) => {
        console.log(order)
        setShowModal(!showModal)
    }

    // getOneOrderItems(order.user_id).then((order_items) => {
    //     setOrderItemsDetails(order_items)
    // })
    // .catch((error) => {
    //     console.log(error)
    // })

    useEffect(() => {
        getOneOrderItems(order.user_id)
        .then((order_items) => {
            setOrderItemsDetails(order_items)
        })
        .catch((error) => {
            console.log(error)
        })
        })

    return (
        <div>
            <span className="!hover:text-red-600">
                <button
                    className="m-0 p-0 !hover:text-red-600"
                    onClick={toggleModal}
                >
                    <svg
                        width="16px"
                        height="16px"
                        viewBox="0 0 20 20" 
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                        fill="#5C5F62"
                        d="M16.707 6.293l3 3a.998.998 0 010 1.414l-3 3a.997.997 0 01-1.631-.324 1 1 0 01.217-1.09L16.586 11H12a1 1 0 110-2h4.586l-1.293-1.293a1 1 0 111.414-1.414zM3.293 6.293a1 1 0 111.414 1.414L3.414 9H8a1 1 0 010 2H3.414l1.293 1.293a1.003 1.003 0 010 1.414 1 1 0 01-1.414 0l-3-3a.998.998 0 010-1.414l3-3z"
                        />
                        <path
                        fill="#5C5F62"
                        d="M1 1.5A1.5 1.5 0 012.5 0h15A1.5 1.5 0 0119 1.5V6l-2-2V2H3v2L1 6V1.5zM17 18v-2l2-2v4.5a1.5 1.5 0 01-1.5 1.5h-15A1.5 1.5 0 011 18.5V14l2 2v2h14z"
                        />
                    </svg>
                </button>
            </span>

            {showModal && (
                <div className="fixed z-10 inset-0 overflow-y-auto backdrop-blur-sm backdrop-brightness-50 backdrop-contrast-50">
                    {/* <div className="flex items-center justify-center min-h-screen"> */}
                    <div className="flex items-center justify-center min-h-screen">
                        <div className="bg-blue-50 dark:bg-slate-900 rounded-lg text-black">
                            <div className="p-4">
                                <h2 className="text-lg font-bold mb-4 text-white">
                                    Order Information
                                </h2>
                                {orderDetails.map((field) => {
                                        return (
                                    <>
                                        <h2 className="text-white">Order Id: {field.order_id}</h2>
                                        <h2 className="text-white">Username: {field.username}</h2>
                                        <h2 className="text-white">Order Date: {field.order_date}</h2>
                                        <h2 className="text-white">Delivery Date: {field.delivery_date}</h2>
                                        <h2 className="text-white">Delivery Time: {field.delivery_time}</h2>
                                        <h2 className="text-white">Total Price: {field.total_price}</h2>
                                        <h2 className="text-white">Mode of Payment: {field.mode_of_payment}</h2>
                                        <h2 className="text-white">Payment: {field.is_paid}</h2>
                                        <h2 className="text-white">Status: {field.status}</h2>
                                    </>
                                )
                            })}
                                {orderItemsDetails.map((order_item)=>{
                                    return (
                               <>
                                         {( Number(orderDetails[0].order_id) === Number(order_item.order_id) ) ?
                                        <>
                                            <p className="text-white">{ order_item.name } { order_item.capacity }</p>
                                            <p className="text-white">Quantity: { order_item.quantity }</p>
                                        </>
                                        :
                                        <><div></div></>
                                    }
                               </>
                                
                                )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Invoice
