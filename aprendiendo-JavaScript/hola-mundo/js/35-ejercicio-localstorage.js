'use strict'

window.addEventListener('load',function(){

    var formulario = document.querySelector("#formpeliculas");

    formulario.addEventListener('submit', function(){
        var titulo = document.querySelector("#addpelicula").value;
        
        if(titulo.length >= 1){
            localStorage.setItem(titulo,titulo);
        }
    });

    var ul= this.document.querySelector("#lista-peliculas");
    for(var i in this.localStorage){
        this.console.log(this.localStorage[i]);
        if(typeof this.localStorage[i] == 'string'){
            let li = this.document.createElement("li");
            li.append(this.localStorage[i]);
            ul.append(li);
        }

    }

    var formulariob = document.querySelector("#formBorrarPeliculas");

    formulariob.addEventListener('submit', function(){
        var titulo = document.querySelector("#borrarPelicula").value;
        
        if(titulo.length >= 1){
            localStorage.removeItem(titulo);
        }
    });

});
