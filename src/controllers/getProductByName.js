const { Articles } = require("../db");
const { Op } = require("sequelize");

const getProductByName = async (name) => {
    try {
        if(name){
            const product = await Articles.findOne({
            where: {
                name: {
                [Op.iLike]: `%${name}%`,
                },
            },
            });
            if(product === null){
                throw new Error("Producto no encontrado");
            }
            return product;
        }
        const allProducts = await Articles.findAll();
        return allProducts;

    } catch (error) {
        throw new Error(error.message);
    }
    };
    module.exports = { getProductByName };