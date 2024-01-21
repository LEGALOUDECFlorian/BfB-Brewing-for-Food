import client from "../pg.client.js";

export default class CoreDataMapper {
  static tableName;

  static async findAll() {
    const result = await client.query(
      `SELECT * FROM "${this.tableName}"`,
    );
    return result.rows;
  }

  static async findByPk(id) {
    const result = await client.query(
      `SELECT * FROM "${this.tableName}" WHERE "id" = $1`,
      [id],
    );
    return result.rows[0];
  }

  // static async insert(data) {
  //   const fields = Object.keys(data);
  //   const values = Object.values(data);
  //   const placeholders = fields.map((_, index) => `$${index + 1}`);
  //   const result = await client.query(
  //     `INSERT INTO "${this.tableName}"
  //     (${fields}) VALUES (${placeholders})
  //     RETURNING *`,
  //     values,
  //   );
  //   return result.rows[0];
  // }

  static async insert(data) {
    const result = await client.query(
      `SELECT * FROM create_${this.writeTableName}($1)`,
      [data],
    );
    return result.rows[0];
  }

  // static async update(id, data) {
  //   const fields = Object.keys(data);
  //   const values = Object.values(data);
  //   const placeholders = fields.map((field, index) => `"${field}" = $${index + 1}`).join(", ");
  //   const result = await client.query(
  //     `UPDATE "${this.tableName}"
  //          SET ${placeholders}
  //          WHERE id = $${fields.length + 1} RETURNING *`,
  //     [...values, id],
  //   );
  //   return result.rows[0];
  // }

  static async update(data) {
    const result = await client.query(
      `SELECT * FROM create_${this.writeTableName}($1)`,
      [data],
    );
    return result.rows[0];
  }

  static async delete(id) {
    const result = await client.query(
      `DELETE FROM "${this.writeTableName}" WHERE "id" = $1`,
      [id],
    );
    return result.rows[0];
  }

//   async getUserByRole(id) {
//     const result = await client.query(
//       `SELECT * FROM "${this.tableName}" WHERE role_id = $1`,
//       [id],
//     );
//     return result.rows;
//   }
}
