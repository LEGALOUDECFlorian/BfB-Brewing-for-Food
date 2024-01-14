import UserDataMapper from "../data/datamapper/user.datamapper.js";
import CoreController from "./core.controller.js";

export default class UserController extends CoreController {
  static dataMapper = UserDataMapper;
}
