const { Category } = require('../db');

const updateCategory = async (id,name) => {
    try {
        const updatedCategory = await Category.update({ name }, {
            where: {
                id: id
            }
        });
        return updatedCategory;
    } catch (error) {
        throw new Error(error.message);
    }
}
module.exports = { updateCategory };
