const Estudiante = require("../models/estudianteModel")

const getEstudiantes = async(req, res) => {
    try{
        const estudiante =  await Estudiante.find({});
        res.status(200).json(estudiante)
    }
    catch {
        res.status(500).json({message: error.message})
    }
    res.send("POST request to the homepage");
}

const getEstudianteById =  async (req, res) => {
    try{
        const {id} = req.params;
        const estudiante =  await Estudiante.findById(id);
        res.status(200).json(estudiante)
    }
    catch {
        res.status(500).json({message: error.message})
    }
    res.send("POST request to the homepage");
}

//Listo
const postEstudiante = async (req, res) => {
    try{
        const estudiante =  await Estudiante.create(req.body)
        const {id} = req.params;
        res.status(200).json({estudiante: estudiante})
    }
    catch {
        res.status(500).json({message: error.message})
    }
    res.send("POST request to the homepage");
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
    res.send("POST request to the homepage");
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
    res.send("POST request to the homepage");
};

module.exports = {
    getEstudiantes,
    getEstudianteById,
    postEstudiante,
    putEstudiante,
    deleteEstudiante,
}