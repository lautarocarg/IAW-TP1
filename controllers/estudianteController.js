const { findById, find, create } = require("../utils/tools");

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
        const {id} = req.params;
        const estudiante =  await findById(id);
        res.status(200).json(estudiante)
    }
    catch {
        res.status(500).json({message: error.message})
    }
}

//Listo
const postEstudiante = async (req, res) => {
    try{
        const estudiante =  await create(req.body)
        const {id} = req.params;
        res.status(200).json({estudiante: estudiante})
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
        const {id} = req.params;
        const estudiante =  await Estudiante.findByIdAndDelete(id);
        if(!estudiante){
            res.status(404).json({message: `No existe estudiante con el ID ${id}`})
        }
        res.status(200).json({message: `Eliminado estudiante con ID ${id}`})
    }
    catch {
        res.status(500).json({message: error.message})
    }
};

module.exports = {
    getEstudiantes,
    getEstudianteById,
    postEstudiante,
    putEstudiante,
    deleteEstudiante,
}