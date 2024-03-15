const { deleteUser } = require('../controllers/deleteUser');

const deleteUserHandler = async (req, res) => {
    const {id} = req.params;
    try {
        await deleteUser(id);
        res.status(200).json({message: 'Usuario eliminado con éxito'});
    } catch (error) {
        res.status(400).json({error: error.message});
    } };

module.exports = { deleteUserHandler };