'use strict'
/*
let define la variable en el ámbito del bloque
declaración o expresión donde se está usando.

var define una variable global o local sin
importar el ámbito del bloque.
*/

//pruebas con let y var

var numero = 40;
console.log(numero);
if(true){
    var numero = 50;
    //let numero = 500;
    console.log(numero);
}

console.log(numero);

var texto = "curso-js";
console.log(texto);
if(true){
    
    let texto = "MASTER-PHP";
    console.log(texto);
}

console.log(texto);