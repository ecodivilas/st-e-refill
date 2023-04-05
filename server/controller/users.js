
const usersService = require('../service/users')
class usersController {

    // CREATE
    async createUser(user) {
        console.log('CREATING USER IN THE CONTROLLER')
        return await usersService.createUser(user)
    }

    // GET ALL USERS
    async getUsers() {
        console.log('GETTING USERS IN THE CONTROLLER')
        return await usersService.getUsers()
    }

    // GET BY ID
    async getUser(id) {
        console.log('GETTING A USER BY ID IN THE CONTROLLER')
        return await usersService.getUser(id)
    }

    // UPDATE
    async updateUser(user) {
        console.log('UPDATE USER IN THE CONTROLLER')
        return await usersService.updateUser(user)
    }
    
    // DELETE
    async deleteUser(id) {
        console.log('DELETE USER IN THE CONTROLLER')
        return await usersService.deleteUser(id)
    }

} 

module.exports =  new usersController()