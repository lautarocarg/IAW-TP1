const { findById, find, create, deleteById } = require("../utils/tools");
const { schema } = require("../models/estudianteModel");

const getEstudiantes = async(req, res) => {
    try{
        const estudiante =  find();
        res.status(200).json(estudiante)
    }
    catch(error) {
        res.status(500).json({message: error.message})
    }
}

const getEstudianteById =  async (req, res) => {
    try{
        const id = parseInt(req.params.id);
        const estudiante = findById(id);
        res.status(200).json(estudiante)
    }
    catch {
        res.status(500).json({message: error.message})
    }
}

//Listo
const postEstudiante = async (req, res) => {
    try{
        schema.validate(req.body);
        const estudiante = create(req.body)
        res.status(200).json(estudiante)
    }
    catch {
        res.status(500).json({message: error.message})
    }
};

//Listo
const putEstudiante = async (req, res) => {
    try{
        const {id} = req.params;
        const estudiante =  await Estudiante.findByIdAndUpdate(id);
        if(!estudiante){
            res.status(404).json({message: `No existe estudiante con el ID ${id}`})
        }
        const estudianteActualizado =  await Estudiante.findById(id);
        res.status(200).json(estudianteActualizado)
    }
    catch {
        res.status(500).json({message: error.message})
    }
};

const deleteEstudiante = async (req, res) => {
    try{
        const id = parseInt(req.params.id);
        deleteById(id);
        res.status(200).json({message: `El estudiante con ID:  ${id} fue eliminado`})
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
}

module.exports = {
    getEstudiantes,
    getEstudianteById,
    postEstudiante,
    putEstudiante,
    deleteEstudiante,
}