const { connect } = require('../config/db')

class UsersRepository {
    db = {}

    constructor() {
        this.db = connect()
    }

    // UPDATE
    async updateUser(id, updated_data) {
        console.log('UPDATE USERS IN THE REPOSITORY')

        try {
            const user = await this.db.users.findByPk(id);
            console.log(user)

          if (!user) {;
            console.log('User not found');
          }
      
        user.username = updated_data.username;
        
          // Save the changes to the database
          return await user.save();

        } catch (err) {
            console.error(err.message);
        }
    }
}

module.exports = new UsersRepository()