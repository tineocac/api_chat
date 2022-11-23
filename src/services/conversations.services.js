const { Users, Conversations, Messages } = require("../models");

class conversationsServices {
  static async getConversations(id) {
    try {
      const conversation = await Users.findAll({
        where: { id },
        attributes: ["id"],
        include: {
          model: Conversations,
          attributes: ["id", "title", "imageUrl"],
          include: {
            model: Messages,
            as: "messages",
          },
        },
      });
      return conversation;
    } catch (error) {
      throw error;
    }
  }

  static async createMessage(conversationId, data) {
    try {
      const result = await Messages.create(data, {
        where: conversationId,
      });
      return result;
    } catch (error) {}
  }
}

module.exports = conversationsServices;
