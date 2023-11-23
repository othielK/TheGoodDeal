const AbstractManager = require("./AbstractManager");

class FavoriteManager extends AbstractManager {
  constructor() {
    super({ table: "favorite" });
  }

  insert(favorite) {
    return this.database.query(
      `INSERT INTO favorite (user_id, announce_id) VALUES (?, ?)`,
      [favorite.user_id, favorite.announce_id]
    );
  }
}

module.exports = FavoriteManager;
