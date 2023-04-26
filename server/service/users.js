const usersRepository = require('../repository/users')

class UsersService {
    async createUser(user) {
        return await usersRepository.createUser(user)
    }

    async getUsers() {
        return await usersRepository.getUsers()
    }

    async getUser(id) {
        return await usersRepository.getUser(id)
    }

    async updateUser(user) {
        return await usersRepository.updateUser(user)
    }

    async deleteUser(id) {
        return await usersRepository.deleteUser(id)
    }

    // Login
    async loginUser(loginCredentials) {
        return await usersRepository.loginUser(loginCredentials)
    }

    // Register
    async registerUser(user) {
        return await usersRepository.registerUser(user)
    }
}

module.exports = new UsersService()
