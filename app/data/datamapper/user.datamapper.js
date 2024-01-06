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
    const {
      firstname, lastname, email, password, username, compagnie,
      web_site_compagnie: webSiteCompagnie, role_id: roleId,
    } = userDetails;
    const result = await client.query(
      "INSERT INTO (firstname, lastname, email, password, username, compagnie, web_site_compagnie, role_id) VALUES (($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *",
      [firstname, lastname, email, password, username, compagnie, webSiteCompagnie,
        roleId,
      ],
    );
    return result.rows[0];
  },

  async updateUser(userId, userDetails) {
    const {
      firstname, lastname, email, password, username, compagnie,
      web_site_compagnie: webSiteCompagnie, role_id: roleId,
    } = userDetails;
    const result = await client.query(
      "UPDATE users SET firstname=$1, lastname=$2, email=$3, password=$4, username=$5, compagnie=$6, web_site_compagnie=$7, role_id=$8 WHERE id=$9 RETURNING *",
      [firstname, lastname, email, password, username, compagnie, webSiteCompagnie, roleId,
        userId,
      ],
    );
    return result.rows[0];
  },

  async deleteUser(userId) {
    const result = await client.query(
      "DELETE FROM users WHERE id = $1 RETURNING *",
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
