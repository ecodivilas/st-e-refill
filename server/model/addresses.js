module.exports = (sequelize, DataTypes, Model) => {
    class Addresses extends Model {}

    Addresses.init(
        {
            delivery_address_id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            user_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                underscored: true
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
            country: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            tin: {
                type: DataTypes.INTEGER
            },
            description: {
                type: DataTypes.STRING
            },
            created_at: {
                type: DataTypes.DATE,
                defaultValue: sequelize.literal('NOW()'),
                allowNull: false
            },
            updated_at: {
                type: DataTypes.DATE,
                defaultValue: sequelize.literal('NOW()'),
                allowNull: false
            },
            deleted_at: {
                type: DataTypes.DATE,
                defaultValue: null,
                allowNull: true
            }
        },
        {
            sequelize,
            modelName: 'delivery_addresses',
            timestamps: false
        }
    )

    return Addresses
}
