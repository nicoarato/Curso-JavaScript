'use strict'

//plantillas de texto

var nombre = prompt("Nombre:");
var apellido = prompt("Apellido:");

//var texto = " Mi nombre es : " + nombre+ " Mi apellido: "+apellido;

var texto = `
            <h1> Hola Que tal</h1>
            <h3>Mi nombre es : ${nombre}</h3>
            <br>
            <h3>Mi Apellido es : ${apellido}</h3>
            <br>

`;

document.write(texto);

