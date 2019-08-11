$(document).ready(function(){
    
    //SELECTOR DE id
    var rojo = $("#rojo").css("background","red")
                        .css("color", "white");


    var amarillo = $("#amarillo").css("background","yellow")
                                .css("color","green");
    
    
    var verde = $("#verde").css("background", "green");
    
    
    //Selectores de Clases

    var mi_clase= $('.zebra');

    console.log(mi_clase[0]);
    //console.log(mi_clase.eq(1));

    mi_clase.css("border", "5px dashed black");



    $('.sin_borde').click(function(){
        console.log("click");
        $(this).addClass('zebra');
    });

//selectores de etiquetas

var parrafos = $('p').css("cursor", "pointer");

parrafos.click(function(){
    var that = $(this);
    if(!that.hasClass('grande')){
        that.addClass('grande');
    }else{
        that.removeClass('grande');
    }
});

//selectores de atributos

$('[title="Google"]').css('background', '#ccc');
$('[title="Facebook"]').css('background', 'blue');

// otros selectores

//$('p, a').addClass('margen-superior');

/* var busqueda = $('#caja').find('.resaltado');
console.log(busqueda); */

var busqueda = $('#caja .elemento2').parent().parent().find('.resaltado');
console.log(busqueda);

});