const { Users } = require("../models");

class UsersServices {
  static async create(newUser) {
    try {
      const result = await Users.create(newUser);
      return result;
    } catch (error) {
      throw error;
    }
  }

  // static async login(id, data) {
  //   try {
  //   } catch (error) {}
  // }
}

module.exports = UsersServices;
