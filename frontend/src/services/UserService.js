// CREATE/POST User
export async function createUser(userDetails) {
    try {
        const response = await fetch('/api/v1/users', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ user: userDetails }),
        })
        return await response.json()
    } catch (error) {
        console.log('Error: ', error)
    }
}

// READ/FETCH/GET User
export async function getAllUsers() {
    try {
        const response = await fetch('/api/v1/users')
        return response.json()
    } catch (error) {
        console.log('Error: ', error)
    }
}

// EDIT/UPDATE User
export async function editUser(userDetails) {
    try {
        const response = await fetch('/api/v1/users', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ user: userDetails }),
        })

        if (response.status === 200) {
            return await response.json()
        }
    } catch (error) {
        console.log('Error: ', error)
    }
}

// DELETE User
export async function deleteUser(userId) {
    try {
        const confirmed = window.confirm(
            'Are you sure you want to delete this user?'
        )
        if (confirmed) {
            const response = await fetch(`/api/v1/users/${userId}`, {
                method: 'DELETE',
            })
            return await response.json()
        }
    } catch (error) {
        console.log('Error: ', error)
    }
}

// console.log(JSON.stringify({ "user": userDetails }))
