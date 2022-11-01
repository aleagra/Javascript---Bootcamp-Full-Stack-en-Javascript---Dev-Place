// - Supongamos que un banco ofrece distintos productos a sus clientes (CuentaCorriente, CajaAhorro, SeguroDeVida, SeguroHogar).
// Realizar el método Object. assign(), utilizando el patrón de diseño Prototype, para realizar la copia de cualquiera de estos productos.

class Banco {
    cuentaCorriente;
    cajaAhorro;
    seguroDeVida;
    seguroHogar;
  
    constructor(cuentaCorriente, cajaAhorro, seguroDeVida, seguroHogar) {
      this.cuentaCorriente = cuentaCorriente;
      this.cajaAhorro = cajaAhorro;
      this.seguroDeVida = seguroDeVida;
      this.seguroHogar = seguroHogar;
    }
  
    clone() {
      return new Banco(
        this.cuentaCorriente,
        this.cajaAhorro,
        this.seguroDeVida,
        this.seguroHogar
      );
    }
  }
  
  const cuentaDeBanco = new Banco("si", 20000, "si", "no");
  const copy = cuentaDeBanco.clone();
  
  // Punto 2
  
  // 2 - Supongamos que vamos a crear una oficina para una empresa determinada y estamos seguros que solo compraremos esa sola. La oficina tendrá un nombre y una cantidad fija de empleados. Si intento crear una segunda oficina me debería devolver la primera instancia creada. Aplicar el patron de diseño Singleton y explicar que principio SOLID es contrario a este patrón de diseño.
  let _singleton = null;
  class Empresa {
    constructor(nombre, empleados) {
      if (!_singleton) {
        this.nombre = nombre;
        this.empleados = empleados;
        _singleton = this;
      } else return _singleton;
      console.log("Singleton class creada");
    }
    SingletonOperaton() {
      console.log(singles);
    }
    getSingletonData() {
      return this.nombre + this.empleados;
    }
  }
  function init_Singleton() {
    var empresa = new Empresa("ale", 12);
    var empresa2 = new Empresa("lucas", 32);
    console.log(empresa.getSingletonData());
    console.log(empresa2.getSingletonData());
    console.log(empresa instanceof Empresa);
    console.log(empresa2 instanceof Empresa);
    console.log(empresa === empresa2);
  }
  init_Singleton();
  // 3 - Supongamos que tienes una Pizzeria y que tus Pizzas pueden o no tener queso, tomate, masa fina y ananá. Cada pizza es customizable y se adapta segun esos parametros a lo que pide el cliente. Crear una clase pizza y un método diferente por cada argumento que necesitamos pasarle al constructor devolviendo this en cada uno de ellos.  Instanciar todos los valores por defecto que querra nuestro cliente de los ingredientes de nuestra pizza. Utilizar el metodo build para crear una nueva instancia de pizza. Aplicar el patron de diseño builder. Realizar este mismo ejercicio sin aplicar el patron de diseño builder. ¿Que pasa si solo quiero llamar a los métodos queso y tomate? Supongamos que un cliente pide solo ese tipo de pizza.
  
  class Pizza {
    constructor() {
      this.tomate = false;
      this.queso = false;
      this.masafina = false;
      this.anana = false;
      this.agregados = [];
    }
    setTomate() {
      this.tomate = true;
      return this.tomate;
    }
    setQueso() {
      this.queso = true;
      return this;
    }
    setMasafina() {
      this.masafina = true;
      return this;
    }
    setAnana() {
      this.anana = true;
      return this;
    }
    addAgregados(ingredientes) {
      this.agregados.push(ingredientes);
      return this;
    }
    build() {
      return {
        tomate: this.tomate,
        queso: this.queso,
        masafina: this.masafina,
        anana: this.anana,
        bacon: this.bacon,
        agregados: this.agregados,
      };
    }
  }
  let pizza = new Pizza();
  console.log(pizza);
  let pizzaConAnana = new Pizza();
  pizzaConAnana.setQueso().setTomate().setAnana().build();
  console.log(pizzaConAnana)
//4 - Supongamos que tengo 3 manzanas pero se diferencian cada una de su color (la primera es amarilla, la segunda roja y la tercera verde) y de su fecha de vencimiento (la primera vence en 5 dias, la segunda en 7 dias y la tercera en 10 dias). Para no instanciar cada sub clase de manzanas de manera separada crear la clase AppleFactory y dependiendo de los parámetros mandados, va a hacer una instancia de objeto. Aplicar el patrón de diseño Factory Method.
class Color {
    color;

    constructor(color){
        this.color=color;
    }



}
class Vencimiento extends Color{
    fechaVencimiento;
    
    constructor(fechaVencimiento,color){
        super(color)
        this.fechaVencimiento=fechaVencimiento;
    
       
    }
}
class AppleFactory extends Vencimiento{

    constructor(color,fechaVencimiento){
        super(color,fechaVencimiento)
      
    }
}


let manzana = new AppleFactory("azul","mañana");
console.table(manzana)