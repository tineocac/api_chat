const { UsersServices } = require("../services");

const userRegister = async (req, res, next) => {
  try {
    const newUser = req.body;
    const result = await UsersServices.create(newUser);
    res.status(201).json(result);
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "wrong data",
    });
  }
};

const getAllUsers = async (req, res, next) => {
  try {
    const result = await UsersServices.getUsers();
    res.json(result);
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "Something went wrong",
    });
  }
};

module.exports = { userRegister, getAllUsers };
