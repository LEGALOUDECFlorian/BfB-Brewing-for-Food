/**
 * @typedef {object} Users
 * @property {integer} id - Users id
 * @property {string} firstname - Users firstname
 * @property {string} lastname - Users lastname
 * @property {string} email - Users email
 * @property {string} passworld - Users passworld
 * @property {string} username - Users username
 * @property {string} compagnie - Users compagnie
 * @property {string} web_site_compagnie - Users web_site_compagnie
 * @property {string} created_at - Users created_at
 * @property {string} updated_at - Users updated_at
 */

/**
 * @typedef {object} UsersInput
 * @property {string} firstname.required - Users firstname
 * @property {string} lastname.required - Users lastname
 * @property {string} email.required - Users email
 * @property {string} passworld.required - Users passworld
 * @property {string} username.required - Users username
 * @property {string} compagnie.required - Users compagnie
 * @property {string} web_site_compagnie.required - Users web_site_compagnie
 */

import CoreDataMapper from "./core.datamapper.js";

export default class UserDataMapper extends CoreDataMapper {
  static writeTableName = "users";

  static tableName = "users";
}
