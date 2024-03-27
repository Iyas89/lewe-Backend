const {Articles, Category} = require('../db');
const {getOrders} = require('./getOrders');

const analytics = async () => {
    const articles = await Articles.findAll();
    const categories = await Category.findAll();
    const disabledArticles = articles.filter((article) => !article.isActive);
    const orders = await getOrders();
    const totalOrders = orders.length;
    const grossIncome = orders.reduce((acc, order) => acc + order.total, 0);
    const mostSold = articles.sort((a, b) => b.sold - a.sold).slice(0, 5);

    const totalArticles = articles.length;

    const allCategories = categories.map((category) => category.dataValues.name);
    const categoriesNoIndu = categories.filter((category) => category.dataValues.name !== 'Indumentaria');
    
    const categoriesData = await Promise.all(categoriesNoIndu.map(async (category) => {
        const categoryProducts = await Articles.findAll({
            where: {
                CategoryId: category.id,
            },
        });
        const inactives = categoryProducts.filter((article) => !article.isActive);
        const actives = categoryProducts.filter((article) => article.isActive);
        return { category: category.dataValues.name , products: categoryProducts.length, actives: actives.length, inactives: inactives.length};
    }));

    return { totalArticles, totalOrders, grossIncome, mostSold, allCategories, categoriesData, disabledArticles };
};

module.exports = { analytics };