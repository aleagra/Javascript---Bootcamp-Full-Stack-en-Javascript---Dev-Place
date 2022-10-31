// Se pretende realizar una aplicación para esta academia que gestione la información sobre las personas vinculadas con la misma, que se pueden clasificar en tres tipos: estudiantes, profesores y personal de servicio. A continuación, se detalla qué tipo de información debe gestionar esta aplicación:
// • Por cada persona, se debe conocer, al menos, su nombre y apellidos, su número de identificación y su estado civil.
// • Con respecto a los empleados, sean del tipo que sean, hay que saber su año de incorporación a la facultad y qué número de despacho tienen asignado.
// • En cuanto a los estudiantes, se requiere almacenar el curso en el que están matriculados.
// • Por lo que se refiere a los profesores, es necesario gestionar a qué departamento pertenecen (base de datos, java, php, ...).
// • Sobre el personal de servicio, hay que conocer a qué sección están asignados (biblioteca, decanato, secretaría, ...).
// El ejercicio consiste, en primer lugar, en definir la jerarquía de clases de esta aplicación. A continuación, debe programar las clases definidas en las que, además de los constructores, hay que desarrollar los métodos correspondientes a las siguientes acciones:
// • Cambio del estado civil de una persona.
// • Reasignación de despacho a un empleado.
// • Matriculación de un estudiante en un nuevo curso.
// • Cambio de departamento de un profesor.
// • Traslado de sección de un empleado del personal de servicio.
// • Imprimir toda la información de cada tipo de individuo.


class Persona{
    nombre;
    apellido;
    id;
    estadoCivil;

    constructor(nombre,apellido,id,estadoCivil){
        this.nombre=nombre;
        this.apellido=apellido;
        this.id=id;
        this.estadoCivil=estadoCivil;

    }

    cambioEstadoCivil(palabra){
    this.estadoCivil= palabra;


    }

    mostrarDatos(){
        return this.nombre+" "+this.apellido+" "+this.id+" "+this.estadoCivil;
    }

}
class Estudiante extends Persona {
    curso;

    constructor(curso,nombre,apellido,id,estadoCivil){
        super(nombre,apellido,id,estadoCivil)
        this.curso=curso;

}
datosEstudiante(){
    return super.mostrarDatos()+" "+this.curso;
}
Matriculación(nuevo){
    this.curso= nuevo;
}
}
class Empleados extends Persona {
    incorporacion;
    nDespacho;

    constructor(incorporacion,nDespacho,nombre,apellido,id,estadoCivil){
        super(nombre,apellido,id,estadoCivil);
        this.incorporacion=incorporacion;
        this.nDespacho=nDespacho;

    }
    ReasignacionDeDespacho(nuevo){
        this.nDespacho= nuevo;
    }
}
class PersonalServicio extends Empleados{
    asignacion;

    constructor(incorporacion,nDespacho,asignacion,nombre,apellido,id,estadoCivil){
        super(incorporacion,nDespacho,nombre,apellido,id,estadoCivil);
        this.asignacion=asignacion;
    }
    cambioDeSeccion(nuevo){
        this.nDespacho=nuevo;
    }
}
class Profesor extends Empleados{
    departamento;

    constructor(incorporacion,nDespacho,asignacion,departamento,nombre,apellido,id,estadoCivil){
        super(incorporacion,nDespacho,asignacion,nombre,apellido,id,estadoCivil)
        this.departamento=departamento;

    }
    CambioDeDepartamento(cambio){
        this.departamento=cambio;

    }
    
}
let listaEstudiantes=[];
let ListaProfesor=[];
let ListaPersonalServicio=[];
let estudiante = new Estudiante('4°','Juan','Perez',123,'Soltero');
let estudiante1 = new Estudiante('5°','Rodolfo','Juarez',32,'Casado');
let estudiante2 = new Estudiante('3°','Lucas','Gimenez',123,'Soltero');
estudiante.cambioEstadoCivil('casado');
estudiante.Matriculación(32);
listaEstudiantes.push(estudiante,estudiante1,estudiante2)
console.table(listaEstudiantes)

 
let profesor1 = new Profesor('2003',15,'santiago','java','enzo','rodriguez','soltero');
let profesor2 = new Profesor('2005',11,'nicolas','c++','rodrigo','fernandez','casado');
let profesor3 = new Profesor('2008',7,'martin','base de datos','faundo','jimenes','en pareja');
profesor3.CambioDeDepartamento('js');
ListaProfesor.push(profesor1,profesor2,profesor3)
console.table(ListaProfesor);

let personal = new PersonalServicio('2000',1243,'salon 1','juanito','gomez',324234,'soltero');
let persona2 = new PersonalServicio('1987',2343,'salon 3','roberto','fernandez',325432,'casado');
personal.cambioDeSeccion(3213);
ListaPersonalServicio.push(personal,persona2)
console.table(ListaPersonalServicio);

