const AbstractManager = require("./AbstractManager");

class MessageManager extends AbstractManager {
  constructor() {
    super({ table: "messages" });
  }

  sendMessage(messages) {
    return this.database.query(
      `INSERT INTO ${this.table}  (announce_id, sender_user_id, receiver_user_id, content) VALUES (?, ?, ?, ?)`,
      [
        messages.announce_id,
        messages.sender_user_id,
        messages.receiver_user_id,
        messages.content,
      ]
    );
  }

  listConversations(userId) {
    return this.database.query(
      ` 
        SELECT
        other_user.user_id AS userId,
        other_user.email AS userEmail,
        MAX(messages.timestamp) AS lastMessageTime

        FROM
        messages
        INNER JOIN
        user AS other_user ON other_user.user_id = messages.sender_user_id OR other_user.user_id = messages.receiver_user_id

        WHERE

        (messages.sender_user_id = ? OR messages.receiver_user_id = ?)
        AND other_user.user_id != ?
        GROUP BY other_user.user_id
        ORDER BY lastMessageTime DESC;
    `,
      [userId, userId, userId]
    );
  }

  listMessages(sender, receiver) {
    return this.database.query(
      `SELECT
        messages.*,
        sender.email AS sender_email,
        receiver.email AS receiver_email
        FROM
        messages
        JOIN
            user AS sender ON messages.sender_user_id = sender.user_id
        JOIN
            user AS receiver ON messages.receiver_user_id = receiver.user_id

        WHERE
        (messages.sender_user_id = ? AND messages.receiver_user_id = ?)
        OR (messages.sender_user_id = ? AND messages.receiver_user_id = ?)
        ORDER BY
         messages.timestamp ASC;
        `,
      [sender, receiver, receiver, sender]
    );
  }
}

module.exports = MessageManager;
