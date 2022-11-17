const db = require("../utils/database");
const { DataTypes } = require("sequelize");

const Participants = db.define("participants", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: "userd_id",
  },
  conversationId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: "conversation_id",
  },
});

module.exports = Participants;
