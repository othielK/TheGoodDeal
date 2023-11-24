const AbstractManager = require("./AbstractManager");

class ImageManager extends AbstractManager {
  constructor() {
    super({ table: "images" });
  }
}

module.exports = ImageManager;

// const AbstractManager = require("./AbstractManager");

// class ImageManager extends AbstractManager {
//   constructor() {
//     super({ table: "images" });
//   }
//   const [imageResult] =

//   insert(images) {

//     return this.database.query(
//       `insert into ${this.table} (image_1, image_2, image_3, image_4, announce_id) values ( ?, ?, ?, ?, ?)`,
//       [
//         images.image_1,
//         images.image_2,
//         images.image_3,
//         images.image_4,
//         images.announce_id,
//       ]
//     );
//   }
//   const imageId = imageResult.insertId;
//   insert(announce) {
//     return this.database.query(
//       `insert into ${this.table} (title, user_id, price, year, car_brand_id, car_model_id, motorisation, kilometer, transmission, car_type_id, power, state, license, description, contact, city, postalcode) values ( ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
//       [
//         imageId,
//         announce.title,
//         announce.user_id,
//         announce.price,
//         announce.year,
//         announce.car_brand_id,
//         announce.car_model_id,
//         announce.motorisation,
//         announce.kilometer,
//         announce.transmission,
//         announce.car_type_id,
//         announce.power,
//         announce.state,
//         announce.license,
//         announce.description,
//         announce.contact,
//         announce.city,
//         announce.postalcode,
//       ]
//     );
//   }
// }

// module.exports = ImageManager;
