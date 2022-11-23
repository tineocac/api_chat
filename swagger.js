const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API Chat",
      version: "1.0.0",
      description: "API to create a messages application",
    },
  },
  apis: ["./src/routes/users.routes.js", "./src/models/users.models.js"],
};

const swaggerSpec = swaggerJSDoc(options);

const swaggerDocs = (app, port) => {
  app.use("/api/v1/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

  app.get("/api/v1/docs.json", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.send(swaggerSpec);
  });
  console.log(
    `Documentation available on http://localhost:${port}/api/v1/docs`
  );
};

module.exports = swaggerDocs;
