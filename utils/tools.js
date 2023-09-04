const {mockEstudiantes} = require("../mock/estudiantesData.js");

function mustBeInArray(array, id) {
    return new Promise((resolve, reject) => {
        const row = array.find(r => r.id == id)
        if (!row) {
            reject({
                message: 'ID is not good',
                status: 404
            })
        }
        resolve(row)
    })
}


function findById(id) {
  return mockEstudiantes.estudiantes.find(
    (estudiantes) => estudiantes.id === id
  );
}

function find() {
  return mockEstudiantes.estudiantes;
}

function create(estudiante) {
  const newEstudiante = new Estudiante (
    id = mockEstudiantes.estudiantes.length + 1,
    nombre = estudiante.nombre,
    apellido = estudiante.apellido,
    fechaNacimiento = estudiante.fechaNacimiento,
    correoElectronico = estudiante.correoElectronico,
    );
    mockEstudiantes.estudiantes.push(newEstudiante);
  return newEstudiante;
}

module.exports = {findById, find, create}