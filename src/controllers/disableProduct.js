const {Articles} = require('../db');

const disableProduct = async (id) => {
    try {
        const product = await Articles.findByPk(id);
        product.isActive === true ? product.isActive = false : product.isActive = true;
        await product.save();
        return product;
    } catch (error) {
        return error;
    }
}

module.exports = { disableProduct };