const AbstractManager = require("./AbstractManager");

class CarmodelManager extends AbstractManager {
  constructor() {
    super({ table: "car_model" });
  }
}

module.exports = CarmodelManager;
