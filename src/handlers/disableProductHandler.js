const {disableProduct} = require('../controllers/disableProduct');

const disableProductHandler = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await disableProduct(id);
        res.status(200).json(product);
    } catch (error) {
        res.status(400).json(error);
    }
};

module.exports = { disableProductHandler };