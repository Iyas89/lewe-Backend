const {contact} = require("../controllers/contact");

const contactHandler = (req, res) => {
    const contactBody = req.body;
    try {
        contact(contactBody);
        res.status(200).json({
            message: "Mensaje enviado con éxito",
        });
    } catch (error) {
        res.status(500).json({
            message: "Hubo un error al enviar el mensaje",
        });
    }};

module.exports = {contactHandler};