module.exports = (sequelize, DataTypes, Model) => {
    class Orders extends Model {}

    Orders.init(
        {
            order_id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                allowNull: false,
                autoIncrement: true,
            },
            user_id: {
                type: DataTypes.INTEGER,
                underscored: true,
            },
            order_date: {
                type: DataTypes.DATE,
                underscored: true,
            },
            delivery_date: {
                type: DataTypes.DATE,
                underscored: true,
            },
            delivery_time: {
                type: DataTypes.TIME,
                underscored: true,
            },
            mode_of_payment: {
                type: DataTypes.STRING,
                underscored: true,
            },
            status: {
                type: DataTypes.STRING,
            },
            is_paid: {
                type: DataTypes.BOOLEAN,
                underscored: true,
            },
            created_at: {
                type: DataTypes.DATE,
                defaultValue: sequelize.literal('NOW()'),
                allowNull: false,
            },
            updated_at: {
                type: DataTypes.DATE,
                defaultValue: sequelize.literal('NOW()'),
                allowNull: false,
            },
            archieved_at: {
                type: DataTypes.DATE,
                defaultValue: null,
                allowNull: true,
            },
            deleted_at: {
                type: DataTypes.DATE,
                defaultValue: null,
                allowNull: true,
            },
        },
        {
            sequelize,
            modelName: 'orders',
            tableName: 'orders',
            timestamps: false,
        }
    )

    return Orders
}
