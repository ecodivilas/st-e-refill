const bcrypt = require('bcryptjs')
const { connect } = require('../config/db')
const { generateAccessToken } = require('../config/jwt')
const { ValidateEmail } = require('../utilities/utilities')

class UsersRepository {
    db = {}

    constructor() {
        this.db = connect()
    }

    async createUser(user) {

        if(ValidateEmail(user.email)){
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
        } else {
            return "Email is not Valid"
        }
        
    }

    async getUsers() {
        try {
            const users = await this.db.users.findAll({
                order: [['user_id', 'ASC']], where: {deleted_at: null}
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
        console.log(id)
        try {
            const isAddressDestroyed = await this.db.addresses.update({ deleted_at: new Date }, { where:{"user_id": id}})
            const user = await this.db.users.update({ deleted_at: new Date }, { where:{"user_id": id}})
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
                    username: loginCredentials.username
                }
            })

            if(!user){
                throw new Error('database failed to connect');
            } else {
                try {
                    const passwordMatch = await bcrypt.compare(password, user.password)
                    
                    if (passwordMatch) {
                        const generatedToken = generateAccessToken({ username: loginCredentials.username })
                        if (generatedToken){
                            const verifiedUserData = await this.db.users.findOne({
                                where: { "id": user.id },
                                include: [this.db.addresses]
                        })

                        const generatedTokenObject = {"jwt": generatedToken}
                        const updatedData = [generatedTokenObject, verifiedUserData] 
                     
                        return updatedData
                        }
                        // return generatedToken
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
        let userData = {}

        try {
            const password = user.user.password
            const salt = bcrypt.genSaltSync(10)
            const hashedPassword = bcrypt.hashSync(password, salt)

            userData = { ...user.user, password: hashedPassword }

            const createdUser = await this.db.users.create(userData)
            if (createdUser) {
                user.address.user_id = createdUser.user_id
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
                    return error
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
