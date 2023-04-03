
const usersService = require('../service/users')
class usersController {
    async getUsers() {
        console.log('GETTING USERS IN THE CONTROLLER')
        return await usersService.getUsers()
        // const data = {'message': 'Everything went well maniga'}
        // return data
    }

    // async chickenSalad() {
    //     const data = 'This is chicken salad'
    //     return data
    // }
} 

module.exports =  new usersController()