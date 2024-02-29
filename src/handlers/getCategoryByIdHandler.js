const { getCategoryById } = require('../controllers/getCategoryById');

const getCategoryByIdHandler = async (req, res) => {
    const { id } = req.params;
    console.log(id);
    try {
        const categoryDetails = await getCategoryById(id);
        return res.status(200).json(categoryDetails);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
}
module.exports = { getCategoryByIdHandler };