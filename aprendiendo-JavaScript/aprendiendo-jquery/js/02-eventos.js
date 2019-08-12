$(document).ready(function(){
    
    //mouseover y mouseout similar a HOVER en css
    var caja = $("#caja");
/*
    caja.mouseover(function(){
        $(this).css("background","red");
    });

    caja.mouseout(function(){
        $(this).css("background","#ccc");
    });
*/

function cambiaRojo(){
    $(this).css("background","red");
}

function cambiaGris(){
    $(this).css("background","#ccc");
}

    //Hover
    caja.hover(cambiaRojo, cambiaGris);


    //click y doble click

    caja.click(function(){
        $(this).css("color","#fff")
               .css("background","yellow"); 
    });

    caja.dblclick(function(){
        $(this).css("color","pink")
               .css("background","black"); 
    });

    //focus y blur
    var nombre = $("#nombre");
    var datos =  $('#datos');

    nombre.focus(function(){
        $(this).css("border","2px solid green");
    });

    nombre.blur(function(){
        $(this).css("border",'1px solid #ccc');
        
       datos.text($(this).val()).show();
    });

    //mousedown y mouseup

    datos.mousedown(function(){
        $(this).css('border-color','green');
    });

    datos.mouseup(function(){
        $(this).css('border-color','red');
    });

    //mouse move
    $(document).mousemove(function(event){
        //console.log(event.clientX + "- "+ event.clientY);

        $('body').css("cursor","none");  //desaparezco el cursor

        var sigueme = $('#sigueme');
        sigueme.css("left",event.clientX)
        .css("top",event.clientY);
    });


});