const { mailSender } = require("../utils/nodemailer");
const { Articles } = require("../db");
const { Order } = require("../db");
const { OrderArticles } = require("../db");
const { invoice } = require("../utils/invoice");

const sendInvoice = async (invoiceData) => {
  // Recorre cada artículo vendido en la factura
  const data = invoiceData[0];
  let orderPrice = 0;
  const articlesPrice = data.articles.map((item) => {
    orderPrice += item.price * item.quantity;
  });

  for (const item of data.articles) {
    const articleId = item.id;
    const size = item.size;
    const quantitySold = +item.quantity; // Cantidad vendida
    console.log(quantitySold)
    const article = await Articles.findByPk(articleId);
    if (!article) {
      throw new Error(
        `El artículo con ID ${articleId} no se encontró en la base de datos`
      );
    }
  
    // Verifica si hay suficiente stock disponible para el tamaño seleccionado
    const stockField = `stock${size.toUpperCase()}`;
    if (article[stockField] >= quantitySold) {
      // Resta la cantidad vendida del stock del tamaño correspondiente
      article[stockField] -= quantitySold;
      // Aumenta el contador de artículos vendidos
      article.sold = +article.sold + +quantitySold;
      // Resta la cantidad vendida del stock general del artículo
      article.stock -= quantitySold;
  
      // Guarda los cambios en la base de datos
      await article.save();
    } else {
      throw new Error(
        `No hay suficiente stock disponible para el artículo con ID ${articleId} y tamaño ${size}`
      );
    }
  }
  // Crea una nueva orden con los datos de la factura
  const orderData = data.order;

  const orderToCreate = {
    customerMail: orderData.customerMail,
    customerName: orderData.customerName,
    customerAddress: orderData.customerAddress,
    customerPhone: orderData.customerPhone,
    date: orderData.date,
    price: orderPrice,
  };

  
  const newOrder = await Order.create(orderToCreate);

  data.articles.forEach(async (item) => {
    await OrderArticles.create({
        OrderId: newOrder.id, // El ID de la nueva orden
        ArticleId: item.id,
        quantity: item.quantity,
        size: item.size
    });
});
invoiceData[0].order.id = newOrder.id;
invoiceData[0].order.price = orderPrice;

  await mailSender(invoiceData);
  // Envía la factura por correo electrónico
};

module.exports = { sendInvoice };
