const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  insert(user) {
    return this.database.query(
      `insert into ${this.table} (firstname, lastname, email, hashedPassword) values (?, ?, ?, ?)`,
      [user.firstname, user.lastname, user.email, user.hashedPassword]
    );
  }

  update(user) {
    return this.database.query(
      `update ${this.table} set   firstname = ?, lastname= ?, email= ?, hashedPassword= ?  where user_id = ?`,
      [
        user.firstname,
        user.lastname,
        user.email,
        user.hashedPassword,
        user.user_id,
      ]
    );
  }

  searchByEmail(email) {
    return this.database.query(`SELECT * FROM user WHERE email = ?`, [email]);
  }
}

module.exports = UserManager;
