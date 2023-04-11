import React, { useEffect, useState } from 'react'
import { getAllUsers, deleteUser } from '../services/UserService'
import EditDashboard from './EditDashboard';

function UserDashboard() {
    const [users, setUsers] = useState([])
    // const [successModal, setSuccessModal] = useState('')

    // const handleEdit = (user) => {
    //     // Introduce UserService fro Editing or Updating Record
    //     editUser().then((user) => {
    //         setSuccessModal("User has been updated", user)
    //     })
    //     alert('YEHEY EDIT MO BAAAA?')
    // }

    // const handleDelete = (user) => {
    //     // window.confirm('DELETE NOW? AWTSU!')
    //     console.log(user.id)
    //     deleteUser(user.id).then((console.log("Nadelete ko na!!! BLEEEH!!!")));
    // }

    useEffect(() => {
        getAllUsers().then((user) => {
            setUsers(user)
        })
    }, [])
    return (
    <div className="bg-green-800 p-10">
        {/* {successModal && <div>Success Message: {successModal}</div>} */}
        <div className="text-center">
            <p className="font-bold">User Dashboard</p>
        </div>
        <div className="flex justify-center">
            <table className="text-center">
                <thead>
                    <tr>
                        <th className="">ID</th>
                        <th className="w-[300px] text-center">Username</th>
                        {/* <th className="text-blue-400">password</th>
                        <th>first_name</th>
                        <th>last_name</th>
                        <th>gender</th>
                        <th>age</th>
                        <th>delivery_address</th>
                        <th>phone</th>
                        <th>email</th>
                        <th>role</th> */}
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users && users.length > 0 ?
                        users.map((user) => {
                            return (
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.username}</td>
                                    {/* <td>{user.password}</td>
                                    <td>{user.first_name}</td>
                                    <td>{user.last_name}</td>
                                    <td>{user.gender}</td>
                                    <td>{user.age}</td>
                                    <td>{user.delivery_address}</td>
                                    <td>{user.phone}</td>
                                    <td>{user.email}</td>
                                    <td>{user.role}</td> */}
                                    <td><EditDashboard user={user} /></td>
                                    <td><button className="bg-red-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded" onClick={() => deleteUser(user.id)}>
                                    Delete
                                    </button></td>
                                </tr>
                            )
                        })
                    : 
                        <p className="flex text-center">No records Found!</p>
                    }
                </tbody>
            </table>
        </div>
  </div>
  )
}

export default UserDashboard