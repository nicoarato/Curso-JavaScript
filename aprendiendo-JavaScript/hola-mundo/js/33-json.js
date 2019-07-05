'use strict'

//JSON 
window.addEventListener('load',function(){
    //objeto json
    var pelicula = {
        titulo: 'Batman 3',
        year: 2017,
        pais: 'Estados unidos'
    };

    pelicula.pais="Suecia";
    console.log(pelicula);

    console.log(pelicula.pais);

    var peliculas = [
        {titulo: "superman", year: 2011, pais: "Francia"},
        pelicula,
        {titulo: "Batman", year: 2009, pais: "Alemania"},
    ];

    console.log(peliculas);

    var caja_pelis = document.querySelector("#peliculas");
    for(let index in peliculas){
        var p = document.createElement("p");
        p.append(peliculas[index].titulo +' - '+ peliculas[index].year);
        caja_pelis.append(p);
    }

});