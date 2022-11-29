const { UsersServices } = require("../services");
// const transporter = require("../utils/mailer");
// const welcomeTemplate = require("../templates/welcome");

const userRegister = async (req, res, next) => {
  try {
    const newUser = req.body;
    const result = await UsersServices.create(newUser);
    res.status(201).json(result);
    // transporter.sendMail({
    //   from: "<carlostineocac@gmail.com>",
    //   to: result.email,
    //   subject: "Bienvenido a chat_api",
    //   text: `Hola${result.firstname} ${result.lastname}, bienvenido a la mejor aplicacion de mensajeria`,
    //   html: welcomeTemplate(result.firstname, result.lastname),
    // });
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
    const offset = req.query.offset ?? 0;
    const limit = req.query.limit ?? 2;
    const result = await UsersServices.getUsers(offset, limit);
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
