module.exports = (sequelize, DataTypes, Model) => {
    class Containers extends Model {}

    Containers.init(
        {   id: {
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
        },
        {
            sequelize,
            modelName: 'containers',
            // tableName: 'containers'
        }
    )

    return Containers
}
