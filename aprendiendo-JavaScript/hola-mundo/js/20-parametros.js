'use strict'

//parametros REST y spread

function listado(f1, f2, ...mas){
    console.log("Fruta 1: " , f1);
    console.log("Fruta 2: " , f2);
    console.log("Mas: " , mas);
    
    console.log(mas[0]);
}

listado("banana", "manzana", "pera", "naranja");

var frutas = ["mandarinas","granadas","quinotos"];

listado(...frutas,"banana", "manzana", "pera", "naranja");