const {getOrders} = require("../controllers/getOrders");

const getOrdersHandler = async (req, res) => {
    try {
        const orders = await getOrders();
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
    };

module.exports = { getOrdersHandler };
