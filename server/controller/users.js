
const usersService = require('../service/users')
class usersController {
    async getUsers() {
        console.log('GETTING USERS IN THE CONTROLLER')
        return await usersService.getUsers()
    }


} 

module.exports =  new usersController()