const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const db = require("./utils/database");
const errorHandle = require("./middlewares/error.middleware");
const initModels = require("./models/initModels");

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
initModels();

db.authenticate()
  .then(() => console.log("Succesful authentication"))
  .catch((error) => console.log(error));

db.sync({ force: true })
  .then(() => console.log("Succesful synchronization"))
  .catch((error) => console.log(error));

app.get("/", (req, res) => {
  console.log("Welcome to server");
});

app.use(errorHandle);

module.exports = app;
