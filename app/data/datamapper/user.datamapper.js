import client from "../pg.client.js";

export default {

  async getAllUsers() {
    const result = await client.query(
      "SELECT * FROM users",
    );
    return result.rows;
  },

  async getOneUserById(userId) {
    const result = await client.query(
      "SELECT * FROM users WHERE id = $1",
      [userId],
    );
    return result.rows[0];
  },

  async createUser(userDetails) {
    const fields = Object.keys(userDetails);
    const values = Object.values(userDetails);
    const placeholders = values.map((_, index) => `$${index + 1}`);
    const result = await client.query(
      `INSERT INTO users (${fields}) VALUES (${placeholders}) RETURNING *`,
      values,
    );
    return result.rows[0];
  },

  async updateUser(userId, userDetails) {
    const fields = Object.keys(userDetails);
    const values = Object.values(userDetails);
    const placeholders = values.map((_, index) => `$${index + 1}`);
    const userIdPlaceholder = (values.length) + 1;
    values.push(userId);
    const result = await client.query(
      `UPDATE users SET (${fields}) = (${placeholders})WHERE id= $${userIdPlaceholder} RETURNING *`,
      values,
    );
    return result.rows[0];
  },

  async deleteUser(userId) {
    const result = await client.query(
      "DELETE FROM users WHERE id = $1",
      [userId],
    );
    return result.rows[0];
  },

  async getUserByRole(roleId) {
    const result = await client.query(
      "SELECT * FROM users WHERE role_id = $1",
      [roleId],
    );
    return result.rows;
  },

};
