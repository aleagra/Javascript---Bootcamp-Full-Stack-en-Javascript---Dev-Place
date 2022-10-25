// .Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.



function info(comentario) {    
      var resultado = "El comentario" ;  
         if(comentario == comentario.toUpperCase())
          {       resultado += " está formada sólo por mayúsculas";    
         }     
         else if(comentario == comentario.toLowerCase())
          {       resultado += " está formada sólo por minúsculas";   
          }     else
           {       resultado += " está formada por mayúsculas y minúsculas";    
         }   
                return resultado;  
             }     
              alert(info("hola"));  
               alert(info("COMO ESTAS"));
               alert(info("hola COMO ESTAS"));