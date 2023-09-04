const {estudiantes} = require("../mock/estudiantesData.js");

function findById(id) {
  let estudiante =  estudiantes.find(
    estudiante => estudiante.id == id
  );

  return estudiante;
}

function find() {
  return estudiantes;
}

function create(estudiante) {
  let id = estudiantes.length + 1;
  let estudianteFormated = { id,...estudiante}
  estudiantes.push(estudianteFormated);
  return estudianteFormated;
}

function deleteById(id) {
  let studentToDelete = estudiantes.findIndex(estudiante => estudiante.id == id);
  if (!studentToDelete) {
    throw Error `No existe estudiante con el ID ${id}`
  }

  estudiantes.splice(studentToDelete, 1);   
  console.log(estudiantes)
}

module.exports = {findById, find, create, deleteById}