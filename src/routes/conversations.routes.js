const { Router } = require("express");
const router = Router();
const aunthenticate = require("../middlewares/auth.middlware");
const {
  getAllConversations,
  getMessagesWithParticipants,
  createMessageInConversation,
  getAllMessages
} = require("../controllers");
const { authenticate } = require("../services/auth.services");

/**
 * @openapi
 * /api/v1/conversations/{id}:
 *   get:
 *     summary: Get all conversations from user
 *     tags: [conversations]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           minimum: 1
 *         description: user Id
 *       - in: path
 *         name: conversationId
 *         required: true
 *         schema:
 *          type: integer
 *          minimum: 1
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
router.get("/conversations/messages/:conversationId", aunthenticate, getAllMessages);

router.post(
  "/conversation/:conversationId/message", aunthenticate, 
  createMessageInConversation
);

module.exports = router;
