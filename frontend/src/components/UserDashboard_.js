import React, { useEffect, useState } from 'react'

import EditUser from './dashboards/EditUser'
import { getAllUsers, deleteUser } from '../services/UserService'

function UserDashboard() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        getAllUsers().then((user) => {
            setUsers(user)
        })
    }, [])

    return (
        <section className="bg-gray-500 dark:bg-slate-900 p-10">
            <div className="shadow bg-gray-300 rounded-lg">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
                                User Dashboard
                            </h1>
                            <div className="flex justify-center dark:text-white">
                                <table className="text-center">
                                    <thead>
                                        <tr>
                                            <th className="">ID</th>
                                            <th className="w-[300px] text-center">
                                                Username
                                            </th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {users && users.length > 0 ? (
                                            users.map((user) => {
                                                return (
                                                    <tr
                                                        key={user.id}
                                                        className="shadow"
                                                    >
                                                        <td>{user.id}</td>
                                                        <td>{user.username}</td>
                                                        <td>
                                                            <EditUser
                                                                user={user}
                                                            />
                                                        </td>
                                                        <td>
                                                            <button
                                                                className="bg-red-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
                                                                onClick={() =>
                                                                    deleteUser(
                                                                        user.id
                                                                    )
                                                                }
                                                            >
                                                                Delete
                                                            </button>
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                        ) : (
                                            <p className="flex text-center">
                                                No records Found!
                                            </p>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default UserDashboard
