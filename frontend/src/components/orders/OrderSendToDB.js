// import React, { useState } from 'react'


// const OrderSendToDB = ({ orderData }) => {
//     // hardcoded
//     const passedOrderData = {
//         "order": {
//             "customer_id": 1,
//             "order_date": "2023-04-20",
//             "delivery_date": "2023-04-20",
//             "mode_of_payment": orderData[0].mode_of_payment.value ?? "",
//             "status": "queue",
//             "is_paid": false,
//             "order_items": orderData[0].container_items ?? []
//         }
//     }
    

//   return (
//     <div>
//         {
//             orderData.map((order, index) => {
//                 return (
//                     <div className="py-2 px-2" key={index}> {order.mode_of_payment.label} </div>
//                 )
//             })
//         }
//     </div>
//   )
// }

// export default OrderSendToDB