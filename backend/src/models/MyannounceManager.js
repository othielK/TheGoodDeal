const AbstractManager = require("./AbstractManager");

class MyannounceManager extends AbstractManager {
  constructor() {
    super({ table: "announce" });
  }

  myAnnounceCheck(userId, announceId) {
    return this.database.query(
      `SELECT * FROM announce WHERE user_id = ? AND announce_id = ?`,
      [userId, announceId]
    );
  }

  findAllAnnouncesByUser(userId) {
    return this.database.query(
      `SELECT user_id, i.*, a.announce_id,b.car_brand_name, m.car_model_name, a.price, a.year, a.kilometer, a.motorisation, a.transmission, a.city, a.postalcode
      FROM announce a
      JOIN car_model m ON a.car_model_id = m.car_model_id
      JOIN images i ON i.announce_id = a.announce_id
      JOIN car_brand b ON a.car_brand_id = b.car_brand_id 
      WHERE a.user_id = ?`,
      [userId]
    );
  }

  findImage(picture1, picture2, picture3, picture4, id) {
    return this.database.query(
      `SELECT * FROM images 
      WHERE announce_id = ?`,
      [picture1, picture2, picture3, picture4, id]
    );
  }

  deleteMyannounce(userId, announceId) {
    return this.database.query(
      `DELETE FROM announce WHERE user_id = ? AND announce_id = ?`,
      [userId, announceId]
    );
  }
}

module.exports = MyannounceManager;
