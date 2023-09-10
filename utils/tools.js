const {estudiantes} = require("../mock/estudiantesData.js");

function findById(id) {
  let estudiante =  estudiantes.find(
    estudiante => estudiante.id == id
  );

  return estudiante;
}

function findAll() {
  return estudiantes;
}

function create(estudiante) {
  let id = estudiantes.length + 1;
  let estudianteFormated = { id,...estudiante}
  estudiantes.push(estudianteFormated);
  return estudianteFormated;
}

function deleteById(id) {
  let indexStudentToDelete = estudiantes.findIndex(estudiante => estudiante.id == id);
  if (indexStudentToDelete < 0) {
    throw Error `No existe estudiante con el ID ${id}`
  }

  estudiantes.splice(indexStudentToDelete, 1);   
}

function findByIdAndUpdate(id, estudianteUpdate) {
  let indexStudentToUpdate = estudiantes.findIndex(estudiante => estudiante.id === id);
  if (indexStudentToUpdate < 0) {
    throw Error `No existe estudiante con el ID ${id}`
  }

  let studentToUpdate = estudiantes[indexStudentToUpdate];   
  studentToUpdate.nombre = estudianteUpdate.nombre;
  studentToUpdate.apellido = estudianteUpdate.apellido;
  studentToUpdate.fechaNacimiento = estudianteUpdate.fechaNacimiento;
  studentToUpdate.correoElectronico = estudianteUpdate.correoElectronico;

  return studentToUpdate; 
}

module.exports = {findById, findAll, create, deleteById, findByIdAndUpdate}