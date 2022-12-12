const db = require("../utils/database");
const { DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");

/**
 * @openapi
 * components:
 *   schemas:
 *     Users:
 *       type: object
 *       properties:
 *         firstname:
 *           type: string
 *           example: Carlos
 *         lastname:
 *           type: string
 *           example: Tineo
 *         email:
 *           type: string
 *           example: tineoc@gmail.com
 *     register:
 *       type: object
 *       properties:
 *         firstname:
 *           type: string
 *           example: Carlos
 *         lastname:
 *           type: string
 *           example: Tineo
 *         email:
 *           type: string
 *           example: tineoc@gmail.com
 *         phone:
 *           type: string
 *           example: 584128888888
 *         password:
 *           type: string
 *           example: 12345678
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 */




const Users = db.define(
  "users",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    firstname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    profileImage: {
      type: DataTypes.STRING,
      field: "profile_image",
    },
    phone: {
      type: DataTypes.STRING(16),
      unique: true,
      allowNull: false,
    },
  },
  {
    hooks: {
      beforeCreate: (user, options) => {
        const { password } = user;
        const hash = bcrypt.hashSync(password, 8);
        user.password = hash;
      },
    },
  }
);

module.exports = Users;
