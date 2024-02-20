const {createCategory} = require("../controllers/createCategory");

const createCategoryHandler = async (req, res) => {
    const { name } = req.body;
    console.log(name);
    try {
        const newCategory = await createCategory(name);
        res.status(201).json({message: `Categoría creada con éxito: ${newCategory.name}`});
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};

module.exports = {createCategoryHandler};