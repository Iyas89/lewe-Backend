const {User} = require('../db.js');

const deleteUser = async (id) => {
    const user = await User.findByPk(id);
    if(!user) throw new Error('No existe el usuario');
    await user.destroy();
};

module.exports = { deleteUser };