var palabras = [
  ["mar", "Esta en la playa"],
  ["sol", "Ilumina el cielo"],
  ["Tramontina", "Marca de cuchillo que todos tienen"],
  ["Coliseo", "se celebraban espectaculos romanos"],
  ["Everest", "Nombre de la montaña mas grande"],
  ["Duglas","Profe de la tarde"],
];
var palabra = "";
var random;
var palabraOculta = [];
var contadorIntento = 3;
var hueco = document.getElementById("palabra");

function generaPalabra() {
  random = (Math.random() * 6).toFixed(0);
  palabra = palabras[random][0].toUpperCase();
}

function pintarGuiones(num) {
  hueco.innerHTML = "";
  for (var i = 0; i < num; i++) {
    palabraOculta[i] = " _ ";
  }
  hueco.innerHTML = palabraOculta.join("");
}

var buttons = document.getElementsByClassName("letra");
var btnInicio = document.getElementById("palabra");

function generaABC(a, z) {
  document.getElementById("msg-final").innerHTML = "";
  document.getElementById("abcdario").innerHTML = "";
  var i = a.charCodeAt(0),
    j = z.charCodeAt(0);
  var letra = "";
  for (; i <= j; i++) {
    letra = String.fromCharCode(i).toUpperCase();
    document.getElementById("abcdario").innerHTML +=
      "<button class='btn btn-dark' value='" +
      letra +
      "' onclick='intento(\"" +
      letra +
      "\")' class='letra' id='" +
      letra +
      "'>" +
      letra +
      "</button>";
  }
}
function intento(letra) {
    if (contadorIntento > 0) {
      document.getElementById(letra).disabled = true;
      if (palabra.indexOf(letra) != -1) {
        for (var i = 0; i < palabra.length; i++) {
            
          if (palabra[i] == letra) palabraOculta[i] = letra;
        }
        document.getElementById("acierto").innerHTML ="";
        hueco.innerHTML = palabraOculta.join("");
      } else {
        contadorIntento--;
        document.getElementById("intentos").innerHTML = contadorIntento;
        document.getElementById("acierto").innerHTML = "La letra no forma parte de la palabra";
      }
      compruebaFin();
    }
  }

  function pista() {
    document.getElementById("hueco-pista").innerHTML = palabras[random][1];
  }
  
  function compruebaFin() {
    if (palabraOculta.indexOf(" _ ") == -1) {
    document.getElementById("acierto").innerHTML ="";
    document.getElementById("msg-final").classList.add("win");
  document.getElementById("msg-final").innerHTML = "Adivinaste la palabra ";
      
      for (var i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true;
      }
          
    } else if (contadorIntento == 0) {
    document.getElementById("acierto").innerHTML ="";
    document.getElementById("msg-final").classList.add("lose");
      document.getElementById("msg-final").innerHTML =
        "Perdiste intenta de nuevo";
      for (var i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true;
      }
  
    }
  }
    function inicio() {
    palabra = "";
    palabraOculta = [];

    document.getElementById("palabra").classList.remove("encuadre");
    generaPalabra();
    pintarGuiones(palabra.length);
    generaABC("a", "z");
    contadorIntento = 3;
    document.getElementById("acierto").innerHTML ="";
    document.getElementById("hueco-pista").innerHTML ="";
    document.getElementById("intentos").innerHTML = contadorIntento;
  }
  inicio();