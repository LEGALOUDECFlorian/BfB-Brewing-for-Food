import Joi from "joi";

export default Joi.object({
  title: Joi.string()
    .min(2)
    .max(45)
    .required(),
  number_of_parts: Joi.number()
    .default("")
    .required(),
  description: Joi.string()
    .min(2)
    .max(1500)
    .required(),
  ingredients: Joi.string()
    .min(2)
    .max(4500)
    .required(),
  instruction: Joi.string()
    .min(2)
    .max(4500)
    .required(),
  preparation_time: Joi.string()
    .min(2)
    .max(4500)
    .required(),
  cooking_time: Joi.number()
    .default(0)
    .required(),
  picture: Joi.string()
    .required(),
  user_id: Joi.number()
    .required(),
});
