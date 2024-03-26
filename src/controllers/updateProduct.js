const { Articles } = require("../db");

const updateProduct = async (
  id,
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
  stock,
  image,
  size,
  sold,
  CategoryId
) => {
  try {
    const productToUpdate = await Articles.findOne({
      where: {
        id: id,
      },
    });
    if (!productToUpdate) {
      throw new Error("El producto no existe");
    }
    const product = await Articles.update(
      {
        id,
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
        stock,
        image,
        size,
        sold,
        CategoryId,
      },
      {
        where: {
          id: id,
        },
      }
    );
    return product;

  } catch (error) {
    throw new Error(error.message);
  }
};
module.exports = { updateProduct };
