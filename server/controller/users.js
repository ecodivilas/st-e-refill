const usersService = require('../service/users')
class UsersController {
    async registerUser(user) {
        return await usersService.registerUser(user)
    }

    async getUsers() {
        return await usersService.getUsers()
    }

    async getUser(id) {
        return await usersService.getUser(id)
    }

    async updateUser(user) {
        return await usersService.updateUser(user)
    }

    async deleteUser(id) {
        return await usersService.deleteUser(id)
    }

    async loginUser(loginCredentials) {
        return await usersService.loginUser(loginCredentials)
    }
}

module.exports = new UsersController()
