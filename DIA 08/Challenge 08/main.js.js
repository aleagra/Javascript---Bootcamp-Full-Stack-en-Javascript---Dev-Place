// Consigna 1
class Nif { 
    dni;
    letras;
    constructor(dni){
        this.dni=dni;
        this.letras=this.calcularLetra();
    }
    calcularLetra(){
        let letras=["t","r","w","a","g","m","y","f","p","d","x","b","n","j","z","s","q","v","h","l","c","k","e"];
    return letras[this.dni % 23];    
    }
    leer()
    {
        do{
            const prompt =require("prompt-sync")({sigint:true});
            this.dni=parseInt(prompt("ingresa su dni"));
        }while(this.dni<=0);
        this.letra = this.calcularLetra();
    }
    getDni(){
        return this.dni;
    }
    toString(){
        return "DNI: " + this.dni + "-" + this.letra;
    }
}
var nif=new Nif("44692716");
nif.leer();
console.log(nif.toString());


// Consigna 2
class Rueda{

    inflarRueda(){
        console.log("rueda inflada");
    }
    desinflarRueda(){
        console.log("rueda desinflada");
    }
    
    }
    
    class Motor{
        
    arrancarMotor(){
        console.log("Arrancando auto...");
    }
    apagarAuto(){
        console.log("apagando auto...");
    }
    }
    
    class Ventana{
    
    abrirVentana(){
    console.log("Ventana abierta");
    }
    cerrarVentana(){
        console.log("Ventana cerrada");
    }
    }
    class Puerta{
        abrirPuerta(){
            console.log("Puerta abierta");
            }
            cerrarPuerta(){
             console.log("Puerta cerrada");
            }
    
    }
    class Coche{
    motor;
    ruedas1;
    ruedas2;
    ruedas3;
    ruedas4;
    puertas1;
    puertas2;
    
    
    constructor(){
        this.motor=new Motor();
        this.ruedas1=new Rueda(); 
        this.ruedas2=new Rueda(); 
        this.ruedas3=new Rueda();
        this.ruedas4=new Rueda();
        this.puertas1=new Puerta();
        this.puertas2=new Puerta();
    }
    
    }
    let auto =new Coche().motor.arrancarMotor;



    //consigna 3
    class Persona {
        nombre;
        edad;
        dni;
    
        constructor(nombre, edad, dni) {
            this.nombre = nombre;
            this.edad = edad;
            this.dni = dni;
        }
    
        mostrar() {
            return this.nombre + " " + this.edad + " " + this.dni;
        }
    
        esMayorDeEdad() {
            return this.edad > 18;
        }
    }
    
    let persona = new Persona("jose", 27, 22401243);
    
    console.log(persona.mostrar());
    console.log(persona.esMayorDeEdad());
    
// Consigna 4
class Cuenta {
    titular;
    cantidad;

    constructor(titular) {
        this.titular = titular;
        this.cantidad = 0;
    }

    mostrar() {
        return this.titular + " " + this.cantidad;
    }

    ingresar() {
        this.titular = prompt("Ingresa titular: ");
        this.cantidad = parseFloat(prompt("Ingresa cantidad: "));
        return this.cantidad;
    }

    getTitular() {
        return this.titular;
    }

    setTitular(titular) {
        this.titular = titular;
    }

    getCantidad() {
        return this.cantidad;
    }

    setCantidad(cantidad) {
        this.cantidad = cantidad;
    }
}

let cuenta = new Cuenta();

cuenta.ingresar();
console.log(cuenta.mostrar());