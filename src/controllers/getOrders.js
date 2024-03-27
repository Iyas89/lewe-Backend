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
          size: order.size,
          // Agregar la propiedad total por artículo
          total: articles.find(article => article.id === order.ArticleId).price * order.quantity
      });
  });

  const groupedOrdersArray = Object.keys(groupedOrders).map(orderId => ({
      OrderId: orderId.slice(-6),
      articles: groupedOrders[orderId]
  }));

  // Calcular el total de la orden sumando los totales de cada artículo en la orden
  groupedOrdersArray.forEach(order => {
      order.total = order.articles.reduce((acc, article) => acc + article.total, 0);
  });

  return groupedOrdersArray;
};

module.exports = { getOrders };