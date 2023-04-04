const { connect } = require('../config/db')

class UsersRepository {
    db = {}

    constructor() {
        this.db = connect()
    }

    // CREATE
    // async createUser() {}
    async createUser(user) {
        try {
            return await this.db.users.create(user)
        } catch (error) {
            console.log('Error', error)
        }
    }

    // GET
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
    }

    // UPDATE
    // async updateUser() {}


    // DELETE
    // async deleteUser() {}
    async deleteUser(id) {
        console.log('DELETE USERS IN THE REPOSITORY')

        try {
            const user = await this.db.users.findByPk(id);
            console.log(user)
          if (user) {
            await user.destroy();
            console.log('User deleted successfully');
          } else {
            console.log('User not found');
          }
          
        } catch (err) {
            console.error(err.message);
        }
        
    }
}

module.exports = new UsersRepository()