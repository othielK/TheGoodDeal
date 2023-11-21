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

  selectAllForAnnounce(announce) {
    return this.database.query(
      `SELECT a.title, a.price, a.year,a.motorisation,a.kilometer,a.transmission, a.power,a.condition,a.license,a.description,a.image,a.contact,a.city,a.postalcode, b.car_brand_name, m.car_model_name, t.car_type_name
      FROM announce as a 
      JOIN car_brand as b ON a.car_brand_id = b.car_brand_id 
      JOIN car_model as m ON a.car_model_id = m.car_model_id
      JOIN car_type as t ON a.car_type_id= t.car_type_id,`[announce]
    );
  }

  insert(announce) {
    return this.database.query(
      `insert into ${this.table} ( title, price, year,car_brand_id,car_model_id,motorisation,kilometer,transmission,car_type_id,power,condition,license,description,contact,city,postalcode ) values ( ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        // announce.user_id,
        announce.title,
        announce.price,
        announce.year,
        announce.car_brand_id,
        announce.car_model_id,
        announce.motorisation,
        announce.kilometer,
        announce.transmission,
        announce.car_type_id,
        announce.power,
        announce.condition,
        announce.license,
        announce.description,
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
