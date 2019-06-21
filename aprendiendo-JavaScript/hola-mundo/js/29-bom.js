'use strict'
//browser object model

function getBom(){
    //datos de la ventana
    console.log(window.innerHeight);
    console.log(window.innerWidth);

    //datos de la pantalla
    console.log(screen.height);
    console.log(screen.width);

    //datos de la ubicacion, puedo ver la url actual
    console.log(window.location); 
    console.log(window.location.href); 

    

}

//redirigir a otra pagina
function redirect(url){
    window.location.href = url;
}

//que abra una ventana 
function abrirVentana(url){
    //window.open(url);
    window.open(url,"","width=600,heigth=600");
}
getBom();