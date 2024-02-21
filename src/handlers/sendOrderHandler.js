const { sendOrder } = require("../controllers/sendOrder");

const sendOrderHandler = async (req, res) => {
    // Reemplaza todos los caracteres no numéricos en el número de teléfono
    const phoneNumber = "+5493517658536"; //order viene del carrito
    const order = req.body;
    try {
        // Send the order to the WhatsApp API
        // ...
        const orderToSend = sendOrder(phoneNumber, order);
        res.status(200).json({orderToSend});
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
module.exports = { sendOrderHandler };
