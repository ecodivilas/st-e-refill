
const usersService = require('../service/users')
class usersController {

    // CREATE
    async createUser(user) {
        console.log('CREATING USER IN THE CONTROLLER')
        return await usersService.createUser(user)
    }

    // GET
    async getUsers() {
        console.log('GETTING USERS IN THE CONTROLLER')
        return await usersService.getUsers()
    }
    
    // DELETE
    async deleteUser(id) {
        console.log('DELETE USER IN THE CONTROLLER')
        return await usersService.deleteUser(id)
    }

} 

module.exports =  new usersController()