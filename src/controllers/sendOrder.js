const sendOrder = (phoneNumber, order) => {
    // Reemplaza todos los caracteres no numéricos en el número de teléfono
    phoneNumber = phoneNumber.replace(/\D/g, '');

    // Codifica el mensaje para que sea seguro para la URL
    const {name,price,quantity} = order;

    const encodedMessage = encodeURIComponent(`¡Hola! Me gustaría ordenar ${quantity} ${name} por un total de $${price * quantity}.`);

    // Construye el enlace de WhatsApp
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    return whatsappLink;
}
module.exports = { sendOrder };