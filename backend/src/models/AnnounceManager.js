const AbstractManager = require("./AbstractManager");

class AnnounceManager extends AbstractManager {
  constructor() {
    super({ table: "announce" });
  }

  // SEARCHBAR
  searchBar(searchTerm) {
    return this.database.query(
      `SELECT  i.image_1, a.announce_id,b.car_brand_name, m.car_model_name, a.price, a.year, a.kilometer, a.motorisation, a.transmission, a.city, a.postalcode
      FROM announce a
      JOIN car_brand b ON a.car_brand_id = b.car_brand_id
      JOIN car_model m ON a.car_model_id = m.car_model_id
      JOIN images i ON i.announce_id = a.announce_id
      WHERE b.car_brand_name LIKE ? OR m.car_model_name LIKE ?`,
      [`%${searchTerm}%`, `%${searchTerm}%`]
    );
  }

  selectAll(announce) {
    return this.database.query(
      `SELECT i.*, a.announce_id, b.car_brand_name, m.car_model_name, a.price, a.year, a.kilometer, a.motorisation, a.transmission, a.city, a.postalcode
      FROM announce a
      JOIN car_brand b ON a.car_brand_id = b.car_brand_id
      JOIN car_model m ON a.car_model_id = m.car_model_id
      JOIN images i ON i.announce_id = a.announce_id`,
      [announce]
    );
  }

  insert(announce) {
    return this.database.query(
      `INSERT INTO announce (title, user_id, price, year, car_brand_id, car_model_id, motorisation, kilometer, transmission, car_type_id, power, state, license, description, contact, city, postalcode) values ( ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        announce.title,
        announce.user_id,
        announce.price,
        announce.year,
        announce.car_brand_id,
        announce.car_model_id,
        announce.motorisation,
        announce.kilometer,
        announce.transmission,
        announce.car_type_id,
        announce.power,
        announce.state,
        announce.license,
        announce.description,
        announce.contact,
        announce.city,
        announce.postalcode,
      ]
    );
  }

  insertImage(picture1, picture2, picture3, picture4, id) {
    return this.database.query(
      `INSERT INTO images (image_1, image_2, image_3, image_4, announce_id) VALUES (?, ?, ?, ?, ?)`,
      [picture1, picture2, picture3, picture4, id]
    );
  }

  // searchbymodel
  findByModel(model) {
    return this.database.query(
      `SELECT i.*, a.announce_id, b.car_brand_name, m.car_model_name, a.price, a.year, a.kilometer, a.motorisation, a.transmission, a.city, a.postalcode
      FROM announce a
      JOIN car_brand b ON a.car_brand_id = b.car_brand_id
      JOIN images i ON i.announce_id = a.announce_id
      JOIN car_model m ON a.car_model_id = m.car_model_id WHERE m.car_model_name  = ?`,
      [model]
    );
  }

  // searchbybrand
  findByBrand(brand) {
    return this.database.query(
      `SELECT i.*, a.announce_id,b.car_brand_name, m.car_model_name, a.price, a.year, a.kilometer, a.motorisation, a.transmission, a.city, a.postalcode
      FROM announce a
      JOIN car_model m ON a.car_model_id = m.car_model_id
      JOIN images i ON i.announce_id = a.announce_id
      JOIN car_brand b ON a.car_brand_id = b.car_brand_id WHERE b.car_brand_name  = ?`,
      [brand]
    );
  }

  // searchbytype
  findByCarType(type) {
    return this.database.query(
      `SELECT i.*, a.announce_id, t.car_type_name,b.car_brand_name, m.car_model_name, a.price, a.year, a.kilometer, a.motorisation, a.transmission, a.city, a.postalcode
      FROM announce a
      JOIN car_model m ON a.car_model_id = m.car_model_id
      JOIN images i ON i.announce_id = a.announce_id
      JOIN car_brand b ON a.car_brand_id = b.car_brand_id 
      JOIN car_type t ON a.car_type_id = t.car_type_id
      WHERE LOWER(t.car_type_name) = ?`,
      [type]
    );
  }

  // searchbyberline
  // findByBerline(type) {
  //   return this.database.query(
  //     `SELECT i.*, a.announce_id, t.car_type_name,b.car_brand_name, m.car_model_name, a.price, a.year, a.kilometer, a.motorisation, a.transmission, a.city, a.postalcode
  //       FROM announce a
  //       JOIN car_model m ON a.car_model_id = m.car_model_id
  //       JOIN images i ON i.announce_id = a.announce_id
  //       JOIN car_brand b ON a.car_brand_id = b.car_brand_id
  //       JOIN car_type t ON a.car_type_id = t.car_type_id
  //       WHERE LOWER(t.car_type_name) LIKE '%berline%'`,
  //     [type]
  //   );
  // }

  getCarDetailsAll(id) {
    return this.database.query(
      `SELECT i.*, a.title, a.price, a.year, b.car_brand_name, m.car_model_name, a.motorisation, a.kilometer, a.transmission, a.city, a.postalcode, a.description, a.license, a.state, a.power, t.car_type_name, u.firstname, LEFT(u.firstname, 1) AS first_letter_of_firstname
      FROM announce a
      JOIN car_brand b ON a.car_brand_id = b.car_brand_id
      JOIN car_model m ON a.car_model_id = m.car_model_id
      JOIN car_type t ON a.car_type_id = t.car_type_id
      JOIN images i ON i.announce_id = a.announce_id
      JOIN user u ON a.user_id = u.user_id
      WHERE a.announce_id = ?`,
      [id]
    );
  }

  // MyannouncePage

  findAllAnnouncesByUser(userId) {
    return this.database.query(
      `SELECT user_id, i.*, a.announce_id,b.car_brand_name, m.car_model_name, a.price, a.year, a.kilometer, a.motorisation, a.transmission, a.city, a.postalcode, a.description, a.user_id
      FROM announce a
      JOIN car_model m ON a.car_model_id = m.car_model_id
      JOIN images i ON i.announce_id = a.announce_id
      JOIN car_brand b ON a.car_brand_id = b.car_brand_id 
      WHERE a.user_id = ?`,
      [userId]
    );
  }

  findAnnounceIdByUserId(userId, announceId) {
    return this.database.query(
      `SELECT user_id, i.*, a.announce_id,b.car_brand_name, m.car_model_name, a.price, a.year, a.kilometer, a.motorisation, a.transmission, a.city, a.postalcode, a.description
      FROM announce a
      JOIN car_model m ON a.car_model_id = m.car_model_id
      JOIN images i ON i.announce_id = a.announce_id
      JOIN car_brand b ON a.car_brand_id = b.car_brand_id 
      WHERE a.user_id = ? AND a.announce_id = ?`,
      [userId, announceId]
    );
  }

  update(announce) {
    return this.database.query(
      `UPDATE ${this.table} set kilometer = ?, price = ?, description = ?
      WHERE user_id = ? AND announce_id = ?`,
      [
        announce.kilometer,
        announce.price,
        announce.description,
        announce.user_id,
        announce.announce_id,
      ]
    );
  }

  // updateImage(picture1, picture2, picture3, picture4, announceId) {
  //   return this.database.query(
  //     `UPDATE images set image_1 = ?, image_2 = ?, image_3 = ?, image_4 = ?
  //     WHERE announce_id = ?`,
  //     [picture1, picture2, picture3, picture4, announceId]
  //   );
  // }

  deleteAnnounce(userId, announceId) {
    return this.database.query(
      `DELETE FROM announce WHERE user_id = ? AND announce_id = ?`,
      [userId, announceId]
    );
  }
}

module.exports = AnnounceManager;
