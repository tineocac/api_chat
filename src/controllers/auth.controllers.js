const { AuthServices } = require("../services");

const userLogin = async (req, res, next) => {
  try {
    const credentials = req.body;
    const result = await AuthServices.authenticate(credentials);
    // Fasle ==> contrase;a invalida
    // Null ==> no encontro el emaila
    // { isValid, result } ==> resultados validos, devuelve los datos
    if (result) {
      const { firstname, lastname, email, id, phone } = result.result;
      const user = { firstname, lastname, email, id, phone };
      const token = AuthServices.getToken(user);
      user.token = token;
      res.json({ ...user });
    } else {
      res.status(400).json({ message: "bad information" });
    }
  } catch (error) {
    next({
      status: 400,
      erroContent: error,
      message: "Bad credentials",
    });
  }
};

module.exports = { userLogin };
