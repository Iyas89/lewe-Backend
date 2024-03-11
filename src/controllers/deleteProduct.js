const {Articles} = require("../db");

const deleteProduct = async (id) => {
    const product = await Articles.findByPk(id);
    if (!product) {
        throw new Error("No se encontro el producto");
    }
    await product.destroy();
};

module.exports = { deleteProduct };