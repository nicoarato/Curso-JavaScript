'use strict'

/* calculadora que pida los numeros validados
muestre en el body en una alert y por consola el resultado
+ - * / esas 2 cifras*/

var a = parseInt(prompt("ingrese A: "));
var b = parseInt(prompt("ingrese B: "));

while(isNaN(a) || isNaN(b)){
    a = parseInt(prompt("ingrese A: "));
    b = parseInt(prompt("ingrese B: "));

}
var suma =a+b;
var resta = a-b;
var multi = a*b;
var div = a/ b;
document.write("Suma: "+ suma+ "<br>");


document.write("resta: "+ resta+ "<br>");


document.write("multi: "+ multi+ "<br>");


document.write("div: "+ div+ "<br>");


var resultado = "Suma: "+ suma+ "\n"+
                "resta: "+ resta+ "\n"+
                "multi: "+ multi+ "\n"+
                "div: "+ div+ "\n";

alert(resultado);
console.log(resultado);