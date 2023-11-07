const AbstractManager = require("./AbstractManager");

class CarbrandManager extends AbstractManager {
  constructor() {
    super({ table: "car_brand" });
  }
}

module.exports = CarbrandManager;
