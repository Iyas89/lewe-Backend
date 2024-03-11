const { getProductById } = require('../controllers/getProductById');

const getProductByIdHandler = async (req, res) => {
    const { id } = req.params;
    console.log(id)
    try {
        const product = await getProductById(id);
        return res.status(200).json(product);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
}
module.exports = { getProductByIdHandler };