const Joi = require("joi");
const { parseFecha } = require("../utils/tools");

const estudianteSchema = Joi.object().keys({
  nombre: Joi.string().alphanum().min(3).max(30).required().error(errors => {
    errors.forEach(err => {
      switch (err.code) {
        case "any.required":
          err.message = "Debe contener el campo 'Nombre'";
          break;
        case "string.alphanum":
            err.message = "Debe ser alfanumérico";
            break;
        case "any.empty":
          err.message = "No puede estar vacio";
          break;
        case "string.min":
          err.message = `Debe ser de al menos ${err.local.limit} caracteres`;
          break;
        case "string.max":
          err.message = `Como máxmimo deben ser ${err.local.limit} caracteres`;
          break;
        default:
          break;
      }
    });
    return errors;
  }),

  apellido: Joi.string().alphanum().min(3).max(30).required().error(errors => {
    errors.forEach(err => {
      switch (err.code) {
        case "any.required":
          err.message = "Debe contener el campo 'Apellido'";
          break;
        case "string.alphanum":
            err.message = "Debe ser alfanumérico";
            break;
        case "any.empty":
          err.message = "No puede estar vacio";
          break;
        case "string.min":
          err.message = `Debe ser de al menos ${err.local.limit} caracteres`;
          break;
        case "string.max":
          err.message = `Como máxmimo deben ser ${err.local.limit} caracteres`;
          break;
        default:
          break;
      }
    });
    return errors;
  }),

  fechaNacimiento: Joi.date().less(new Date()).required().error(errors => {
    errors.forEach(err => {
      switch (err.code) {
        case "any.required":
          err.message = "Debe contener el campo 'Fecha de nacimiento'";
          break;
        case "any.empty":
          err.message = "No puede estar vacio";
          break;
        case "date.less":
          err.message = `Debe ser una fecha menor a ${parseFecha(err.local.limit)}`;
          break;

        default:
          break;
      }
    });
    return errors;
  }),

  correoElectronico: Joi.string().email({
    minDomainSegments: 2,
    tlds: { allow: ["com", "net"] },
  }).required().error(errors => {
    errors.forEach(err => {
      switch (err.code) {
        case "any.required":
          err.message = "Debe contener el campo 'Correo electronico'";
          break;
        case "any.empty":
          err.message = "No puede estar vacio";
          break;
        case "string.email":
          err.message = `Correo electrónico invalido `;
          break;
        default:
          break;
      }
    });
    return errors;
  }),
});


module.exports = {estudianteSchema}
