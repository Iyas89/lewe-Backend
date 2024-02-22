const {DataTypes} = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('OrderArticles', {
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        size: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {timestamps: false});
};