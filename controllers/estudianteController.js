const { findById, find, create, deleteById, findByIdAndUpdate } = require("../utils/tools");
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
        const { error, value } = schema.validate(req.body);
        if(error){
            throw error;
        }
        const estudiante = create(req.body)
        res.status(200).json(estudiante)
    }
    catch(error) {
        res.status(500).json({message: error.message})
    }
};

//Listo
const putEstudiante = (req, res) => {
    try{
        const { error, value } = schema.validate(req.body);
        if(error){
            throw error;
        }
        const estudianteUpdate = req.body;

        if(!req.params.id){
            throw 'Debe indicar un id'
        }
        const id = parseInt(req.params.id);
        const estudiante =  findByIdAndUpdate(id, estudianteUpdate);
        if(!estudiante){
            res.status(404).json({message: `No existe estudiante con el ID ${id}`})
        }
        res.status(200).json(estudiante)
    }
    catch(error) {
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