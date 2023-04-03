const { connect } = require('../config/db')

class UsersRepository {
    db = {}

    constructor() {
        this.db = connect()
    }
    async getUsers() {
        console.log('GETTING/FETCH/READ USERS IN THE REPOSITORY')

        // Communicate with the database
        try {
            const users = await this.db.users.findAll({
                order: [['id','ASC']],
            }) 
            return users          
        } catch (error) {
            console.log('Error in getting users', error)
            return []
        }
        // const data = {'message':'Everything went well dude in repository hahahaha'}
        // return data
    }
}

module.exports = new UsersRepository()