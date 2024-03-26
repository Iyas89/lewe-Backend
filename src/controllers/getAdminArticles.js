const {Articles} = require('../db');

const getAdminArticles = async () => {
    try {
        const products = await Articles.findAll();
        return products;
    } catch (error) {
        return error;
    }
}

module.exports = { getAdminArticles };