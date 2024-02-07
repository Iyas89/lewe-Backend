const {DataTypes} = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Articles', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        stock: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false
        },
        color: {
            type: DataTypes.STRING,
            allowNull: false
        },
        size: {
            type: DataTypes.STRING,
            allowNull: false
        },
        sold: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
        }

    }, {timestamps: false});
}