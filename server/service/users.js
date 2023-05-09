const usersRepository = require('../repository/users')

class UsersService {
    async registerUser(user) {
        return await usersRepository.registerUser(user)
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

    async loginUser(loginCredentials) {
        return await usersRepository.loginUser(loginCredentials)
    }
}

module.exports = new UsersService()
