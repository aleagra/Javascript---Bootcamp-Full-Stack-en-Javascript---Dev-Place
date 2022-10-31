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
    var dni = document.getElementById("dni").value;
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var telefono = document.getElementById("telefono").value;
    persona = new Agenda(dni, nombre, apellido, telefono);
    misPersonas.push(persona);
    ordenar();
    mostrar();
  }
  function mostrar() {
    document.getElementById("tabla").innerHTML = "";
    var fila = "";
    misPersonas.forEach((element, index) => {
      fila += "<tr><td>" + element.dni + "</td><td>" + element.nombre + "</td><td>" + element.apellido + "</td><td>" + element.telefono +"</td><td><button onclick='eliminar(" + index + ")'>Eliminar</button></td></tr>";
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
  
  function ordenar() {
    misPersonas.sort((a, b) => (a.dni > b.dni ? 1 : b.dni > a.dni ? -1 : 0));
  }
  
  function buscarDni(misPersonas, buscarDnii) {
    let index = 0;
    misPersonas.forEach((element) => {
      if (element.dni == buscarDnii) {
        index = misPersonas.indexOf(element);
      }
    });
    return index;
  }
  
  
  
  function ingresarPersona() {
    let agregarDni = parseInt(prompt("agrega tu dni.."));
    let agregarNom = prompt("agrega tu Nombre..");
    let agregarApe = prompt("agrega tu Apellido..");
    let agregarTel = parseInt(prompt("agrega tu Telefono.."));
  }
  