const { conversationsServices } = require("../services");
require("dotenv").config();

const getAllConversations = async (req, res, next) => {
  try {
    const { id } = req.params;
    const offset = req.query.offset ?? 0;
    const limit = req.query.limit ?? 3;
    const conversation = await conversationsServices.getConversations(
      id,
      offset,
      limit
    );
    res.json(conversation);
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "Oops",
    });
  }
};

const getMessagesWithParticipants = async (req, res, next) => {
  try {
    const offset = req.query.offset ?? 0;
    const limit = req.query.limit ?? 20;
    const { conversationId } = req.params;
    const result = await conversationsServices.getMessagesParticipants(
      conversationId,
      offset,
      limit
    );
    res.json(result);
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "Bad request",
    });
  }
};

const getAllMessages = async (req, res, next) => {
  try {
    const offset = req.query.offset ?? 0;
    const limit = req.query.limit ?? 20;
    const  {conversationId}  = req.params;
    const messages = await conversationsServices.getMessages(
     { conversationId,
      offset,
      limit}
    );
    const { count, rows } = messages;
    res.json({
      count,
      next: `${process.env.HOST}/api/v1${req.path}?offset=${
        Number(offset) + Number(limit)
      }&limit=${limit}`,
      previuos: `${process.env.HOST}/api/v1${req.path}?offset=${
        Number(offset) - Number(limit)
      }&limit=${limit}`,
      messages: rows,
    });
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "",
    });
  }
};

const createMessageInConversation = async (req, res, next) => {
  try {
    const data = req.body;
    const { conversationId } = req.params;
    const result = await conversationsServices.createMessage({
      ...data,
      conversationId,
    });
    res.json({ message: "Succesful message created" });
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "Oops, something went wrong",
    });
  }
};

const createConversation = async (req, res, next) => {
  try {
    const data = req.body;
    const result = await conversationsServices.create(data);
    res.status(201).json({ message: "Succesful conversation created" });
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
  getMessagesWithParticipants,
  getAllMessages,
  createMessageInConversation,
  createConversation,
};
