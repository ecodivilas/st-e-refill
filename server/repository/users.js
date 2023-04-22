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

    // Login w/ JWT
    async loginUser(loginCredentials) {
            console.log("Login Credentials", loginCredentials.username)

        try {
            const password = loginCredentials.password
            console.log("Password", password)

            const user = await this.db.users.findOne({
                where: {
                    username: loginCredentials.username,
                    // include: [this.db.addresses]
                }
            })

            // console.log("Fetch User Data: ", user)

            if(!user){
                throw new Error('database failed to connect');
            } else {
                try {
                    const passwordMatch = await bcrypt.compare(password, user.password)
                    console.log('Match Result', passwordMatch)
                    if (passwordMatch) {
                        const generatedToken = generateAccessToken({ username: loginCredentials.username })
                        if (generatedToken){
                            const verifiedUserData = await this.db.users.findOne({
                                where: { "id": user.id },
                                include: [this.db.addresses]
                            })

                        // const { order_items, ...newOrder } = idealData;

                        //     console.log("queried: ", verifiedUserData)
                        //     console.log("username", verifiedUserData.dataValues.username)
                        //     console.log("baranggay", verifiedUserData.dataValues.delivery_address.dataValues.baranggay)
                            // generatedToken["userData"] = verifiedUserData
                        }
                        return generatedToken
                    } else {
                        throw passwordMatch
                    }
                } catch (error) {
                   console.log('Error: ', error)
                }
            }
        
        } catch (error) {
                console.log('Error: ', error)
        }
    }


    // Register User
    async registerUser(user) {
        console.log("User Details: ", user)
        let userData = {}

        try {
            const password = user.user.password
            const salt = bcrypt.genSaltSync(10)
            const hashedPassword = bcrypt.hashSync(password, salt)

            userData = { ...user.user, password: hashedPassword }

            const createdUser = await this.db.users.create(userData)
            if (createdUser) {
                user.address.user_id = createdUser.id
                console.log("Appending the user_id: ", user.address)
                try {
                    const createAddress = await this.db.addresses.create(user.address)
                    if(createAddress) {
                        console.log("User and Address Successfully Created")
                        return "Successful"
                    } else {
                        return "Address was not created"
                    }
                } catch (error) {
                    console.log("Error: ", error)
                }
                
            } else {
                return true
            }

        } catch (error) {
            console.log('Error: ', error)
        }
    }
}

module.exports = new UsersRepository()
