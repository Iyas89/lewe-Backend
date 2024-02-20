const {
    getProductId,
  } = require("../controllers/productController");
  
  const getIdProduct = async (request, response) => {
    const { id } = request.params;
    try {
      const { message, product } = await getProductId(id);
      return response
        .status(200)
        .json({ getProductoId: true, message, listProducts: [product] });
    } catch (error) {
      return response
        .status(400)
        .json({ getProductoId: false, message: error.message, listProducts: [] });
    }
  };

  module.exports = {
    getIdProduct,
  };