/**
 * @typedef {object} Category
 * @property {integer} id - Category id
 * @property {string} name - Category name
 * @property {string} created_at - Category created_at
 * @property {string} updated_at - Category updated_at
 */

/**
 * @typedef {object} CategoryInput
 * @property {string} name.required - Category name
 */

import CoreDataMapper from "./core.datamapper.js";

export default class CategoryDataMapper extends CoreDataMapper {
  static writeTablName = "category";

  static tableName = "category";
}
