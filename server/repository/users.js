const bcrypt = require('bcryptjs')
const { connect } = require('../config/db')
const { generateAccessToken } = require('../config/jwt')

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
            const user = await this.db.users.findByPk(id)
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
        let data = {}

        try {
            data = await this.db.users.update(
                { ...user },
                {
                    where: {
                        id: user.id,
                    },
                }
            )
        } catch (error) {
            console.log('Error: ', error)
        }
        return data
    }

    // Login
    async loginUser(loginCredentials) {
            console.log("Login Credentials", loginCredentials.username)

        try {
            const password = loginCredentials.password
            console.log("Password", password)

            const user = await this.db.users.findOne({
                where: {
                    username: loginCredentials.username,
                }
            })

            if(!user){
                // throw "No record fetched"
                throw new Error('database failed to connect');
                //  return console.log("No record fetched")
            } else {
                
                console.log("userPassword: ", user.password)
                console.log(password)
                try {
                    const passwordMatch = await bcrypt.compare(password, user.password)
                    console.log('Match Result', passwordMatch)
                    if (passwordMatch) {
                        return generateAccessToken({ username: loginCredentials.username })
                    } else {
                        // throw 'Credentials is invalid!'
                        throw passwordMatch
                        // return error
                    }
                } catch (error) {
                    // console.log('Error: ', error)
                    // return error
                }
            }
        
        } catch (error) {
                console.log('Error: ', error)
        }
    }
}

module.exports = new UsersRepository()
