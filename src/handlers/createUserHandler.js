const { createUser } = require("../controllers/createUser");

const createUserHandler = async (req, res) => {
  try {
    const userData = req.body;
    const user = await createUser(userData);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
module.exports = { createUserHandler };
