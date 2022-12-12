const { Router } = require("express");
const router = Router();
const aunthenticate = require("../middlewares/auth.middlware");
const {
  getAllConversations,
  getMessagesWithParticipants,
  createMessageInConversation,
  getAllMessages,
  createConversation,
} = require("../controllers");

/**
 * @openapi
 * /api/v1/conversations/{id}:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     summary: Get all conversations from user
 *     tags: [conversations]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           minimum: 1
 *         description: User id
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array
 *                   items: {}
 */

router.get("/conversations/:id", aunthenticate, getAllConversations);

router.get(
  "/conversations/:conversationId/messages",
  aunthenticate,
  getMessagesWithParticipants
);
router.get(
  "/conversations/messages/:conversationId",
  aunthenticate,
  getAllMessages
);

router.post(
  "/conversation/:conversationId/message",
  aunthenticate,
  createMessageInConversation
);

router.post("/conversations/participants", createConversation);

module.exports = router;
