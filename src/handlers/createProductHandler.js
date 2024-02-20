const { createProduct } = require("../controllers/createProduct");

const createProductHandler = async (request, response) => {
    const {
        name,
        description,
        price,
        stockXS,
        stockS,
        stockM,
        stockL,
        stockXL,
        stockXXL,
        stock,
        image,
        size,
        sold,
        CategoryId
    } = request.body;
    try {
      const { message, dataNewProduct, listProducts } = await createProduct(
        name,
        description,
        price,
        stockXS,
        stockS,
        stockM,
        stockL,
        stockXL,
        stockXXL,
        stock,
        image,
        size,
        sold,
        CategoryId
      );
      return response.status(200).json({
        createProduct: true,
        message,
        dataNewProduct,
        listProducts,
      });
    } catch (error) {
      return response
        .status(400)
        .json({ createProduct: false, message: error.message, listProducts: [] });
    }
  };
  
  module.exports = { createProductHandler };