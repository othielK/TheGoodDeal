const AbstractManager = require("./AbstractManager");

class AnnounceManager extends AbstractManager {
  constructor() {
    super({ table: "announce" });
  }

  selectAll(announce) {
    return this.database.query(
      `SELECT a.image, b.car_brand_name, m.car_model_name, a.price, a.year, a.kilometer, a.motorisation, a.transmission, a.city, a.postalcode
      FROM announce a 
      JOIN car_brand b ON a.car_brand_id = b.car_brand_id 
      JOIN car_model m ON a.car_model_id = m.car_model_id`,
      [announce]
    );
  }

  insert(announce) {
    return this.database.query(
      `insert into ${this.table} (user_id, title, price, year,car_brand_name,car_model,motorisation,kilometer,transmission,car_type,power,condition,license,description,image,contact,city ) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        announce.user_id,
        announce.title,
        announce.price,
        announce.year,
        announce.car_brand_name,
        announce.car_model,
        announce.motorisation,
        announce.kilometer,
        announce.transmission,
        announce.car_type,
        announce.power,
        announce.condition,
        announce.license,
        announce.description,
        announce.image,
        announce.contact,
        announce.city,
        announce.postalcode,
      ]
    );
  }

  // search
  findByModel(model) {
    return this.database.query(
      `SELECT a.image, b.car_brand_name, m.car_model_name, a.price, a.year, a.kilometer, a.motorisation, a.transmission, a.city, a.postalcode
      FROM announce a 
      JOIN car_brand b ON a.car_brand_id = b.car_brand_id 
      JOIN car_model m ON a.car_model_id = m.car_model_id WHERE m.car_model_name  = ?`,
      [model]
    );
  }

  //    update(announce) {
  //     return this.database.query(
  //       `update ${this.table} set   firstname = ?, lastname= ?, email= ?, hashedPassword= ?  where user_id = ?`,
  //       [
  //         user.firstname,
  //         user.lastname,
  //         user.email,
  //         user.hashedPassword,
  //         user.user_id,
  //       ]
  //     );
  //   }
}
module.exports = AnnounceManager;
