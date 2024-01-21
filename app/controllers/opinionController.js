import OpinionDataMapper from "../data/datamapper/opinion.datamapper.js";
import Corecontroller from "./core.controller.js";

export default class OpinionController extends Corecontroller {
  static dataMapper = OpinionDataMapper;
}
