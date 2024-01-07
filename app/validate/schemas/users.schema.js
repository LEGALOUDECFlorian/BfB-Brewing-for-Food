import Joi from "joi";

const userSchema = Joi.object({
  firstname: Joi.string()
    .min(2)
    .max(25)
    .required(),
  lastname: Joi.string()
    .min(2)
    .max(25)
    .required(),
  email: Joi.string()
    .email()
    .required(),
  password: Joi.string()
    .password()
    .required(),
  username: Joi.string()
    .min(2)
    .max(25)
    .required()
    .default(""),
  compagnie: Joi.string()
    .min(2)
    .max(20)
    .required()
    .default(""),
  web_site_compagnie: Joi.string()
    .email()
    .required()
    .default(""),

});

export default {
  userSchema,
};
