import React from 'react'

function OrderSummary() {

    const orderDetails = [
        {
            customerId: 1,
            customerName: "Ely Odivilas",
            customerAddress: "234 100flr Mapagmahal St., Cupid Subd., Brgy 145, Caloocan City",
            addressDescription: "Near Red Door harap tindahan ni aleng marites",
            orderType: "Pick-up Container",
            expectedTime: "Anytime",
            orderDescription: [
                {
                    id: 1,
                    name: "Slim 5 gallons standard size",
                    quantity: 2,
                    priceAmount: 50
                },
                {
                    id: 2,
                    name: "Round 5 gallons standard size",
                    quantity: 2,
                    priceAmount: 50
                },
                {
                    id: 3,
                    name: "Half Slim 2.5 gallons standard size",
                    quantity: 2,
                    priceAmount: 30
                },
            ]
        }
    ]
  return (
    <div className="w-[100vw] flex justify-center p-10">
        <div className="container w-[60vw] bg-gray-600 text-white rounded-lg p-2 pb-4 text-normal tracking-wide">
            <h2 className="font-bold text-2xl py-5 text-center">Order Summary</h2>
            <div className="flex justify-center">
                {
                    orderDetails.map((orderDetail) => {
                        return (
                            <div className="flex-col" key={orderDetail.customerId}>
                                <div className="py-2"><span className="font-bold">Customer Name: </span>{orderDetail.customerName}</div>
                                <div className="py-2"><span className="font-bold">Customer Address: </span>{orderDetail.customerAddress}</div>
                                <div className="py-2"><span className="font-bold">Address Description: </span>{orderDetail.addressDescription}</div>
                                <div className="flex py-2 gap-2">
                                    <span className="font-bold">Order Type: </span>{orderDetail.orderType}
                                    <span className="font-bold">Expected Time: </span>{orderDetail.expectedTime}
                                </div>
                                <div className="py-2">
                                    <span className="font-bold">Order Description: </span>
                                    <div className="pl-5">
                                        {orderDetail.orderDescription.map((order) => {
                                            return (
                                                
                                            <div className="py-2 flex gap-2" key={order.id}>
                                                <span className="font-bold">{order.name}</span><span>x{order.quantity}</span><span>₱{order.priceAmount}</span>
                                            </div>
                                            )
                                        })}
                                    </div>
                                </div>
                                <div className="py-2"><span className="font-bold">Mode of Payment: </span>Cash on Delivery</div>
                                <div className="py-2"><span className="font-bold">Total Amount: </span>₱130</div>

                                <div className="flex gap-2">
                                    <button className="py-5 grow px-10 bg-green-600 text-white font-semibold text-sm">Update Order</button>
                                    <button className="py-5 grow px-10 bg-orange-600 text-white font-semibold text-sm">Proceed Order</button>
                                    <button className="py-5 grow px-10 bg-gray-700 text-white font-semibold text-sm">Cancel</button>
                                </div>
                            </div>              
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default OrderSummary