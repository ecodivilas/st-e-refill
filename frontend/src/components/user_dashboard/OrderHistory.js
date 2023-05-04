import React, { useEffect, useMemo, useState } from 'react'

import '../../App'
import { getOneOrderItems } from '../../services/OrderService'
import DataTable from 'react-data-table-component'
import { columns } from '../../data/userOrdersTableHeaders'

function OrderHistory() {
    const [orders, setOrders] = useState([])
    useEffect(() => {
        getOneOrderItems(JSON.parse(localStorage.getItem('data')).user_id)
            .then((orders) => {
                setOrders(orders)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    const [records, setRecords] = useState([])

    try {
        useMemo(() => setRecords(orders), [orders])
    } catch (error) {
        console.log('Error: ', error)
    }

    const handleFilter = (event) => {
        const newData = orders.filter((row) => {
            return row.orderID.includes(event.target.value)
        })
        setRecords(newData)
    }

    const statusChecker = (status) => {
        if (status === 'to collect') {
            return (
                <button className="py-1 w-24 text-xm rounded-lg text-black font-medium bg-yellow-400">
                    To be Collected
                </button>
            )
        } else if (status === 'cancelled') {
            return (
                <button className="py-1 w-24 text-xm rounded-lg text-white font-medium bg-gray-600">
                    Cancelled
                </button>
            )
        } else if (status === 'preparing') {
            return (
                <button className="py-1 w-24 text-xm rounded-lg text-white font-medium bg-teal-900">
                    Preparing
                </button>
            )
        } else if (status === 'on the way') {
            return (
                <button className="py-1 w-24 text-xm rounded-lg text-white font-medium bg-orange-600">
                    On the Way
                </button>
            )
        } else if (status === 'delivered') {
            return (
                <button className="py-1 w-24 text-xm rounded-lg text-white font-medium bg-lime-600">
                    Delivered
                </button>
            )
        }
    }

    const customData =
        records && records.length > 0
            ? records.map((order) => {
                  return {
                      order_id: order.order_id,
                      order_date: order.order_date,
                      name: order.name,
                      capacity: order.capacity,
                      quantity: order.quantity,
                      total_price: order.total_price,
                      is_paid: order.is_paid ? (
                          <button className="py-1 w-16 text-xm rounded-lg text-white font-medium bg-lime-600">
                              Paid
                          </button>
                      ) : (
                          <button className="py-1 w-16 text-xm rounded-lg text-black font-medium bg-yellow-400">
                              Unpaid
                          </button>
                      ),
                      status: statusChecker(order.status),
                  }
              })
            : []

    return (
        <div className="">
            <h2 className="font-bold text-xl p-2 text-transparent bg-clip-text bg-gradient-to-r to-slate-900 from-orange-600">
                Order History
            </h2>
            <input
                type="text"
                placeholder="Search..."
                onChange={handleFilter}
                className="hidden py-1 my-2 text-sm rounded px-4 "
            />

            <div className="flex flex-cols justify-center pt-3 gap-4 flex-wrap items-center">
                {/* <div className="text-end"><input type="text" className="bg-white" onChange={handleFilter} /></div> */}
                <DataTable
                    columns={columns}
                    data={customData}
                    selectableRows
                    pagination
                    fixedHeader
                    fixedHeaderScrollHeight="300px"
                    defaultSortAsc={false}
                ></DataTable>
            </div>
        </div>
    )
}

export default OrderHistory
