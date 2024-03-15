const {User} = require('../db.js');

const asignAdmin = async (id) => {
    const user = await User.findByPk(id);
    if (!user) {
        throw new Error('Usuario no encontrado');
    }
    if (user.admin) {
        throw new Error('El usuario ya es administrador');
    }
    user.admin = true;
    await user.save();
};

module.exports = { asignAdmin };