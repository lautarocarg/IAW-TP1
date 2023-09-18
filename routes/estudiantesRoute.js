const express = require("express");
const { requiredScopes } = require('express-oauth2-jwt-bearer');
const router = express.Router();
const {getEstudiantes, getEstudianteById, postEstudiante, putEstudiante, deleteEstudiante} = require('../controllers/estudianteController')
  
const checkScopesRead = requiredScopes('read:estudiantes');
const checkScopesWrite = requiredScopes('write:estudiantes');

router.get("/",checkScopesRead, getEstudiantes);

router.get("/:id",checkScopesRead, getEstudianteById);

router.post("/",checkScopesWrite, postEstudiante);

router.put("/:id",checkScopesWrite, putEstudiante);

router.delete("/:id",checkScopesWrite, deleteEstudiante);


module.exports = router;