import React, { useState, useMemo } from 'react'
import { Navigate} from 'react-router-dom';

import { createPendingOrder } from '../../services/OrderService'
import { getAllContainers } from '../../services/ContainerService'

let containerDetails

function OrderSummary() {

    // navigation and passing of data
    const [isProceed, setIsProceed] = useState(false)
    const [containers, setContainers] = useState([])
    
    const data = JSON.parse(localStorage.getItem('data'))
    const userAddress = data.delivery_address;
    
    useMemo(() => {
        getAllContainers()
        .then((res) => {
            containerDetails = res
            containerDetails[0].quantity = Number(localStorage.getItem('updatedSlimQuantity'))
            containerDetails[1].quantity = Number(localStorage.getItem('updatedRoundQuantity'))
            containerDetails[2].quantity = Number(localStorage.getItem('updatedHalfSlimQuantity'))
            setContainers(res)
        })
        .catch((error) => {
            console.log(error)
        })}, [])

    const { address, baranggay, city, tin, description} = userAddress
    const { first_name, last_name } = data

    const orderDetails = 
        {
            customerId: 1,
            customerName: `${first_name} ${last_name}`,
            customerAddress: `${address}, ${baranggay}, ${city}, ${tin}`,
            addressDescription: description
        }
    
    const handleOrderProceed = () => {

        // const x = {
        //     "customer_id": data.id,
        //     "order_date": localStorage.getItem("dateValue"),
        //     "delivery_date": localStorage.getItem("dateValue"),
        //     "delivery_time": localStorage.getItem("timeValue"),
        //     "mode_of_payment": localStorage.getItem("orderMOP"),
        //     "status": "queue",
        //     "is_paid": false,
        //    }

        // {
        //     "order": {
        //         "customer_id": 1,
        //         "order_date": "2023-04-20",
        //         "delivery_date": "2023-04-20",
        //         "delivery_time": "01:02",
        //         "mode_of_payment": "cash_on_delivery",
        //         "status": "queue",
        //         "is_paid": false,
        //         "order_items": [
        //             {
        //                 "container_id": 1,
        //                 "unit_price": 25,
        //                 "quantity": 2
        //             },
        //             {
        //                 "container_id": 2,
        //                 "unit_price": 25,
        //                 "quantity": 1
        //             },
        //             {
        //                 "container_id": 3,
        //                 "unit_price": 15,
        //                 "quantity": 1
        //             }
        //                 ]
        //     }
        // }

        //    console.log(x)

        ///////////////

        
        createPendingOrder(
            {
                "customer_id": data.id,
                "order_date": localStorage.getItem("dateValue"),
                "delivery_date": localStorage.getItem("dateValue"),
                "delivery_time": localStorage.getItem("timeValue"),
                "mode_of_payment": localStorage.getItem("orderMOP"),
                "status": "queue",
                "is_paid": false,
                "order_items": [
                    {
                        "container_id": containers[0].id,
                        "unit_price": containers[0].refill_price,
                        "quantity": Number(localStorage.getItem('updatedSlimQuantity'))
                    },
                    {
                        "container_id": containers[1].id,
                        "unit_price": containers[1].refill_price,
                        "quantity": Number(localStorage.getItem('updatedRoundQuantity'))
                    },
                    {
                        "container_id": containers[2].id,
                        "unit_price": containers[2].refill_price,
                        "quantity": Number(localStorage.getItem('updatedHalfSlimQuantity'))
                    }
                        ]
               }
        ).then((res)=>{
            alert("Order Successfully Appended!")
            return res
        }).catch((error) => console.log(error))

        // alert("Order Failed!")
        localStorage.removeItem('updatedSlimQuantity')
        localStorage.removeItem('updatedRoundQuantity')
        localStorage.removeItem('updatedHalfSlimQuantity')
        localStorage.removeItem('scheduleType')

        setIsProceed((prev) => !prev)
    }


  return (
    <div className="w-[100vw] flex justify-center p-10">
        <div className="container w-[60vw] bg-gray-600 text-white rounded-lg p-2 px-16 pb-4 text-normal tracking-wide">
            <h2 className="font-bold text-2xl py-5 text-center">Order Summary</h2>
            <div className="flex justify-center">
                <div className="flex-col">
                    <div>
                        <div className="py-2"><span className="font-bold">Customer Name: </span>{orderDetails.customerName}</div>
                        <div className="py-2"><span className="font-bold">Customer Address: </span>{orderDetails.customerAddress}</div>
                        <div className="py-2"><span className="font-bold">Address Description: </span>{orderDetails.addressDescription}</div>
                        <div className="flex py-2 gap-2">
                            <span className="font-bold">Order Type: </span>{localStorage.getItem("selectedService")}
                            <span className="font-bold">Expected Date: </span>{localStorage.getItem("dateValue")}
                            <span className="font-bold">Expected Time: {localStorage.getItem("timeValue")}</span>
                        </div>
                            <div className="py-2">
                                <span className="font-bold">Order Description: </span>
                                <div className="pl-5">
                                        {
                                            containers.map((container) => {
                                                return (
                                                    
                                                <div className="py-2 flex gap-2" key={container.id}>
                                                    <span className="font-bold">{container.name}</span><span>x{container.quantity}</span><span>₱{container.refill_price * Number(container.quantity)}</span>
                                                </div>
                                                    )
                                                })
                                        }
                                </div>
                            </div>
                            <div className="py-2"><span className="font-bold">Mode of Payment: </span>{localStorage.getItem("orderMOP")}</div>
                            <div className="py-2"><span className="font-bold">Total Amount: </span>₱{localStorage.getItem("totalPriceAmount")}</div>
                            </div>
        
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