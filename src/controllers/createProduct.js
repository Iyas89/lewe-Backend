const {Articles} = require("../db.js");

const createProduct = async (name, description, price, stockXS, stockS, stockM, stockL, stockXL, stockXXL, stock, image, size, sold, CategoryId) => {
    const newProduct = await Articles.create({
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
    });
    const listProducts = await Articles.findAll();
    return {
        message: `Producto: ${name} creado con éxito.`,
        dataNewProduct: newProduct,
        listProducts
    };
    }

    module.exports = { createProduct };