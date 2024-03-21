const {handleLogin} = require('../controllers/handleLogin');

const handleLoginHandler = async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log(req.body)
        const user = await handleLogin(email, password);
        res.status(200).json({message: `Bienvenido ${user.name}`});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
    };

module.exports = { handleLoginHandler };