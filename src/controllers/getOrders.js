const {OrderArticles} = require("../db");
const {Articles} = require("../db");
const {Order} = require("../db");

const getOrders = async () => {
    const orders = await OrderArticles.findAll();
    const articles = await Articles.findAll();
    const allOrders = await Order.findAll();
  
    const groupedOrders = {};
    orders.forEach(order => {
        if (!groupedOrders[order.OrderId]) {
            groupedOrders[order.OrderId] = [];
        }
        groupedOrders[order.OrderId].push({
            ArticleId: order.ArticleId,
            name: articles.find(article => article.id === order.ArticleId).name,
            image: articles.find(article => article.id === order.ArticleId).image,
            quantity: order.quantity,
            size: order.size,
            total: articles.find(article => article.id === order.ArticleId).price * order.quantity,
        });
    });
  
    const groupedOrdersArray = Object.keys(groupedOrders).map(orderId => ({
        OrderId: orderId,
        articles: groupedOrders[orderId]
    }));
  
    // Agregar el correo electrónico y el nombre del cliente a cada orden
    groupedOrdersArray.forEach(order => {
      const foundOrder = allOrders.find(o => o.id === order.OrderId);

      if (foundOrder) {
        order.orderDate = foundOrder.date.toISOString().split('T')[0];
        order.customerMail = foundOrder.customerMail;
        order.customerName = foundOrder.customerName;
        order.costumerPhone = foundOrder.costumerPhone;
        // Aquí puedes agregar más campos del cliente si los necesitas
      }
    });
  
    // Calcular el total de la orden sumando los totales de cada artículo en la orden
    groupedOrdersArray.forEach(order => {
        order.total = order.articles.reduce((acc, article) => acc + article.total, 0);
    });
  
    return groupedOrdersArray;
  };
  
  module.exports = { getOrders };