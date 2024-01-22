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

  static async insert(data) {
    console.log("datamapper", data);
    const result = await client.query(
      `SELECT * FROM create_${this.writeTableName}($1)`,
      [data],
    );
    console.log("resultBase", result.rows[0]);
    return result.rows[0];
  }

  static async update(data) {
    console.log("datamapper", data);
    const result = await client.query(
      `SELECT * FROM update_${this.writeTableName}($1)`,
      [data],
    );
    console.log("resultBase", result.rows[0]);
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
