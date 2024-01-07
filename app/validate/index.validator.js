import ApiError from "../errors/apiError";

(source, schema) => async (request, response, next) => {
    try {
        await schema.validateAsync(request[source]);
    } catch (error) {
        next(new ApiError(error.details[0].message, {httpstatus: 400}))
    }
}

export default