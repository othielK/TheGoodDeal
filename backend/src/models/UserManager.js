const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  insert(user) {
    return this.database.query(
      `insert into ${this.table} (user_id, firstname, lastname, email, password, contact, city) values ( ?, ?, ?, ?, ?, ?,?)`,
      [
        user.user_id,
        user.firstname,
        user.lastname,
        user.email,
        user.password,
        user.contact,
        user.city,
      ]
    );
  }

  update(user) {
    return this.database.query(
      `update ${this.table} set   firstname = ?, lastname= ?, email= ?, password= ?, contact =?, city= ?  where user_id = ?`,
      [
        user.firstname,
        user.lastname,
        user.email,
        user.password,
        user.contact,
        user.city,
        user.user_id,
      ]
    );
  }
}

module.exports = UserManager;
