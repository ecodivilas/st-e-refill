export async function createUser(userDetails) {
    const response = await fetch('/api/v1/users', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ "user": userDetails }),
    });

    return await response.json();
}

export async function getAllUsers() {
    const response = await fetch('/api/v1/users');
    return await response.json()
}

export async function editUser(userDetails) {
    const response = await fetch('/api/v1/users', {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ "user": userDetails }),
    });
    return await response.json()

    // console.log(JSON.stringify({ "user": userDetails }))
}

export async function deleteUser(userId) {
    // console.log(`Here am I: ${userId}`)
    // const response = await fetch(`/api/v1/users/${userId}`, { method: "DELETE" });
    try {
        const confirmed = window.confirm('Are you sure you want to delete this user?')
        if (confirmed) {
            const response = await fetch(
                `/api/v1/users/${userId}`,
                { method: 'DELETE' }
            )
            return await response.json();
            // setUser(user.filter((u) => u.id !== userId))
        }
    } catch (error) {
        console.error(error.message)
    }
}