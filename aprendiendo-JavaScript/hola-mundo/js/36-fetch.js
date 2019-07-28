'use strict';

//utilizamos https://jsonplaceholder.typicode.com/

//fetch (ajax) y peticiones a servicios / apis rest

var div_usuarios = document.querySelector('#usuarios');
var div_imagen = document.querySelector('#imagen');
var usuarios = [];
//fetch('https://jsonplaceholder.typicode.com/users')

//hace un pedido a un remoto
fetch('https://reqres.in/api/users')

.then(data => data.json()) //capturamos los datos, lo convertimos a json (js)
.then(users => {
    usuarios = users.data; //guarar en la variable usuarios
    console.log(usuarios);

    usuarios.map((user, i) => {
        let nombre = document.createElement('h2');

        nombre.innerHTML= i + " " + user.first_name + " " + user.last_name;
        
        div_usuarios.appendChild(nombre);

        document.querySelector('.loading').style.display = 'none';
        
    });
});
