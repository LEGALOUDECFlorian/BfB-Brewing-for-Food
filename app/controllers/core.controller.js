import ApiError from "../errors/apiError.js";
export default class Corecontroller {
  static dataMapper;

  static async getAll(_, response) {
    const row = await this.dataMapper.findAll();
    return response.json(row);
  }

  static async getByPk({ params }, response, next) {
    const { id } = params;
    const row = await this.dataMapper.findByPk(id);
    if (!row) {
      return next();
    }
    return response.json(row);
  }

  static async create({ body }, response) {
    const row = await this.dataMapper.insert(body);
    return response.status(201).json(row);
  }

  static async update({ params, body }, response, next) {
    const { id } = params;
    const row = await this.dataMapper.update(id, body);
    if (!row) {
      return next;
    }
    return response.json(row);
  }

  static async delete({ params }, response, next) {
    const { id } = params;
    const idExist = await this.dataMapper.findByPk(id);
    if (!idExist) {
      next(new ApiError("Resource not found", { httpStatus: 404 }));
    }
    await this.dataMapper.delete(id);
    return response.status(204).json();
  }
}
