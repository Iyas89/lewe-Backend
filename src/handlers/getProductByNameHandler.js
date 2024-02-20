const { getProductByName } = require('../controllers/getProductByName');

const getProductByNameHandler = async (req, res) => {
    const { name } = req.query;
    try {
        const product = await getProductByName(name);
        return res.status(200).json({ message: `Producto encontrado`, product });
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
    }
    module.exports = { getProductByNameHandler };