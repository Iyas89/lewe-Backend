const {
    createProduct,
    getProductId,
    getAllProducts,
    putProduct,
    deleteProduct,
    filterProduct,
    putStatusProduct
  } = require("../controllers/productController");
  

  const postProduct = async (request, response) => {
    const {
      id,
      productName,
      description,
      price,
      stock,
      image,
      priceProduct,
      sold,
      CategoryId
      
    } = request.body;
    try {
      const { message, dataNewProduct, listProducts } = await createProduct(
      id,
      productName,
      description,
      price,
      stock,
      image,
      priceProduct,
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
  
  const productDeleted = async (request, response) => {
    const { id } = request.params;
    try {
      const { message, dataDeleteProduct, listProducts } = await deleteProduct(
        id
      );
      return response
        .status(200)
        .json({ deleteProduct: true, message, dataDeleteProduct, listProducts });
    } catch (error) {
      return response
        .status(400)
        .json({ deleteProduct: false, message: error.message, listProducts: [] });
    }
  };
  
  const productUpdated = async (request, response) => {
    const {
        id,
        productName,
        description,
        price,
        stock,
        image,
        priceProduct,
        sold,
        CategoryId
    } = request.body;
    try {
      const {
        message,
        dataUpdateProduct: { product },
        listProducts,
      } = await putProduct(
        id,
      productName,
      description,
      price,
      stock,
      image,
      priceProduct,
      sold,
      CategoryId
      );
      return response.status(200).json({
        updateProduct: true,
        message,
        dataUpdateProduct: product,
        listProducts,
      });
    } catch (error) {
      return response
        .status(400)
        .json({ updateProduct: false, message: error.message, listProducts: [] });
    }
  };
  
  const productStatusUpdated = async (request, response) => {
    const {
      id,
      status
    } = request.body;
    try {
      const {
        message,
        dataUpdateProduct: { product },
        listProducts,
      } = await putStatusProduct(
        id,
        status
      );
      return response.status(200).json({
        updateProduct: true,
        message,
        dataUpdateProduct: product,
        listProducts,
      });
    } catch (error) {
      return response
        .status(400)
        .json({ updateProduct: false, message: error.message, listProducts: [] });
    }
  };
  
  
  module.exports = {
    postProduct,
    getNameProduct,
    getIdProduct,
    productDeleted,
    productUpdated,
    productStatusUpdated
  };