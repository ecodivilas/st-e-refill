import React, { useEffect, useState } from 'react'

import EditUser from './dashboards/EditUser'
import { deleteUser, getAllUsers } from '../services/UserService'

import DataTable from 'react-data-table-component'

import { ImCross } from 'react-icons/im'

function UserDashboard() {
    const [users, setUsers] = useState([])
    const [alertMessage, setAlertMessage] = useState('')

    useEffect(() => {
        getAllUsers()
            .then((users) => {
                setUsers(users)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    const handleDelete = (userID) => {
        deleteUser(userID)
        setAlertMessage(`Successfully deleted user id: ${userID}`)
    }

    const columns = [
        {
            name: 'Username',
            selector: (row) => row.username,
            sortable: true,
        },
        {
            name: 'Email',
            selector: (row) => row.email,
            sortable: true,
        },
        {
            name: 'First Name',
            selector: (row) => row.first_name,
            sortable: true,
        },
        {
            name: 'Middle Name',
            selector: (row) => row.middle_name,
            sortable: true,
        },
        {
            name: 'Last Name',
            selector: (row) => row.last_name,
            sortable: true,
        },
        {
            name: 'Gender',
            selector: (row) => row.gender,
            sortable: true,
        },
        {
            name: 'Mobile No.',
            selector: (row) => row.mobile_no,
            sortable: true,
        },
        {
            name: 'Role',
            selector: (row) => row.role,
            sortable: true,
        },
        {
            name: 'Actions',
            selector: (row) => row.edit,
        },
        {
            selector: (row) => row.delete,
        },
    ]

    const customData =
        users && users.length > 0
            ? users.map((user) => {
                  return {
                      username: user.username,
                      email: user.email,
                      first_name: user.first_name,
                      middle_name: user.middle_name,
                      last_name: user.last_name,
                      gender: user.gender,
                      mobile_no: user.mobile_no,
                      role: user.role,
                      edit: <EditUser user={user} />,
                      delete: (
                          <button
                              className="m-0 p-0"
                              onClick={() => handleDelete(user.id)}
                          >
                              <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  className="fill-current hover:text-red-600 text-slate-900 w-4 h-4 m-0 p-0"
                              >
                                  <path
                                      fillRule="evenodd"
                                      d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
                                      clipRule="evenodd"
                                  />
                              </svg>
                          </button>
                      ),
                  }
              })
            : []

    // setData(customData)
    // const [records, setRecords] = useState(data);
    // console.log(data)

    // const handleFilter = (event) => {
    //     const newData = records.filter(row => {
    //         return row.username.toLowerCase().includese(event.target.value.toLowerCase())
    //     })
    //     setRecords(newData)
    // }

    return (
        <div className="h-[100vh] bg-zinc-700 ">
            <div className="flex flex-col justify-center items-center w-full h-12 pt-12">
                <h2 className="font-bold text-xl p-2 text-white">
                    User Dashboard
                </h2>
                <div className="hidden text-xs text-left w-[90vw] bg-green-100 p-2 rounded-lg flex flex-row items-center justify-between">
                    <span className="text-green-900 font-semibold">
                        Edit Successful!
                    </span>
                    <ImCross className="h-2 text-green-900" />
                </div>
                {alertMessage && (
                    <div className="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 mt-3 px-4 py-3 shadow-md">
                        <div className="flex">
                            <div className="py-1">
                                <svg className="fill-current h-6 w-6 text-teal-500 mr-4"></svg>
                            </div>
                            <div>
                                <p className="font-bold">{alertMessage}</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <div className="flex flex-cols justify-center pt-12 gap-4 flex-wrap items-center">
                {/* <div className="text-end"><input type="text" className="bg-white" onChange={handleFilter} /></div> */}
                <DataTable
                    columns={columns}
                    data={customData}
                    selectableRows
                    pagination
                    fixedHeader
                    fixedHeaderScrollHeight="300px"
                ></DataTable>
            </div>
        </div>
    )
}

export default UserDashboard
