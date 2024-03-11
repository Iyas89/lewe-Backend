const { Articles } = require("../db");

const getProductById = async (id) => {
    const product = await Articles.findByPk(id);
    console.log(product)
    if (!product) {
        throw new Error("Product not found");
    }
    return product;
};
module.exports = { getProductById };