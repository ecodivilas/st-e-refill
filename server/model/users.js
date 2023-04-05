module.exports = (sequelize, DataTypes, Model) => {
    class Users extends Model {}

    // READ SEQUELIZE ORM API DOCUMENTATIONS
    Users.init(
        {   id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            username: {
                type: DataTypes.STRING,
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
        }
    )

    return Users
}
