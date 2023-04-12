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
            is_new: {
                type: DataTypes.BOOLEAN,
            },
            price: {
                type: DataTypes.DOUBLE,
            },
            capacity: {
                type: DataTypes.STRING,
            },
            description: {
                type: DataTypes.STRING,
            },
            picture: {
                type: DataTypes.BLOB("long"),
            },
        },
        {
            sequelize,
            modelName: 'Containers',
            // tableName: 'containers'
        }
    )

    return Containers
}
