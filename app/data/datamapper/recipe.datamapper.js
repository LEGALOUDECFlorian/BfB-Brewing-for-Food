/**
 * @typedef {object} Recipe
 * @property {integer} id - Recipe id
 * @property {string} title - Recipe title
 * @property {number} number_of_parts - Recipe number_of_parts
 * @property {string} email - Recipe email
 * @property {string} description - Recipe description
 * @property {string} ingredients - Recipe ingredients
 * @property {string} compagnie - Recipe compagnie
 * @property {number} preparation_time - Recipe preparation_time
 * @property {number} cooking_time - Recipe cooking_time
 * @property {string} picture - Recipe picture
 * @property {string} created_at - Recipe created_at
 * @property {string} updated_at - Recipe updated_at
 */

/**
 * @typedef {object} RecipeInput
 * @property {string} title.required - Recipe title
 * @property {number} number_of_parts.required - Recipe number_of_parts
 * @property {string} email.required - Recipe email
 * @property {string} description.required - Recipe description
 * @property {string} ingredients.required - Recipe ingredients
 * @property {string} compagnie.required - Recipe compagnie
 * @property {string} instruction.required - Recipe instruction
 * @property {number} preparation_time.required - Recipe preparation_time
 * @property {number} cooking_time.required - Recipe cooking_time
 * @property {string} picture.required - Recipe picture
 */

import CoreDataMapper from "./core.datamapper.js";

export default class RecipeDataMapper extends CoreDataMapper {
  static writeTableName = "recipe";

  static tableName = "recipe";
}
