const { updateCategory } = require('../controllers/updateCategory');

const updateCategoryHandler = async (req, res) => {
    const {id,name} = req.body;
    try {
      const updatedCategory = await updateCategory(id,name);
      res.status(200).json(`Se ha actualizado la categoría a: ${name}`);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
}
module.exports = { updateCategoryHandler };