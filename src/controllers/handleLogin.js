const {User} = require('../db.js');
const { Op } = require("sequelize");

const handleLogin = async (email, password) => {
    const emailRegex = /\S+@\S+\.\S+/;
    if(!emailRegex.test(email)){
        throw new Error("Email invalido");
    }
    const user = await User.findOne({
        where: {
            email: { [Op.iLike]: `%${email}%` },
            password
        }
    });
    if (!user) {
        throw new Error("Usuario o contraseña incorrectos");
    }
    return user;
    };

module.exports = { handleLogin };
