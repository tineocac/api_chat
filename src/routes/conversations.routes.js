const { Router } = require("express");
const router = Router();
const aunthenticate = require("../middlewares/auth.middlware");
const {
  getAllConversations,
  createMessageInConversation,
  getConversationMessages
} = require("../controllers");

router.get("/conversations/:id", aunthenticate, getAllConversations);

router.get('/conversations/:conversationId/messages', aunthenticate, getConversationMessages)

router.post(
  "/conversation/:conversationId/messages",
  createMessageInConversation
);

module.exports = router;
