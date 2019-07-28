'use strict'

window.addEventListener('load',function(){

    //comprobar disponibilidad del localstorage
    if(typeof(Storage) != 'undefined'){
        console.log("Localstorage disponilble");
    }else{
        console.log("Localstorage NO disponilble");
    }


    //guardar datos en localstorage

    this.localStorage.setItem("titulo", "Curso de JavaScript");

    //recuperar elemento
    console.log(this.localStorage.getItem("titulo"));
    this.document.querySelector("#peliculas").innerHTML=this.localStorage.getItem("titulo");

    //guardar objetos
    var usuario = {
        nombre: "Nico Arato",
        email: "nico@gmail.com"
    };

    //No se puede guardar en formato json en localstorage
    //this.localStorage.setItem("usuario",usuario); //se debe convertirlos a string
    this.localStorage.setItem("usuario", JSON.stringify(usuario));

    //recuperar objeto del localstorage
    var userjs = JSON.parse(localStorage.getItem("usuario"));
    this.console.log(userjs);

    this.document.querySelector("#datos").append(userjs.email + " - " + userjs.nombre);

    //this.localStorage.removeItem("usuario"); //borrar un item del LS
    this.localStorage.clear(); //borra todos los items del LS
});