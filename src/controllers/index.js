const { userRegister, getAllUsers } = require("./users.controllers");
const { userLogin } = require("./auth.controllers");
const {
  getAllConversations,
  getMessagesWithParticipants,
  getAllMessages,
  createMessageInConversation,
  createConversation,
} = require("./conversations.controllers");

module.exports = {
  userRegister,
  userLogin,
  getAllUsers,
  getAllConversations,
  getMessagesWithParticipants,
  getAllMessages,
  createMessageInConversation,
  createConversation,
};
