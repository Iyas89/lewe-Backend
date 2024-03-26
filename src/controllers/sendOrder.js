const sendOrder = (phoneNumber, order) => {
  // Reemplaza todos los caracteres no numéricos en el número de teléfono
  phoneNumber = phoneNumber.replace(/\D/g, "");
  const articlesList = order[0].articles;
  const customerData = order[0].order;
  
  // Codifica el mensaje para que sea seguro para la URL
  const itemsToOrder = articlesList.map((item) => {
    return {
      name: item.name,
      quantity: item.quantity,
      price: item.price,
    };
  })
const {customerName,customerMail,customerAddress} = customerData;

  let message = `Hola! Me gustaria ordenar los siguientes productos :\n\n`;
  let total = 0;
  
  itemsToOrder.forEach(item => {
    // Por cada objeto, agregamos la información del artículo al mensaje
    const { name, quantity, price } = item;
      message += `*${name}*\n`;
      message += `Cantidad: ${quantity}\n`; // Cada artículo individual tendrá una cantidad de 1
      message += `Precio Unitario: $${price}\n\n`; // El precio es el mismo para todos los artículos
      total += parseFloat(price * quantity);
  });
  message += `*Total: $${total}* \n
*Información de Contacto:*\n
Nombre: ${customerName}\n
Correo: ${customerMail}\n
Dirección: ${customerAddress}\n`;
  const encodedMessage = encodeURIComponent(message);

  // Construye el enlace de WhatsApp
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return whatsappLink;
};
module.exports = { sendOrder };
