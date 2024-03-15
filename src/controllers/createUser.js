const {User} = require('../db.js');
const { Op } = require("sequelize");

const createUser = async (userData) => {
    const {name, email, password,admin} = userData;
    const existingUser = await User.findOne({
        where: {
            email: { [Op.iLike]: `%${email}%` },
        },
    });
    if (existingUser) {
        throw new Error("Ya existe un usuario con ese email");
    }
    const user = await User.create({
        name,
        email,
        password,
        admin
    });
    return user;
    };
module.exports = { createUser };
