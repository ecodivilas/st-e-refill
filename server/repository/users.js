const { connect } = require('../config/db')

class UsersRepository {
    db = {}

    constructor() {
        this.db = connect()
    }

    async createUser(user) {
        try {
            return await this.db.users.create(user)
        } catch (error) {
            console.log('Error', error)
        }
    }

    // GET ALL USERS
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

    // GET USER BY ID
    async getUser(id) {
        console.log('DELETE USERS IN THE REPOSITORY')

        try {
            const user = await this.db.users.findByPk(id);
            // console.log(user)
            return user
        } catch (err) {
            console.error(err.message);
        }
    }

    // DELETE
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

    // // UPDATE
    // async updateUser(id, updated_data) {
    //     console.log('UPDATE USERS IN THE REPOSITORY')

    //     try {
    //         const user = await this.db.users.findByPk(id);
    //         console.log(user)

    //       if (user) {
    //         await user.update(updated_data)
    //       } else {
    //         console.log('User not found');
    //       }
         
    //     } catch (err) {
    //         console.log('There was an error', err);
    //     }
    // }
    async updateUser(user) {
        console.log("Updating User");
        let data = {};
    
        try {
            console.log("user: ", user);
          data = await this.db.users.update(
            { ...user },
            {
              where: {
                id: user.id,
              },
            }
          );
        } catch (error) {
          console.log("Error:", error);
        }
        return data;
      }
}

module.exports = new UsersRepository()