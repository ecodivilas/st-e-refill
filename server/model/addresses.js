module.exports = (sequelize, DataTypes, Model) => {
    class Addresses extends Model {}

    Addresses.init(
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            user_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            address: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            baranggay: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            city: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            province: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            country: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            tin: {
                type: DataTypes.INTEGER
            },
            description: {
                type: DataTypes.STRING
            }
        },
        {
            sequelize,
            modelName: 'delivery_addresses',
        }
    )

    return Addresses
}
