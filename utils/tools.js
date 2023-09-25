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
    message = 'No existe estudiante con el ID ' + id
    throw Error(message)
  }

  estudiantes.splice(indexStudentToDelete, 1);   
}

function findByIdAndUpdate(id, estudianteUpdate) {
  let indexStudentToUpdate = estudiantes.findIndex(estudiante => estudiante.id === id);
  if (indexStudentToUpdate < 0) {
    message = 'No existe estudiante con el ID ' + id
    throw Error(message)
  }

  let studentToUpdate = estudiantes[indexStudentToUpdate];   
  studentToUpdate.nombre = estudianteUpdate.nombre;
  studentToUpdate.apellido = estudianteUpdate.apellido;
  studentToUpdate.fechaNacimiento = estudianteUpdate.fechaNacimiento;
  studentToUpdate.correoElectronico = estudianteUpdate.correoElectronico;

  return studentToUpdate; 
}

function parseFecha(fecha){
  var dia = fecha.getDate();
  var mes = fecha.getMonth() + 1; 
  var año = fecha.getFullYear();
  
  var fechaFormateada = dia + '/' + (mes < 10 ? '0' : '') + mes + '/' + año;
  return fechaFormateada
  }

module.exports = {findById, findAll, create, deleteById, findByIdAndUpdate, parseFecha}