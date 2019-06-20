'use strict'

function cambiaColor(color){
    caja.style.background = color;    
}

//seleccionando por id
//var caja = document.getElementById("caja");
//seleccionando con queryselector
var caja = document.querySelector("#caja1");

caja.innerHTML = "Cambiando el texto del html!!";
caja.style.background = "gray";
caja.style.color = "white";
caja.style.margin = "0 auto";
caja.style.padding= "10px 100px";
caja.className = "clase"; //agrego clases al elemento

console.log(caja);
//como conseguir elementos por su etiqueta 
var todosLosDiv = document.getElementsByTagName('div');
console.log(todosLosDiv);// html collection
//var contenido_texto = todosLosDiv[2].textContent; //accedo al texto
var contenido_texto = todosLosDiv[2];
/* contenido_texto.innerHTML = "Inserto otro texto";
contenido_texto.style.background = "red";
 */

var seccion = document.querySelector("#miseccion");
var hr = document.createElement("hr");
for(let valor in todosLosDiv){
    //console.log(todosLosDiv[valor].textContent);
    if(typeof todosLosDiv[valor].textContent == 'string'){  //html collection
        var parrafo = document.createElement("p");
        var texto = document.createTextNode(todosLosDiv[valor].textContent);
        parrafo.append(texto);
        seccion.append(parrafo);
    }
};
//seccion.prepend(hr);
seccion.append(hr);
//como conseguir elementos por su clase.

var divsRojos = document.getElementsByClassName("rojo");
console.log(divsRojos);
for(let valor in divsRojos){
    if(divsRojos[valor].className == "rojo"){
        divsRojos[valor].style.background="red";
    }
}


var divsAmarillos = document.getElementsByClassName("amarillo");
console.log(divsAmarillos);
for(let valor in divsAmarillos){
    if(divsAmarillos[valor].className == "amarillo"){
        divsAmarillos[valor].style.background="yellow";
    }
}

//utilizando queryselector

var claseRojo = document.querySelectorAll(".rojo");
console.log(claseRojo);

for(let valor in claseRojo){
    if(claseRojo[valor].className == "rojo"){
        claseRojo[valor].style.background="green";
    }
}