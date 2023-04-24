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
                underscored: true
            },
            order_date: {
                type: DataTypes.DATE,
                underscored: true
            },
            delivery_date: {
                type: DataTypes.DATE,
                underscored: true
            },
            delivery_time: {
                type: DataTypes.TIME,
                underscored: true
            },
            mode_of_payment: {
                type: DataTypes.STRING,
                underscored: true
            },
            status: {
                type: DataTypes.STRING,
            },
            is_paid: {
                type: DataTypes.BOOLEAN,
                underscored: true
            }
        },
        {
            sequelize,
            modelName: 'orders',
            tableName: 'orders'
        }
    )

    return Orders
}
