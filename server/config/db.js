const { DataTypes, Model, Sequelize } = require('sequelize')

const connect = () => {
    const hostName = process.env.DB_HOST
    const database = process.env.DB_NAME
    const userName = process.env.DB_USER
    const password = process.env.DB_PASSWORD

    const sequelize = new Sequelize(database, userName, password, {
        host: hostName,
        dialect: 'postgres',
        pool: {
            max: 10,
            min: 0,
            acquire: 20000,
            idle: 5000,
        },
        define: {
            timestamps: false,
        },
    })

    const db = {}
    db.Sequelize = Sequelize
    db.sequelize = sequelize

    sequelize
        .authenticate()
        .then(() => {
            console.log('Connection has been established successfully.')
        })
        .catch((error) => {
            console.error('Unable to connect to the database: ', error.message)
        })

    db.users = require('../model/users')(sequelize, DataTypes, Model)

    return db
}

module.exports = { connect }
