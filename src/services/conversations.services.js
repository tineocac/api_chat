const { Users, Conversations, Messages } = require("../models");

class conversationsServices {
  static async getConversations(id, offset, limit) {
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
        offset,
        limit,
        subQuery: false,
      });
      return conversation;
    } catch (error) {
      throw error;
    }
  }

  static async getMessagesParticipants(id, offset, limit) {
    try {
      const result = await Conversations.findAndCountAll({
        where: { id },
        include: [
          {
            model: Messages,
            as: "messages",
          },
          {
            model: Users,
          },
        ],
        offset,
        limit,
        subQuery: false,
      });
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async getMessages(data) {
    try {
      const { conversationId, offset, limit } = data;
      const result = await Messages.findAndCountAll({
        where: { conversationId },
        offset,
        limit,
      });
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async createMessage(data) {
    try {
      const result = await Messages.create(data);
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = conversationsServices;
