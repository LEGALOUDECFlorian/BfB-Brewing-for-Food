import ApiError from "../errors/apiError.js";

export default

(source, schema) => async (request, response, next) => {
  try {
    console.log("try => coucou");
    await schema.validateAsync(request[source]);
    next();
  } catch (error) {
    console.log("catch => "+error);
    next(new ApiError(error.details[0].message, { httpstatus: 400 }));
  }
};
