const { conversationsServices } = require("../services");

const getAllConversations = async (req, res, next) => {
  try {
    const { id } = req.params;
    const conversation = await conversationsServices.getConversations(id);
    res.json(conversation);
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "Oops",
    });
  }
};

const createMessageInConversation = async (req, res, next) => {
  try {
    const data = req.body;
    const { conversationId } = req.params;
    const result = await conversationsServices.createMessage({
      data,
      conversationId,
    });
    res.json({ message: "Succesful message created" });
  } catch (error) {
    next();
  }
};

const createConversation = async (req, res, next) => {
  try {
    const data = req.body;
    const result = await conversationsServices.create(data);
    res.json({ message: "Succesful conversation created" });
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "",
    });
  }
};

module.exports = {
  getAllConversations,
  createMessageInConversation,
  createConversation,
};
