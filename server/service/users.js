const usersRepository = require('../repository/users')

class usersService {

    // CREATE
    async createUser(user) {
        return await usersRepository.createUser(user)
    }

    // GET ALL USERS
    async getUsers() {
        console.log('GETTING USERS IN THE REPOSITORY')
        return await usersRepository.getUsers()
        // const data = {'message': 'Where here in the service'}
        // return data
    }

    // GET USER BY ID
    async getUser(id) {
        console.log('GETTING USER BY ID IN THE REPOSITORY')
        return await usersRepository.getUser(id)
        // const data = {'message': 'Where here in the service'}
        // return data
    }

    // DELETE
    async deleteUser(id) {
        return await usersRepository.deleteUser(id)
    }

    // UPDATE
    async updateUser(id, updated_data) {
        return await usersRepository.updateUser(id)
    }

}

module.exports = new usersService()