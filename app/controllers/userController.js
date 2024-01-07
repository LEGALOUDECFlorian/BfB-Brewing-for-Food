import userMapper from "../data/datamapper/user.datamapper.js";
import ApiError from "../errors/apiError.js";

export default {

  async notFound(_, __, next) {
    const error = new ApiError("Resource not found", { httpStatus: 404 });
    next(error);
  },

  async findOne(request, response) {
    const userId = parseInt(request.params.id, 10);
    const oneUserById = await userMapper.getOneUserById(userId);
    return response.json(oneUserById);
  },

  async findAllUsers(request, response) {
    const allUsers = await userMapper.getAllUsers();
    return response.json(allUsers);
  },

  async createOne(request, response) {
    const userDetails = request.body;
    const createNewUser = await userMapper.createUser(userDetails);
    return response.status(201).json(createNewUser);
  },

  async updateOne(request, response) {
    const userId = parseInt(request.params.id, 10);
    const userDetails = request.body;
    const updateOneUser = await userMapper.updateUser(userId, userDetails);

    return response.json(updateOneUser);
  },

  async deleteOne(request, response) {
    const userId = parseInt(request.params.id, 10);
    await userMapper.deleteUser(userId);
    return response.status(204).end();
  },
};
