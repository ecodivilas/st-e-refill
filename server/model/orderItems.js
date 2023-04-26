module.exports = (sequelize, DataTypes, Model) => {
    class OrderItems extends Model {}

    OrderItems.init(
        {   id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                allowNull: false,
                autoIncrement: true
            },
            order_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            container_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            unit_price: {
                type: DataTypes.DOUBLE,
            },
            quantity: {
                type: DataTypes.INTEGER,
                allowNull: false,
            }
        },
        {
            sequelize,
            modelName: 'order_items'
        }
    )

    return OrderItems
}
