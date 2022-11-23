const db = require("../utils/database");
const { Router } = require("express");
const router = Router();
const aunthenticate = require("../middlewares/auth.middlware");
const {
  getAllConversations,
  createMessageInConversation,
} = require("../controllers");

router.get("/conversations/:id", aunthenticate, getAllConversations);
router.post(
  "/conversation/:conversationId/messages",
  createMessageInConversation
);

module.exports = router;
