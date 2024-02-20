const { Category } = require("../db");
const { Op } = require("sequelize");

const createCategory = async (name) => {
  const existingCategory = await Category.findOne({
    where: {
      name: { [Op.iLike]: `%${name}%` },
    },
  });
  if (existingCategory) {
    throw new Error("Ya existe esa categoría");
  }
  const newCategory = await Category.create({ name });

  return newCategory;
};

module.exports = { createCategory };
