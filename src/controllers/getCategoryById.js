const { Articles } = require("../db");
const { Category } = require("../db");

const getCategoryById = async (id) => {
  try {
    if (id === "indumentaria") {
      const allProducts = await Articles.findAll(
        {
          where: {
            isActive: true,
        },
        }
      );
      if (allProducts === null) {
        throw new Error("No se encontraron productos en esta categoría");
      }
      const allProductsFiltered = allProducts.filter(
        (product) =>
          product.CategoryId !== "108312e1-bed1-4468-aaed-657307fb2267" &&
          product.CategoryId !== "4567773c-ab96-41aa-b9fa-ffa331fe4d7f" &&
          product.CategoryId !== "d5033fd4-8d56-4e02-b816-78b4f65ee660"
      );
      return { products: allProductsFiltered, name: "Indumentaria" };
    }

    if (id) {
      const categoryName = await Category.findByPk(id);
      const categoryProducts = await Articles.findAll({
        where: {
          isActive: true,
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
