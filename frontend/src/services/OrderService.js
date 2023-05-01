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

// GET/FETCH ORDERS OF ONE USER
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