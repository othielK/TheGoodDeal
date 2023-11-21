const models = require("../models");

const sendMessageBetweenUsers = (req, res) => {
  const messages = req.body;

  models.message
    .sendMessage(messages)
    .then(([result]) => {
      console.info(result);
      res.status(200).json({ message: "Message envoyé avec succès" });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({
        error: err.errno,
      });
    });
};
const listUserMessage = (req, res) => {
  const { userId } = req.params;

  models.message
    .listConversations(userId)
    .then(([result]) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(401).send(err);
    });
};

const listMessagesBetweenUsers = (req, res) => {
  const { userId, receiverId } = req.params;

  models.message
    .listMessages(userId, receiverId)
    .then(([result]) => {
      res.status(200).json({ result });
    })
    .catch((err) => {
      res.status(401).json(err);
    });
};

module.exports = {
  sendMessageBetweenUsers,
  listUserMessage,
  listMessagesBetweenUsers,
};
