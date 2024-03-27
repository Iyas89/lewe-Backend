const {analytics} = require("../controllers/analytics");

const analyticsHandler = async (req, res) => {
    try {
        const data = await analytics();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
    };

module.exports = { analyticsHandler };
