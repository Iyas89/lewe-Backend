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
        descriptionDetail: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        stockXS: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        stockS: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        stockM: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        stockL: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        stockXL: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        stockXXL: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        stock: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false
        },
        size: {
            type: DataTypes.STRING,
            allowNull: true
        },
        sold: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
        },
        isActive: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        }

    }, {timestamps: false});
}