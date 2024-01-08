import ApiError from "../errors/apiError.js";

export default (controller) => async (request, response, next) => {
  try {
    await controller(request, response, next);
  } catch (error) {
    console.error(error);
    next(new ApiError(error.details.message, { httpStatus: 500 }));
  }
};
