module.exports = (sequelize, DataTypes, Model) => {
    class Containers extends Model {}

    Containers.init(
        {   container_id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                allowNull: false,
                autoIncrement: true
            },
            name: {
                type: DataTypes.STRING,
            },
            refill_price: {
                type: DataTypes.DOUBLE,
            },
            capacity: {
                type: DataTypes.STRING,
            },
            picture: {
                type: DataTypes.BLOB("long"),
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
            modelName: 'containers',
            tableName: 'containers',
            timestamps: false
        }
    )

    return Containers
}
