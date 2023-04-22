const usersRepository = require('../repository/users')

class UsersService {
    async createUser(user) {
        return await usersRepository.createUser(user)
    }

    async getUsers() {
        console.log('GETTING USERS IN THE REPOSITORY')
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
}

module.exports = new UsersService()
