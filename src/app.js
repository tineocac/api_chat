const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const db = require("./utils/database");
const errorHandle = require("./middlewares/error.middleware");
const initModels = require("./models/initModels");
const { userRouter, authRouter } = require("./routes");

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
initModels();

db.authenticate()
  .then(() => console.log("Succesful authentication"))
  .catch((error) => console.log(error));

db.sync({ force: false })
  .then(() => console.log("Succesful synchronization"))
  .catch((error) => console.log(error));

app.get("/", (req, res) => {
  console.log("Welcome to server");
});

app.use("/api/v1", userRouter);
app.use("/api/v1", authRouter);

app.use(errorHandle);

module.exports = app;
