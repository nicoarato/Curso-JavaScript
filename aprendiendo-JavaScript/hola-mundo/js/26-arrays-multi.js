'use strict'

var categoria = ['Accion', 'Terror', 'Comedia'];
var peliculas = ['La vida es bella', 'Rocky 2', 'Rambo', 'Mi villano favorito', 'Titanic'];
var cine = [categoria, peliculas];
console.log(cine);

//cine[categoria][cat1]
console.log(cine[0][1]);

//cine[pelicula][pelicula3s]
console.log(cine[1][3]);

//añadir elemento
//peliculas[]= "IA"; //php

peliculas.push("IA");
console.log(peliculas);

var elemento = prompt("introduce la pelicula");
while(elemento != "OK"){
    peliculas.push(elemento);
    elemento = prompt("introduce la pelicula");
}
console.log(peliculas);

//Eliminar una pelicula al final
peliculas.pop();
 console.log(peliculas);

 //Eliminar una pelicula en particular

 var indice = peliculas.indexOf("Rocky 2");
 var indice = "OK";
 console.log(indice);

 if(indice > -1){
     peliculas.splice(indice,1);
 }
 console.log(peliculas);

 //Pasar el array a un string separado por comas.
 var cadena = peliculas.join();
 console.log(cadena);


 //convertir un texto a un array
var texto = "texto1, texto2, texto3";
var texto_array = texto.split(", ");
console.log(texto_array);

//Ordenar un array
console.log(peliculas.sort());


//invertir array
var rev = console.log(peliculas.reverse());
for(let peli in peliculas){
    document.write("<p>"+peliculas[peli]+ "</p>");
}

//busquedas
var busqueda1 = peliculas.find(function(peli){
    return peli == "Rambo2";
});


//opcion 2
var busqueda2 = peliculas.find(peli => peli == "Rambo");
console.log(busqueda2);

//devolver el indice de la busqueda
var indice2 = peliculas.findIndex(peli => peli == "Rambo2");
console.log(indice2);


//preguntar si los datos cumplen una condicion concreta
var precios = [12,324,34,43,543,545,5];
var busqueda3 = precios.some(precio => precio > 500);
console.log(busqueda3);