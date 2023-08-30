const express = require("express");
const router = express.Router();
const {getEstudiantes, getEstudianteById, postEstudiante, putEstudiante, deleteEstudiante,} = require('../controllers/estudianteController')

router.get("/", getEstudiantes);

router.get("/:id", getEstudianteById);

router.post("/", postEstudiante);

router.put("/:id", putEstudiante);

router.delete("/:id", deleteEstudiante);


module.exports = router;