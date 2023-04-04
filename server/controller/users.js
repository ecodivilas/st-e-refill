
const usersService = require('../service/users')
class usersController {

    // CREATE
    async createUser(user) {
        return await userService.createUser(user)
    }

    // GET
    async getUsers() {
        console.log('GETTING USERS IN THE CONTROLLER')
        return await usersService.getUsers()
    }


} 

module.exports =  new usersController()