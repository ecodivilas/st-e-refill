// CREATE/POST User
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