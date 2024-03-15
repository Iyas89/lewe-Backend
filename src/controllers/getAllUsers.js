const {User} = require('../db.js');

const getAllUsers = async () => {
    const users = await User.findAll();
    if(users.length === 0) throw new Error('No hay usuarios registrados');
    return users;
};
module.exports = { getAllUsers };