'use strict';

//utilizamos https://jsonplaceholder.typicode.com/

//fetch (ajax) y peticiones a servicios / apis rest

var div_usuarios = document.querySelector('#usuarios');
var div_janet = document.querySelector('#janet');
//var usuarios = [];
//fetch('https://jsonplaceholder.typicode.com/users')

//hace un pedido a un remoto
    getUsuarios()
    .then(data => data.json()) //capturamos los datos, lo convertimos a json (js)
    .then(users => {
    // usuarios = users.data; //guarar en la variable usuarios
        listadoUsuarios(users.data);

        return getJanet();
    })
    .then(data => data.json())
    .then(user => {
        mostrarJanet(user.data);

        return getInfo();
    })
    .then(data => {
        console.log(data);
    })
    //capturar errores
    .catch(error => {
        console.log(error);
    });
    

;

function getUsuarios(){
    return fetch('https://reqres.i1n/api/users');
}

function getJanet(){
    return fetch('https://reqres.in/api/users/2');
}

function getInfo(){
    
    var profesor = {
        nombre: 'Nico',
        apellido: 'Arato',
        email: 'nico@gmail.com'
    };

    return new Promise((resolve, reject) => {
       var profesor_string = JSON.stringify(profesor);
       if(typeof profesor_string != 'string') {
            return reject('error');
       }

       return resolve(profesor_string);
    });
    
}

function listadoUsuarios(usuarios){
    usuarios.map((user, i) => {
        let nombre = document.createElement('h2');

        nombre.innerHTML= i + " " + user.first_name + " " + user.last_name;
        //nombre.innerHTML= i + " " + user.name ;
        div_usuarios.appendChild(nombre);

        document.querySelector('.loading').style.display = 'none';
        
    });
}

function mostrarJanet(user){
    
        let nombre = document.createElement('h2');
        let avatar = document.createElement('img');
        nombre.innerHTML=  " " + user.first_name + " " + user.last_name;
        //nombre.innerHTML= i + " " + user.name ;
        avatar.src= user.avatar;
        avatar.width = '100'
        div_janet.appendChild(nombre);
        div_janet.appendChild(avatar);
        document.querySelector('#janet .loading').style.display = 'none';
        
}