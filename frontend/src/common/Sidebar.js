import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../App'

import {
    AiOutlineHistory,
    AiOutlineUser,
    BiPurchaseTagAlt,
    FiShoppingCart,
    HiMenuAlt3,
    MdOutlineDashboard,
    MdLogout,
    RiSettings4Line,
} from '../assets/icons/icons'

import { isAdmin_ } from '../App'

const adminMenus = [
    { id: 1, name: 'Dashboard', link: '/', icon: MdOutlineDashboard },
    { id: 2, name: 'Users', link: '/admin/users', icon: AiOutlineUser },
    { id: 3, name: 'Orders', link: '/admin/orders', icon: FiShoppingCart },
    { id: 4, name: 'Setting', link: '/', icon: RiSettings4Line },
    { id: 5, name: 'Logout', link: '/', icon: MdLogout },
]

const userMenus = [
    { id: 1, name: 'Dashboard', link: '/', icon: MdOutlineDashboard },
    { id: 2, name: 'Order Now', link: '/order', icon: BiPurchaseTagAlt },
    { id: 3, name: 'Orders', link: '/users/orders', icon: FiShoppingCart },
    { id: 4, name: 'History', link: '/', icon: AiOutlineHistory },
    { id: 5, name: 'Setting', link: '/', icon: RiSettings4Line },
    { id: 6, name: 'Logout', link: '/', icon: MdLogout },
]

const Sidebar = ({ open, setOpen, setIsAuthorized, setIsAdmin }) => {
    const menus = isAdmin_ ? adminMenus : userMenus

    const navigate = useNavigate()

    const handleLogout = () => {
        sessionStorage.removeItem('jwt')
        localStorage.removeItem('data')
        setIsAuthorized(false)
        setIsAdmin(false)
        navigate('/admin')
    }

    return (
        <section
            className={`bg-[#0e0e0e] min-h-screen ${
                open ? 'w-60' : 'w-16'
            } duration-500 text-gray-100 px-4`}
        >
            <div className="py-3 flex justify-end">
                <HiMenuAlt3
                    size={26}
                    className="cursor-pointer"
                    onClick={() => setOpen(!open)}
                />
            </div>
            <div className="mt-4 flex flex-col gap-4 relative">
                {menus?.map((menu, i) => (
                    <div key={menu.id}>
                        {menu.name === 'Logout' ? (
                            <Link
                                // to={menu?.link}
                                onClick={handleLogout}
                                className={` ${
                                    menu?.margin && 'mt-5'
                                } group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md`}
                            >
                                <div>
                                    {React.createElement(menu?.icon, {
                                        size: '20',
                                    })}
                                </div>
                                <h2
                                    style={{
                                        transitionDelay: `${i + 3}00ms`,
                                    }}
                                    className={`whitespace-pre duration-500 ${
                                        !open &&
                                        'opacity-0 translate-x-28 overflow-hidden'
                                    }`}
                                >
                                    {menu?.name}
                                </h2>
                                <h2
                                    className={`${
                                        open && 'hidden'
                                    } absolute left-40 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit z-50`}
                                >
                                    {menu?.name}
                                </h2>
                            </Link>
                        ) : (
                            <Link
                                to={menu?.link}
                                onClick={() => navigate(menu?.link)}
                                className={` ${
                                    menu?.margin && 'mt-5'
                                } group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md`}
                            >
                                <div>
                                    {React.createElement(menu?.icon, {
                                        size: '20',
                                    })}
                                </div>
                                <h2
                                    style={{
                                        transitionDelay: `${i + 3}00ms`,
                                    }}
                                    className={`whitespace-pre duration-500 ${
                                        !open &&
                                        'opacity-0 translate-x-28 overflow-hidden'
                                    }`}
                                >
                                    {menu?.name}
                                </h2>
                                <h2
                                    className={`${
                                        open && 'hidden'
                                    } absolute left-40 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit z-50`}
                                >
                                    {menu?.name}
                                </h2>
                            </Link>
                        )}
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Sidebar
