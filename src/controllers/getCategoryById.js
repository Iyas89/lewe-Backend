const { Articles } = require("../db");

const getCategoryById = async (id) => {
  try {
    if (id) {
      const categoryProducts = await Articles.findAll({
        where: {
          CategoryId:  id ,
        },
      });
        if (categoryProducts === null) {
            throw new Error("No se encontraron productos en esta categoría");
        }
      return categoryProducts;
    }
  } catch (error) {
    throw new Error(error.message);
  }
};
module.exports = { getCategoryById };
