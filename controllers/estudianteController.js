const { findById, findAll, create, deleteById, findByIdAndUpdate } = require("../utils/tools");
const { estudianteSchema } = require("../models/estudianteModel");
const { HttpStatusCodes, sendResponse } = require("../middleware/httpHelper");

/**
 * Obtiene todos los estudiantes.
 * @param {object} req - Objeto de solicitud HTTP.
 * @param {object} res - Objeto de respuesta HTTP.
 */
const getEstudiantes = async (req, res) => {
  try {
    const estudiantes = findAll();
    return sendResponse(res, HttpStatusCodes.OK, estudiantes);
  } catch (error) {
    return sendResponse(res, HttpStatusCodes.BAD_REQUEST, { message: error.message });
  }
};

/**
 * Obtiene un estudiante por su ID.
 * @param {object} req - Objeto de solicitud HTTP con el parámetro "id".
 * @param {object} res - Objeto de respuesta HTTP.
 */
const getEstudianteById = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const estudiante = findById(id);
    return sendResponse(res, HttpStatusCodes.OK, estudiante);
  } catch (error) {
    return sendResponse(res, HttpStatusCodes.BAD_REQUEST, { message: error.message });
  }
};

/**
 * Crea un nuevo estudiante.
 * @param {object} req - Objeto de solicitud HTTP con los datos del estudiante en el cuerpo.
 * @param {object} res - Objeto de respuesta HTTP.
 */
const postEstudiante = async (req, res) => {
  try {
    const estudiante = create(estudianteSchema.validate(req.body).value);
    return sendResponse(res, HttpStatusCodes.CREATED, estudiante);
  } catch (error) {
    return sendResponse(res, HttpStatusCodes.BAD_REQUEST, { message: error.message });
  }
};

/**
 * Actualiza un estudiante por su ID.
 * @param {object} req - Objeto de solicitud HTTP con el parámetro "id" y los datos del estudiante en el cuerpo.
 * @param {object} res - Objeto de respuesta HTTP.
 */
const putEstudiante = (req, res) => {
  try {
    const estudianteUpdated = estudianteSchema.validate(req.body).value;

    const id = parseInt(req.params.id);
    const estudiante = findByIdAndUpdate(id, estudianteUpdated);
    if (!estudiante) {
        return sendResponse(res, HttpStatusCodes.BAD_REQUEST, { message: `No existe estudiante con el ID ${id}` });
    }
    return sendResponse(res, HttpStatusCodes.OK, { message: estudiante });
  } catch (error) {
    return sendResponse(res, HttpStatusCodes.BAD_REQUEST, { message: error.message });
  }
};

/**
 * Elimina un estudiante por su ID.
 * @param {object} req - Objeto de solicitud HTTP con el parámetro "id".
 * @param {object} res - Objeto de respuesta HTTP.
 */
const deleteEstudiante = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    deleteById(id);
    return sendResponse(res, HttpStatusCodes.OK, { message: `El estudiante con ID: ${id} fue eliminado` });
  } catch (error) {
    return sendResponse(res, HttpStatusCodes.BAD_REQUEST, { message: error.message });
  }
};

module.exports = {
  getEstudiantes,
  getEstudianteById,
  postEstudiante,
  putEstudiante,
  deleteEstudiante,
};
