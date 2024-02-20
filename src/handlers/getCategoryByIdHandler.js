const { getCategoryById } = require('../controllers/getCategoryById');

const getCategoryByIdHandler = async (req, res) => {
    const { id } = req.params;
    try {
        const categoryProducts = await getCategoryById(id);
        return res.status(200).json({categoryProducts});
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
}
module.exports = { getCategoryByIdHandler };