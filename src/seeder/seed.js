const db = require("../utils/database");
const { Users, Participants, Messages, Conversations } = require("../models");

const users = [
  {
    firstname: "Carlos",
    lastname: "Tineo",
    email: "carlos@gmail.com",
    password: "1234",
    phone: "04128604673",
  },
  {
    firstname: "Pedro",
    lastname: "Alcala",
    email: "pedro@gmail.com",
    password: "123455",
    phone: "041485857924",
  },
  {
    firstname: "Maria",
    lastname: "Fernandez",
    email: "maria@gmail.com",
    password: "654321",
    phone: "041441349034",
  },
];

const conversations = [
  {
    title: "New chat",
    createdBy: 1,
  },
  {
    title: "New chat 2",
    createdBy: 2,
  },
  {
    title: "New chat grupal",
    type: "group",
    createdBy: 3,
  },
];

const participants = [
  {
    conversationId: 1,
    userId: 1,
  },
  {
    conversationId: 1,
    userId: 2,
  },
  {
    conversationId: 3,
    userId: 1,
  },
  {
    conversationId: 3,
    userId: 2,
  },
  {
    conversationId: 3,
    userId: 3,
  },
];

const messages = [
  {
    message: "Hola",
    senderId: 1,
    conversationId: 1,
  },
  {
    message: "Hola Carlos",
    senderId: 2,
    conversationId: 1,
  },
  {
    message: "Hola Chat",
    senderId: 3,
    conversationId: 3,
  },
  {
    message: "Holaaaa",
    senderId: 2,
    conversationId: 3,
  },
  {
    message: "Que ondaa",
    senderId: 1,
    conversationId: 3,
  },
];

db.sync().then(() => {
  users.forEach((user) => Users.create(user));
  setTimeout(() => {
    conversations.forEach((conversation) => Conversations.create(conversation));
  }, 100);
  setTimeout(() => {
    participants.forEach((participant) => Participants.create(participant));
  }, 200);
  setTimeout(() => {
    messages.forEach((message) => Messages.create(message));
  }, 300);
});
