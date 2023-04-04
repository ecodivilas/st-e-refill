const { connect } = require('../config/db')

class UsersRepository {
    db = {}

    constructor() {
        this.db = connect()
    }

    // CREATE
    // async createUser() {}

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
    async deleteUser() {
        console.log('DELETE USERS IN THE REPOSITORY')
    }

    // models.User.destroy({
    //     where: {
    //      id: id
    //     }
    //    }).then(count => {
    //     if (!count) {
    //      return res.status(404).send({error: 'No user'});
    //     }
    //     res.status(204).send();
    //    });
}

module.exports = new UsersRepository()