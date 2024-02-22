const {DataTypes} = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Order', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
       customerMail: {
            type: DataTypes.STRING,
            allowNull: false
        },
        customerName: {
            type: DataTypes.STRING,
            allowNull: true
        },
        customerAddress: {
            type: DataTypes.STRING,
            allowNull: true
        },
        customerPhone: {
            type: DataTypes.STRING,
            allowNull: true
        },
        date : {
            type: DataTypes.DATE,
            allowNull: false
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
      
    }, {timestamps: false});
};