import ApiError from "../errors/apiError.js";

export default (sourceProperty, schema) => async (request, _, next) => {
  try {
    console.log("schemaOK");
    await schema.validateAsync(request[sourceProperty]);
    next();
  } catch (error) {
    console.log("schemaNOTVALID");
    next(new ApiError(error.details[0].message, { httpStatus: 400 }));
  }
};
