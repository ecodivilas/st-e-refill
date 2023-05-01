module.exports = (sequelize, DataTypes, Model) => {
    class OrderItems extends Model {}

    OrderItems.init(
        {   order_item_id: {
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
                //added
                // unique: true,
                // references: {
                // model: this.db.containers,
                // key: 'container_id'
                // }
            },
            unit_price: {
                type: DataTypes.DOUBLE,
            },
            quantity: {
                type: DataTypes.INTEGER,
                allowNull: false,
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
            modelName: 'order_items',
            tableName: 'order_items',
            timestamps: false
        }
    )

    return OrderItems
}
