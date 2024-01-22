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
    console.log(`row${row}`);
    return response.json(row);
  }

  static async create({ body }, response) {
    console.log("bodyController", { body });
    console.log("responseController", { response });
    const row = await this.dataMapper.insert(body);
    console.log("rowController", row);
    return response.status(201).json(row);
  }

  static async update({ params, body }, response, next) {
    console.log("paramsController", { params });
    console.log("bodyController", { body });
    const { id } = params;
    const data = { ...{ id }, ...body };
    const row = await this.dataMapper.update(data);
    if (!row) {
      console.log("don't row");
      return next();
    }
    console.log(`row${row}`);
    return response.json(row);
  }

  // static async update({ params, body }, res, next) {
  //   const { id } = params;
  //   const dbData = await this.datamapper.findByPk(id);

  //   if (!dbData) {
  //     return next();
  //   }
  //   const data = { ...dbData, ...body };

  //   const row = await this.datamapper.update(data);
  //   if (!row) {
  //     return next();
  //   }
  //   return res.status(200).json(row);
  // }

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
