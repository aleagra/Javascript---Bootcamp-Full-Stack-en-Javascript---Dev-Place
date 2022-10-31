class Agenda{
    dni;
    nombre;
    apellido;
    telefono;
    constructor(dni,nombre,apellido,telefono){
    this.dni=dni;
    this.nombre=nombre;
    this.apellido=apellido;
    this.telefono=telefono;
}

getDni(){
    return this.dni;
}
setDni(){
    this.dni=dni;
}
getNombre(){
    return this.Nombre;
}
setNombre(){
    this.nombre=nombre;
}
getApellido(){
    return this.apellido;
}
setApellido(){
    this.apellido=apellido;
}
getTelefono(){
    return this.telefono;
}
setTelefono(){
    this.telefono=telefono;
}

mostrarAgenda(){
    return " [" + this.dni + " " + this.nombre + " " + this.apellido + " " + this.telefono+ "] ";
}

}

var menu;
var misPersonas=[];
var persona;



    do{
        menu = prompt(" 1 Ver la matriz. \n 2 Agregar datos a la matriz. \n 3 eliminar datos de la matriz. \n 4 Buscar datos por dni.");
       
       switch(menu){
           case "1":
            misPersonas.forEach(element => {
                console.log(element)
            });
               break;
       
           case "2":
               ingresarPersona()
               break;
       
           case "3":
            let elementoEliminado = prompt(" ingrese el dni a eliminar ");
               let index= buscarDni(misPersonas,elementoEliminado);
               eliminarFila(misPersonas,index);
               console.log("Hemos eliminado el Dni correctamente.");
               
               break;
       
           case "4": 
               let buscarDnii  = parseInt(prompt(" escribi el DNI que vas a buscar..."));
               console.log("Hemos encontrado tu DNI" + misPersonas[buscarDni(misPersonas,buscarDnii)].mostrarAgenda())
              break;
           case "0":
               break;

           default: alert("Ingrese una opcion valida");
               break;
       
       }}while(menu != "0" );

       function buscarDni(misPersonas,buscarDnii){
        let index=0
        misPersonas.forEach(element=>{
            if(element.dni==buscarDnii){
                index=misPersonas.indexOf(element)
              }
        })
        return index;
       }

       function eliminarFila(misPersonas,elementoEliminado){
        misPersonas.splice(elementoEliminado, 1);
       }

        function ingresarPersona(){
    let agregarDni = parseInt(prompt("agrega tu dni.."));
    let agregarNom =prompt("agrega tu Nombre..");
    let agregarApe =prompt("agrega tu Apellido..");
    let agregarTel = parseInt(prompt("agrega tu Telefono.."));
    persona= new Agenda(agregarDni, agregarNom, agregarApe, agregarTel) ;
    misPersonas.push(persona);
    }
