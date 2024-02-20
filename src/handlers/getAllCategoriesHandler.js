const { getAllCategories } = require('../controllers/getAllCategories');

const getAllCategoriesHandler = async (req, res) => {
    try {
        const categories = await getAllCategories();
        res.status(200).json(categories);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
module.exports = { getAllCategoriesHandler };