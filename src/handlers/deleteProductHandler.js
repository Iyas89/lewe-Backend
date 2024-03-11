const {deleteProduct} = require("../controllers/deleteProduct");

const deleteProductHandler = async (req, res) => {
    try {
        const { id } = req.params;
        await deleteProduct(id);
        res.status(200).send("Producto eliminado correctamente");
    } catch (error) {
        res.status(400).send(error.message);
    }
};

module.exports = { deleteProductHandler };
// src/routes/productRouter.js
// src/handlers/deleteProductHandler.js
// src/controllers/deleteProduct.js