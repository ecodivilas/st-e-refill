// GET/FETCH ORDERS OF ALL USERS ORDERS
export async function getAllOrders () {
    try {
        const response = await fetch( '/api/v1/orders' )
        return response.json()
    } catch (error) {
        console.log('Error: ', error)
    }
}

export async function getOneOrder (user_id) {
    try {
        const response = await fetch( `/api/v1/order/${user_id}` )
        return response.json()
    } catch (error) {
        console.log('Error: ', error)
    }
}

// EDIT/UPDATE Order
export async function editOrder(order) {
    console.log(order)
    try {
        const response = await fetch('/api/v1/order', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ order: order }),
        })

        if (response.status === 200) {
            return await response.json()
        }
    } catch (error) {
        console.log('Error: ', error)
    }
}

// CREATE/POST ORDER
export async function createPendingOrder( orderDetails ) {
    try {
        const response = await fetch('/api/v2/order', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ order: orderDetails })
        })
        return await response.json()
    } catch (error) {
        console.log('Error: ', error)
    }
}

// GET/FETCH ORDER ITEMS OF ONE USER
export async function getOneOrderItems ( userId ) {
    console.log( userId )
    try {
        const response = await fetch( `/api/v2/order_items/${userId}` )
        console.log("The Res: ", response)
        return response.json()
    } catch (error) {
        console.log('Error: ', error)
    }
}

// GET/FETCH ORDERS OF ALL USERS ORDERS
export async function getAllOrderItems () {
    try {
        const response = await fetch( '/api/v2/order_items' )
        return response.json()
    } catch (error) {
        console.log('Error: ', error)
    }
}

// DELETE User
export async function deleteOrder( userId ) {
    // try {
    //     const confirmed = window.confirm(
    //         'Are you sure you want to delete this user?'
    //     )
    //     if (confirmed) {
    //         const response = await fetch(`/api/v1/users/${userId}`, {
    //             method: 'DELETE',
    //         })
    //         return await response.json()
    //     }
    // } catch (error) {
    //     console.log('Error: ', error)
    // }
}