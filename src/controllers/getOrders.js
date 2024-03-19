const {OrderArticles} = require("../db");

const getOrders = async () => {
    const orders = await OrderArticles.findAll();

    const groupedOrders = {};
    orders.forEach(order => {
      if (!groupedOrders[order.OrderId]) {
        groupedOrders[order.OrderId] = [];
      }
      groupedOrders[order.OrderId].push({
        ArticleId: order.ArticleId,
        quantity: order.quantity,
        size: order.size
      });
    });

    const groupedOrdersArray = Object.keys(groupedOrders).map(orderId => ({
      OrderId: orderId,
      articles: groupedOrders[orderId]
    }));

    return groupedOrdersArray;
};

module.exports = { getOrders };