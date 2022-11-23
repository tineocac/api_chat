const { userRegister, getAllUsers } = require("./users.controllers");
const { userLogin } = require("./auth.controllers");
const {
  getAllConversations,
  getConversationMessages,
  createMessageInConversation,
  createConversation,
} = require("./conversations.controllers");

module.exports = {
  userRegister,
  userLogin,
  getAllUsers,
  getAllConversations,
  createMessageInConversation,
  createConversation,
  getConversationMessages,
};
