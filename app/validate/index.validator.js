// import ApiError from "../errors/apiError.js";

// export default

// (source, schema) => async (request, response, next) => {
//   try {
//     console.log("try => coucou");
//     await schema.validateAsync(request[source]);
//     next();
//   } catch (error) {
//     console.log(error);
//     next(new ApiError(error.message, { httpstatus: 400 }));
//   }
// };
