import React, { useEffect, useState, useMemo  } from 'react'

import EditUser from './EditUser'
import { deleteUser, getAllUsers } from '../../services/UserService'

import DataTable from 'react-data-table-component'

import { ImCross } from 'react-icons/im'

// '../../data/tableColumnHeaders'
import { columns } from '../../data/tableColumnHeaders'

function UsersList() {
    const [users, setUsers] = useState([])
    const [alertDeleteMessage, setAlertDeleteMessage] = useState('')
    const [alertEditedMessage, setAlertEditedMessage] = useState('')
    
useEffect(() => {
    getAllUsers()
    .then((users) => {
        setUsers(users)
    })
    .catch((error) => {
        console.log(error)
    })
    }, [alertDeleteMessage, alertEditedMessage])

    const [records, setRecords] = useState([]);

    try {
        useMemo(()=> setRecords(users),[users])
    } catch (error) {
        console.log("Error: ", error)
    }

    const handleDelete = (userID, userName) => {
        deleteUser(userID)
        setAlertDeleteMessage(`Successfully deleted user: ${userName}`)
    }

    const handleSetAlertEdited = (userName) => {
        setAlertEditedMessage(`Successfully edited user: ${userName}`)
    }

    const handleDelAlertClose = () => {
        setAlertDeleteMessage()
    }

    const handleEditAlertClose = () => {
        setAlertEditedMessage()
    }

    const handleFilter = (event) => {
        const newData = users.filter(row => {
            console.log(columns)
            return row.username.toLowerCase().includes(event.target.value.toLowerCase())
        })
        setRecords(newData)
    }

    const customData =
        records && records.length > 0
            ? records.map((user) => {
                  return {
                      username: user.username,
                      email: user.email,
                      first_name: user.first_name,
                      middle_name: user.middle_name,
                      last_name: user.last_name,
                      gender: user.gender,
                      mobile_number: user.mobile_number,
                      role: user.role,
                      edit: <EditUser user={user} handleSetAlertEdited={handleSetAlertEdited} />,
                      delete: (
                          <div className='flex-col gap-2 justify-center group relative py-1 px-4 overflow-visible'>
                            <button
                              className="m-0 p-0"
                              data-tooltip-target="tooltip-hover"
                              onClick={() => handleDelete(user.id, user.username)}
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

                            {/* <span className="absolute -top-3 left-1/2 transform !z-50 -translate-x-1/2 scale-0 rounded py-1 !px-10  text-xs text-red-800 group-hover:scale-100">
                                                        Delete
                            </span> */}
                          </div>
                      ),
                  }
              })
            : []

    return (
        <div className="">
                <h2 className="font-bold text-xl p-2 text-transparent bg-clip-text bg-gradient-to-r to-slate-900 from-orange-600">
                    User Information
                </h2>
                <input type="text" placeholder="Search..." onChange={handleFilter} className="py-1 my-2 text-sm rounded px-4 " />
            <div className="">
     
                {alertEditedMessage && (
                    <div className="text-xs text-left bg-green-100 p-2 rounded-lg flex flex-row items-center justify-between">
                        <span className="text-green-900 font-semibold">
                            {alertEditedMessage}
                        </span>
                        <button type="button" onClick={handleEditAlertClose}><ImCross className="h-2 text-green-900" /></button>
                    </div>
                )}

                {alertDeleteMessage && (
                    <div className="text-xs text-left bg-red-100 p-2 rounded-lg flex flex-row items-center justify-between">
                        <span className="text-red-900 font-semibold">
                            {alertDeleteMessage}
                        </span>
                        <button type="button" onClick={handleDelAlertClose}><ImCross className="h-2 text-red-900" /></button>
                    </div>
                )}
            </div>
            <div className="flex flex-cols justify-center pt-3 gap-4 flex-wrap items-center">
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

export default UsersList
