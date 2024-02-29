const { Articles } = require("../db");
const { Category } = require("../db");

const getCategoryById = async (id) => {
  try {
    if (id) {
      const categoryName = await Category.findByPk(id);
      const categoryProducts = await Articles.findAll({
        where: {
          CategoryId:  id ,
        },
      });
      const name = categoryName.dataValues.name;

        if (categoryProducts === null) {
            throw new Error("No se encontraron productos en esta categoría");
        }

     return {products: categoryProducts, name: name};
     
    }
  } catch (error) {
    throw new Error(error.message);
  }
};
module.exports = { getCategoryById };
