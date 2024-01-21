/**
 * @typedef {object} Opinion
 * @property {integer} id - Opinion id
 * @property {number} note - Opinion note
 * @property {string} comment - Opinion comment
 * @property {string} created_at - Opinion created_at
 * @property {string} updated_at - Opinion updated_at
 */

/**
 * @typedef {object} OpinionInput
 * @property {number} note.required - Opinion note
 * @property {string} comment.required - Opinion comment
 */

import CoreDataMapper from "./core.datamapper.js";

export default class OpinionDataMapper extends CoreDataMapper {
  static writeTablName = "opinion";

  static tableName = "opinion";
}
