module.exports = (sequelize, DataTypes, Model) => {
    class Orders extends Model {}

    Orders.init(
        {   id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                allowNull: false,
                autoIncrement: true
            },
            customer_id: {
                type: DataTypes.INTEGER,
            },
            order_date: {
                type: DataTypes.DATE,
            },
            delivery_date: {
                type: DataTypes.DATE,
            },
            mode_of_payment: {
                type: DataTypes.STRING,
            },
            status: {
                type: DataTypes.STRING,
            },
            is_paid: {
                type: DataTypes.BOOLEAN,
            }
        },
        {
            sequelize,
            modelName: 'orders',
            // tableName: 'orders'
        }
    )

    return Orders
}
