import ApiError from "../errors/apiError.js";

export default (controller) => async (request, response, next) => {
  try {
    await controller(request, response, next);
  } catch (error) {
    next(new ApiError(error.message, { httpStatus: 500 }));
  }
};
