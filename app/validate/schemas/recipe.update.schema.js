import Joi from "joi";

export default Joi.object({
  title: Joi.string()
    .min(2)
    .max(45),
  slug: Joi.string()
    .min(2)
    .max(45),
  number_of_parts: Joi.number()
    .default(0),
  description: Joi.string()
    .min(2)
    .max(1500),
  ingredients: Joi.string()
    .min(2)
    .max(4500),
  instruction: Joi.string()
    .min(2)
    .max(4500),
  preparation_time: Joi.string()
    .min(2)
    .max(4500),
  cooking_time: Joi.number()
    .default(0),
  picture: Joi.string(),
});
