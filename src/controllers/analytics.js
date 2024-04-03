const {Articles, Category,Order} = require('../db');
const {getOrders} = require('./getOrders');

const analytics = async () => {
    const orders = await getOrders(); // Obtener todas las órdenes
    const monthlySales = []; // Array para almacenar las ventas mensuales
  
    // Calcular el total de ventas mensuales
    orders.forEach(order => {
      // Obtener la fecha de la orden
      const orderDate = new Date(order.orderDate);
      const year = orderDate.getFullYear(); // Obtener el año de la orden
      const month = orderDate.getMonth() + 1; // Obtener el mes de la orden (los meses en JavaScript van de 0 a 11)
  
      // Crear una clave para el mes y el año
      const key = `${year}-${month}`;
  
      // Buscar si ya existe un objeto para este mes y año en monthlySales
      const monthlySaleIndex = monthlySales.findIndex(sale => sale.date === key);
  
      // Si no existe, agregar un nuevo objeto al array
      if (monthlySaleIndex === -1) {
        monthlySales.push({
          date: key,
          revenue: order.total
        });
      } else { // Si ya existe, sumar el total de la orden al total existente
        monthlySales[monthlySaleIndex].revenue += order.total;
      }
    });
  
    // Resto del código existente
    const articles = await Articles.findAll();
    const categories = await Category.findAll();
    const disabledArticles = articles.filter((article) => !article.isActive);
    const totalOrders = orders.length;
    const grossIncome = orders.reduce((acc, order) => acc + order.total, 0);
    let mostSold = articles.sort((a, b) => b.sold - a.sold).slice(0, 5);
    mostSold = mostSold.map(article => ({ name: article.name, sold: article.sold }));
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
  
    return { totalArticles, totalOrders, grossIncome, mostSold, allCategories, categoriesData, disabledArticles, monthlySales };
  };

module.exports = { analytics };