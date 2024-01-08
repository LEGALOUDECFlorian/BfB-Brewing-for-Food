import Joi from "joi";

const checkIdSchema = Joi.object({
  id: Joi.number()
    .integer()
    .min(1)
    .required(),
});

export default checkIdSchema;
