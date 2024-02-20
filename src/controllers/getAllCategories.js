const { Category } = require('../db');

const getAllCategories  = async () => {
    try {
        const categories = await Category.findAll();
        return categories;
    } catch (error) {
        throw new Error(error.message);
    }
}
module.exports = { getAllCategories };
