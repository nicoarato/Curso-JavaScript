$(document).ready(function(){

    //mover elemento por la pagina
    $(".elemento").draggable();

    //redimensionar el elemento: agregar en cabecera css
    $(".elemento").resizable();

    //seleccionable
   // $(".seleccionable").selectable();

    //sortable
    $(".seleccionable").sortable({
        update: function(event, ui){
            console.log(ui);
        }
    });

    //droppable
    $("#elemento-movido").draggable();
    $("#area").droppable({
        drop: function(){
            console.log("Has soltado algo dentro");
        }
    });

    $("#mostrar").click(function(){
        
        //aparece desaparece
        //$(".caja-efectos").toggle("fade");
        //$(".caja-efectos").fadeToggle();

        //
        //$(".caja-efectos").effect("explode");
        //$(".caja-efectos").toggle("explode");
        //$(".caja-efectos").toggle("blind");
        //$(".caja-efectos").toggle("slide");
        //$(".caja-efectos").toggle("fold");
        //$(".caja-efectos").toggle("puff");
        //$(".caja-efectos").toggle("scale");
        //$(".caja-efectos").toggle("shake", "slow");
        $(".caja-efectos").toggle("shake", 4000);
    });

    //el tooltip utiliza el texto definido en title.
    $(document).tooltip();

    
    //dialog, tambien utiliza el title.
   // $(".popup").dialog();

    $("#lanzar-popup").click(function(){
        $(".popup").dialog();
    });

    //datepicker
    $("#calender").datepicker();


    //tabs
    $("#pestanas").tabs();

});