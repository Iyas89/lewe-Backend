const {Articles} = require("../db.js");

const createProduct = async (name, description,descriptionDetail, price, stockXS, stockS, stockM, stockL, stockXL, stockXXL, image, size, sold, CategoryId) => {
    const totalStock = stockXS + stockS + stockM + stockL + stockXL + stockXXL;
    const newProduct = await Articles.create({
        name,
        description,
        descriptionDetail,
        price,
        stockXS,
        stockS,
        stockM,
        stockL,
        stockXL,
        stockXXL,
        stock: totalStock,
        image,
        size,
        sold,
        CategoryId
    });
    const listProducts = await Articles.findAll();
    return {
        message: `Producto: ${name} creado con éxito.`,
        dataNewProduct: newProduct,
        listProducts
    };
    }

    module.exports = { createProduct };