const Joi = require("joi");

const estudianteSchema = Joi.object({
  nombre: Joi.string().alphanum().min(3).max(30).required(),

  apellido: Joi.string().alphanum().min(3).max(30).required(),

  fechaNacimiento: Joi.date().less(new Date()).required(),

  correoElectronico: Joi.string().email({
    minDomainSegments: 2,
    tlds: { allow: ["com", "net"] },
  }),
});

module.exports = {estudianteSchema}
