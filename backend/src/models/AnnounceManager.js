const AbstractManager = require("./AbstractManager");

class AnnounceManager extends AbstractManager {
  constructor() {
    super({ table: "announce" });
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
      ]
    );
  }

  //   searchByCartype(car_type) {
  //     return this.database.query(`SELECT * FROM announce WHERE car_type = ?`, [
  //       car_type,
  //     ]);
  //   }

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
