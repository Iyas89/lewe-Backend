const {Router} = require('express');
const {createCategoryHandler} = require('../handlers/createCategoryHandler');
const {getAllCategoriesHandler} = require('../handlers/getAllCategoriesHandler');
const {updateCategoryHandler} = require('../handlers/updateCategoryHandler');
const {getCategoryByIdHandler} = require('../handlers/getCategoryByIdHandler');

const categoryRouter = Router();

categoryRouter.post('/', createCategoryHandler);
categoryRouter.get("/",getAllCategoriesHandler);
categoryRouter.put("/",updateCategoryHandler);
categoryRouter.get("/:id",getCategoryByIdHandler);

module.exports = categoryRouter;
