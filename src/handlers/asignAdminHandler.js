const { asignAdmin } = require('../controllers/asignAdmin');

const asignAdminHandler = async (req, res) => {
    const {id} = req.body;
    try {
        await asignAdmin(id);
        res.status(200).json({message: 'Admin asignado con éxito'});
    } catch (error) {
        res.status(400).json({error: error.message});
    } };

module.exports = { asignAdminHandler };