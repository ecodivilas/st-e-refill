const bcrypt = require('bcryptjs')
const { connect } = require('../config/db')

class UsersRepository {
    db = {}

    constructor() {
        this.db = connect()
    }

    async createUser(user) {
        let userData = {}

        try {
            const password = user.password
            const salt = bcrypt.genSaltSync(10)
            const hashedPassword = bcrypt.hashSync(password, salt)

            userData = { ...user, password: hashedPassword }
            const createdUser = await this.db.users.create(userData)
            return createdUser
        } catch (error) {
            console.log('Error: ', error)
        }
    }

    async getUsers() {
        try {
            const users = await this.db.users.findAll({
                order: [['id', 'ASC']],
            })
            return users
        } catch (error) {
            console.log('Error: ', error)
            return []
        }
    }

    async getUser(id) {
        try {
            const user = await this.db.users.findByPk(id);
            return user
        } catch (error) {
            console.log('Error: ', error)
        }
    }

    async deleteUser(id) {
        try {
            const user = await this.db.users.destroy({ where: { id } })
            return user
        } catch (error) {
            console.log('Error: ', error)
        }
    }

    async updateUser(user) {
        let data = {};

        try {
            data = await this.db.users.update(
                { ...user },
                {
                    where: {
                        id: user.id,
                    },
                }
            );
        } catch (error) {
            console.log('Error: ', error)
        }
        return data;
    }
}

module.exports = new UsersRepository()