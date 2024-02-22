const { sendInvoice } = require("../controllers/sendInvoice"); 

const sendInvoiceHandler = async (req, res) => {
    const invoiceData = req.body;
    try {
        const result = await sendInvoice(invoiceData);
        res.status(200).json({ message: "Invoice sent successfully", result });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
    }

    module.exports = { sendInvoiceHandler };