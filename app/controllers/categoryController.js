import CategoryDataMapper from "../data/datamapper/category.datamapper.js";
import Corecontroller from "./core.controller.js";

export default class CategoryController extends Corecontroller {
  static dataMapper = CategoryDataMapper;
}
