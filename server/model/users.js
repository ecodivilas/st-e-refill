module.exports = (sequelize, DataTypes, Model) => {
    class Users extends Model {}

    // READ SEQUELIZE ORM API DOCUMENTATIONS
    Users.init(
        {
            username: {
                type: DataTypes.STRING,
                primaryKey: true,
            },
            password: {
                type: DataTypes.STRING,
            },
            first_name: {
                type: DataTypes.STRING,
            },
            last_name: {
                type: DataTypes.STRING,
            },
            gender: {
                type: DataTypes.STRING,
            },
            age: {
                type: DataTypes.INTEGER,
            },
            delivery_address: {
                type: DataTypes.STRING,
            },
            phone: {
                type: DataTypes.STRING,
            },
            email: {
                type: DataTypes.STRING,
            },
            role: {
                type: DataTypes.STRING,
            },
        },
        {
            sequelize,
            modelName: 'users',
            // tableName: 'users',
        }
    )

    return Users
}
