import Joi from "joi";

const checkPassword = "^[a-zA-Z0-9]{3,30}$";

const usersSchema = Joi.object({

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
    .pattern(new RegExp(checkPassword))
    .required(),
  username: Joi.string()
    .min(2)
    .max(25)
    .required(),
  compagnie: Joi.string()
    .max(20)
    .default("")
    .allow(""),
  web_site_compagnie: Joi.string()
    .default("")
    .allow(""),
  role_id: Joi.number()
    .default(1),

});

export default usersSchema;
