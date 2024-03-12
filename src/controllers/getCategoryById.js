const { Articles } = require("../db");
const { Category } = require("../db");

const getCategoryById = async (id) => {
  try {
    if (id === "indumentaria") {
      const allProducts = await Articles.findAll();
      if (allProducts === null) {
        throw new Error("No se encontraron productos en esta categoría");
      }
      const allProductsFiltered = allProducts.filter(
        (product) =>
          product.CategoryId !== "f75de8fb-83f7-444a-a6b9-b3f151fae7a2" &&
          product.CategoryId !== "67726fd5-b41a-4320-ba42-c9e8f484087f" &&
          product.CategoryId !== "ab178e9d-253f-4fe5-a9a0-59cac1c1cdf7"
      );
      return { products: allProductsFiltered, name: "Indumentaria" };
    }

    if (id) {
      const categoryName = await Category.findByPk(id);
      const categoryProducts = await Articles.findAll({
        where: {
          CategoryId: id,
        },
      });
      const name = categoryName.dataValues.name;

      if (categoryProducts === null) {
        throw new Error("No se encontraron productos en esta categoría");
      }

      return { products: categoryProducts, name: name };
    }
  } catch (error) {
    throw new Error(error.message);
  }
};
module.exports = { getCategoryById };
