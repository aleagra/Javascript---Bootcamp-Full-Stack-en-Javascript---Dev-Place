class Agenda {
  dni;
  nombre;
  apellido;
  telefono;
  constructor(dni, nombre, apellido, telefono) {
    this.dni = dni;
    this.nombre = nombre;
    this.apellido = apellido;
    this.telefono = telefono;
  }

  getDni() {
    return this.dni;
  }
  setDni() {
    this.dni = dni;
  }
  getNombre() {
    return this.Nombre;
  }
  setNombre() {
    this.nombre = nombre;
  }
  getApellido() {
    return this.apellido;
  }
  setApellido() {
    this.apellido = apellido;
  }
  getTelefono() {
    return this.telefono;
  }
  setTelefono() {
    this.telefono = telefono;
  }

  mostrarAgenda() {
    return (
      " [" +
      this.dni +
      " " +
      this.nombre +
      " " +
      this.apellido +
      " " +
      this.telefono +
      "] "
    );
  }
}

function guardar() {
  var dni = parseInt(document.getElementById("dni").value);
let indexP= misPersonas.findIndex(element=>element.dni==dni)
if(indexP==-1 &&  dni && dni!=NaN){
  var nombre = document.getElementById("nombre").value;
  var apellido = document.getElementById("apellido").value;
  var telefono = document.getElementById("telefono").value;
  persona = new Agenda(dni, nombre, apellido, telefono);
  misPersonas.push(persona);
}else{
  alert("Ingrese dato valido");
  document.getElementById("dni").focus();
}
console.log(indexP)
console.log(dni)

  mostrar();
 
}

function mostrar() {
  document.getElementById("tabla").innerHTML = "";
  var fila = "";
  misPersonas.forEach((element, index) => {
    fila +=
      "<tr><td>" +
      element.dni +
      "</td><td>" +
      element.nombre +
      "</td><td>" +
      element.apellido +
      "</td><td>" +
      element.telefono +
      "</td><td><button  class='btn btn-danger' onclick='eliminar(" +
      index +
      ")'>Eliminar</button> <button class='btn btn-primary' onclick='editar(" +
      index +
      ")'>Editar</button> </td> </tr>";
  });

  document.getElementById("tabla").innerHTML = fila;
}
var menu;
var misPersonas = [];
var persona;

function eliminar(index) {
  console.log(index);
  misPersonas.splice(index, 1);
  console.log(misPersonas);
  mostrar();
}
// var dni = parseInt(document.getElementById("dni").value);
// let indexP= misPersonas.findIndex(element=>element.dni==dni)
// if(indexP==-1 &&  dni && dni!=NaN){
//   var nombre = document.getElementById("nombre").value;
//   var apellido = document.getElementById("apellido").value;
//   var telefono = document.getElementById("telefono").value;
//   persona = new Agenda(dni, nombre, apellido, telefono);
//   misPersonas.push(persona);
// }else{
//   alert("");
//   document.getElementById("dni").focus();
// }
// console.log(indexP)
// console.log(dni)

//   mostrar();
 
// }


function editar(indexE) {
  var dniEditar =parseInt(prompt("Ingrese el Dni"));
  misPersonas.forEach((element) => {
    while (dniEditar == element.dni ||  !dniEditar || dniEditar===null ){
    dniEditar = parseInt(prompt("Ingrese un numero valido"));
}});
  let nombreEditar = prompt("Ingrese el nombre");
  let apellidoEditar = prompt("Ingrese el apellido");
  let telefonoEditar = prompt("ingrese el nuevo telefono");

  misPersonas.forEach(function (element, index) {
    if (indexE == index) {
      element.dni = dniEditar;
      element.nombre = nombreEditar;
      element.apellido = apellidoEditar;
      element.telefono = telefonoEditar;
    }
  });
  console.log(misPersonas);
  mostrar();
}   


