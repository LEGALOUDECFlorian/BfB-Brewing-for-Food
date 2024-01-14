import RecipeDataMapper from "../data/datamapper/recipe.datamapper.js";
import Corecontroller from "./core.controller.js";

export default class RecipeController extends Corecontroller {
  static dataMapper = RecipeDataMapper;
}
