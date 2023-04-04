const usersRepository = require('../repository/users')

class usersService {

    // CREATE
    async createUser(user) {
        return await usersRepository.createUser(user)
    }

    // GET
    async getUsers() {
        console.log('GETTING USERS IN THE REPOSITORY')
        return await usersRepository.getUsers()
        // const data = {'message': 'Where here in the service'}
        // return data
    }

    // DELETE
    async deleteUser(id) {
        return await usersRepository.deleteUser(id)
    }

}

module.exports = new usersService()