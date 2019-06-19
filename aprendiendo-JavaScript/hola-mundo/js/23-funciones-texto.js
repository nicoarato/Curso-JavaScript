'use strict'

//transformar texto

var numero = 444;
var texto1 = "Hola mundo, esto es un curso, y encontraremos otra palabra curso.";
var texto2 = "    ESte es OTRO texto    ";


//transformar a string
var dato = numero.toString();
console.log(typeof dato);

//transformar a mayuscula
dato = texto1.toUpperCase();
console.log(dato);

//transformar a minuscula
dato = texto2.toLocaleLowerCase();
console.log(dato);

//longitud de cadena
var nombre = "Nico Arato";
console.log(nombre.length);

//cantidad de elementos
var arreglo = ["hola", "ola", "plar"];
console.log(arreglo.length);

//concatenar

var texto = texto1 +" " +texto2;
console.log(texto);

var texto3 = texto1.concat(" "+texto2+" 3");
console.log(texto3);

//busqueda, encuentra la posición desde donde está el texto buscado
var busqueda = texto1.indexOf("curso");
console.log(busqueda);

var busqueda2 = texto1.lastIndexOf("curso");
console.log(busqueda2);

var busqueda3 = texto1.search("curseee");
console.log(busqueda3);

var busqueda4 = texto1.match("curso"); //primer ocurrencia
console.log(busqueda4);

var busqueda5 = texto1.match(/curso/g); //expresion regular
console.log(busqueda5);

//extraer trozos de texto
var busqueda5 = texto1.substr(14,6);
console.log(busqueda5);

var busqueda6 = texto1.substr(texto1.indexOf("curso"),texto1.length-1);
console.log(busqueda6);

//extrae una sola letra en una posición

var busqueda7 = texto1.charAt(14);
console.log(busqueda7);

//true o false si la cadena inicia con el string pasado por parametro
var busqueda8 = texto1.startsWith("Hola");
console.log(busqueda8);

//true o false si la cadena finaliza con el string pasado por parametro
var busqueda9 = texto1.endsWith(".");
console.log(busqueda9);

//true o false si la cadena contiene con el string pasado por parametro
var busqueda10 = texto1.includes("curs");
console.log(busqueda10);

//reemplazar un texto con otro
var busqueda11 = texto1.replace("curso", "curse");
console.log(busqueda11);

//corta un string desde una posicion
//var busqueda12 = texto1.slice(15);
var busqueda12 = texto1.slice(15, 30);
console.log(busqueda12);

//recortar texto y dejarlo en un array
//var busqueda13 = texto1.split();

//se puede separar por un caracter y ponerlo en un array
var busqueda13 = texto1.split(" "); 

console.log(busqueda13);

//quitar los espacios por delante y por detras que tenga una cadena
var busqueda14 = texto2.trim(); 
console.log(busqueda14);