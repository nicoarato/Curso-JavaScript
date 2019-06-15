'use strict'

var num1 = parseInt(prompt("Ingrese A: " , 0));
var num2 = parseInt(prompt("Ingrese b: ", 0));

while(isNaN(num1) || isNaN(num2)){
    alert("ingrese numeros correctos");
    var num1 = parseInt(prompt("Ingrese A: " , 0));
    var num2 = parseInt(prompt("Ingrese b: ", 0));

}

if (num1 > num2){
    alert("A es mayor");
} else if(num1 < num2){
    alert("B es mayor");
} else if(num1 == num2){
    alert("Son iguales");
} 