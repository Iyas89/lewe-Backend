const {OrderArticles} = require("../db");
const {Articles} = require("../db");

const getOrders = async () => {
    const orders = await OrderArticles.findAll();
    const articles = await Articles.findAll();

    const groupedOrders = {};
    orders.forEach(order => {
      if (!groupedOrders[order.OrderId]) {
        groupedOrders[order.OrderId] = [];
      }
      groupedOrders[order.OrderId].push({
        ArticleId: order.ArticleId.slice(-6),
        name: articles.find(article => article.id === order.ArticleId).name,
        image: articles.find(article => article.id === order.ArticleId).image,
        quantity: order.quantity,
        size: order.size
      });
    });

    const groupedOrdersArray = Object.keys(groupedOrders).map(orderId => ({
      OrderId: orderId.slice(-6),
      articles: groupedOrders[orderId]
    }));

    return groupedOrdersArray;
};

module.exports = { getOrders };