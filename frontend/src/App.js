import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './common/NavBar'
import Footer from './common/Footer'
import UserLogin from './aunthentication/user/Login'
import AdminLogin from './aunthentication/admin/Login'
import Register from './aunthentication/user/Register'

import Home from './pages/Home'
import ProductsnServices from './pages/ProductsNServices'
import CustomerExperience from './pages/CustomerExperience'
import Insights from './pages/Insights'
import HelpCenter from './pages/HelpCenter'
import Inquiry from './pages/Inquiry'

import OrderTypeSelection from './components/orders/OrderTypeSelection'
import ContainerSelection from './components/orders/ContainerSelection'
import OrderSchedule from './components/orders/OrderSchedule'
import OrderMOP from './components/orders/OrderMOP'
import OrderSummary from './components/orders/OrderSummary'

import './assets/customizedStyles/customTableStyle.css'

// Admin Dashboard
import AdminUsersDashboard from './components/admin_dashboard/users/AdminUsersDashboard'
import AdminOrdersDashboard from './components/admin_dashboard/orders/AdminOrdersDashboard'

// User Dashboard
import UserOrdersDashboard from './components/user_dashboard/orders/UserOrdersDashboard'

// Enhancement
import ContainerCards from './components/orders/ContainerCards'
import Experiment from './pages/Experiment'

// import OrderHistory from './components/user_dashboard/OrderHistory'
export let isAuthorize
export let isAdmin_
export let isNavOut

function App() {
    const [isAuthorized, setIsAuthorized] = useState(
        sessionStorage.getItem('jwt') ? true : false
    )

    const [isAdmin, setIsAdmin] = useState(
        sessionStorage.getItem('userRole') === '2' ? true : false
    )

    const [isNavigationOut, setIsNavigationOut] = useState(false)

    isAuthorize = isAuthorized
    isAdmin_ = isAdmin
    isNavOut = isNavigationOut

    return (
        <div>
            <BrowserRouter>
                {isNavigationOut ? (
                    <></>
                ) : (
                    <Navbar
                        setIsAuthorized={setIsAuthorized}
                        setIsAdmin={setIsAdmin}
                    />
                )}
                <Routes>
                    {isAuthorized ? (
                        <>
                            <Route
                                path="/experiment"
                                element={<Experiment />}
                            />
                            <Route
                                path="/order"
                                element={<OrderTypeSelection />}
                            />
                            <Route
                                path="/order-container-selection"
                                element={<ContainerSelection />}
                            />
                            <Route
                                path="/order-schedule"
                                element={<OrderSchedule />}
                            />
                            <Route
                                path="/order-mode-of-payment"
                                element={<OrderMOP />}
                            />
                            <Route
                                path="/order-summary"
                                element={<OrderSummary />}
                            />
                            <Route path="/cards" element={<ContainerCards />} />

                            {/* Admin Components Routes */}
                            <Route
                                path="/admin/users"
                                element={
                                    <AdminUsersDashboard
                                        setIsAuthorized={setIsAuthorized}
                                        setIsAdmin={setIsAdmin}
                                    />
                                }
                            />
                            <Route
                                path="/admin/orders"
                                element={
                                    <AdminOrdersDashboard
                                        setIsAuthorized={setIsAuthorized}
                                        setIsAdmin={setIsAdmin}
                                    />
                                }
                            />

                            {/* User Components Routes */}
                            <Route
                                path="/users/orders"
                                element={
                                    <UserOrdersDashboard
                                        setIsAuthorized={setIsAuthorized}
                                        setIsAdmin={setIsAdmin}
                                    />
                                }
                            />
                        </>
                    ) : (
                        <>
                            <Route
                                path="/login"
                                element={
                                    <UserLogin
                                        setIsAuthorized={setIsAuthorized}
                                        setIsAdmin={setIsAdmin}
                                    />
                                }
                            />
                            <Route
                                path="/admin"
                                element={
                                    <AdminLogin
                                        setIsAuthorized={setIsAuthorized}
                                        setIsAdmin={setIsAdmin}
                                        setIsNavigationOut={setIsNavigationOut}
                                    />
                                }
                            />
                            <Route path="/register" element={<Register />} />
                        </>
                    )}

                    <Route
                        path="/*"
                        element={
                            <Home
                                isAuthorized={isAuthorized}
                                setIsAdmin={setIsAdmin}
                                setIsAuthorized={setIsAuthorized}
                                setIsNavigationOut={setIsNavigationOut}
                                isAdmin_={isAdmin_}
                                isAuthorize={isAuthorize}
                            />
                        }
                    />
                    <Route
                        path="/products-and-services"
                        element={<ProductsnServices />}
                    />
                    <Route
                        path="/customer-experience"
                        element={<CustomerExperience />}
                    />
                    <Route path="/insights" element={<Insights />} />
                    <Route path="/help-center" element={<HelpCenter />} />
                    <Route path="/inquiry" element={<Inquiry />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    )
}

export default App
