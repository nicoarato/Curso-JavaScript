$(document).ready(function(){
    //console.log('Todo Ok');

    //load carga peticiones ajax
    //$("#datos").load("https://reqres.in");


    //get y post

    $.get("https://reqres.in/api/users", {page: 2}, function(response){
        
        response.data.forEach((element, index) => {
            $("#datos").append("<p>"+ element.first_name+ " "+ element.last_name +"</p>");
        });

    });

    
    $("#formulario").submit(function(event){
        //event.preventDefault(); //para que no redirija a la url
        var usuario = {
            name: $('input[name="name"]').val(),
            web: $('input[name="web"]').val()
        };
/*        console.log(usuario);

        $.post($(this).attr("action"), usuario, function(response){
            console.log(response);
        }).done(function(){
            alert("usuario añadido");
        });
*/
        //otra forma para las peticiones ajax

        $.ajax({
            type: 'POST',
            url: $(this).attr("action"),
            data: usuario,
            beforeSend: function(){
                console.log("Enviando usuario...");
            },
            success: function(response){
                console.log(response);
            },
            error: function(){
                console.log("Hubo un error..");
            },
            timeout:10000
        });


        return false;
    
    });

});