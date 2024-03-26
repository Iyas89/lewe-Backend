const {getAdminArticles} = require("../controllers/getAdminArticles");

const getAdminArticlesHandler = async (req, res) => {
    try {
        const products = await getAdminArticles();
        res.status(200).json(products);
    } catch (error) {
        res.status(400).json(error);
    }
};

module.exports = { getAdminArticlesHandler };

