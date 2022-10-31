const prompt = require("prompt-sync")({ sigint: true});

const cargarContacto =()=> {
    let nuevoContacto = [];
    nuevoContacto [0] = prompt('Ingrese el dni: ')
    nuevoContacto [1] = prompt('Ingrese el nombre: ')
    nuevoContacto [2] = prompt('Ingrese el apellido: ')
    nuevoContacto [3] = prompt('Ingrese el telefono: ')
    return nuevoContacto;
}
var agenda = [['39222111','Ema','Fernandez','2235555555'],
['40223311','Carlos','Perez','2234455444'],
['402323212','Lucas','Gimenez','2235555555']
];

agenda.unshift(cargarContacto());
agenda.push(cargarContacto());

console.table(agenda);

agenda.splice(prompt("eliminar contacto de la posicion: "),1);

console.table(agenda);


function buscarArray(dni){
    for (let index = 0; index < agenda.length; index++) {
        let dniDatos = agenda[index][0];
        if (dniDatos == dni){
            return index;
        }    
    }
}

agenda.splice(buscarArray(prompt("ingrese el dni del contacto que quiere borrar: ")),1);
console.table(agenda);






/*
/*function eliminarIndice(dni){
    let contactoAEliminar = agenda.forEach( (ele) => ele[0] = dni );
    let indiceAEliminar = agenda.indexOf(contactoAEliminar);
    agenda.splice(indiceAEliminar, 1);
    console.log('Se ha eliminado el contacto.');
}

console.log(agenda);
/*
function buscarIndice (agenda){
    let contador = 0;
    agenda.forEach(element => {
        if(agenda[contador].indexOf('Carlos') != -1)
        return contador;
        else contador++;
    });
}

let indice = buscarIndice(agenda);
console.log(indice);


*/