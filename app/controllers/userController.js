import userMapper from "../data/datamapper/user.datamapper.js";

export default {

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
    return response.json(createNewUser);
  },

  async updateOne(request, response) {
    const userId = parseInt(request.params.id, 10);
    const userDetails = request.body;
    const updateOneUser = await userMapper.updateUser(userId, userDetails);
    return response.json(updateOneUser);
  },

  async deleteOne(request, response) {
    const userId = parseInt(request.params.id, 10);
    const deleteOneUser = await userMapper.deleteUser(userId);
    return response.json(deleteOneUser);
  },
};
