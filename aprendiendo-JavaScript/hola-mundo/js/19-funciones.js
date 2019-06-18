'use strict'

//funciones
function calculadora(a, b, mostrar=false){
    if(!mostrar){
        console.log("suma: " + (a + b));
        console.log("resta: " + (a - b));
        console.log("producto: " + (a * b));
        console.log("division: " + (a / b));
    }else{
        alert("suma: " + (a + b) + '\n'+
              "resta: " + (a - b) + '\n'+
              "producto: " + (a * b)+ '\n'+
              "division: " + (a / b)   );
    }

    
}

calculadora(5, 8);