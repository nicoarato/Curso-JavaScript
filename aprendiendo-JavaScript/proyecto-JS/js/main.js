$(document).ready(function(){

    //SLIDER
    if(window.location.href.indexOf('index')> -1){
        $(function(){
            $('.bxslider').bxSlider({
            mode: 'fade',
            captions: true,
            slideWidth: 1200
            });
        });
    }

    //POST
    if(window.location.href.indexOf('index')> -1){
        var posts = [
            {title: 'Prueba de titulo 1',
            date: 'Publicado el día:' + moment().date() +"-"+ moment().format("MM-YYYY"),
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem assumenda asperiores modi sapiente amet nesciunt ea, numquam veniam ad! Provident asperiores odio eum nulla unde dignissimos consequatur architecto perferendis. Quam?"
            },
            {title: 'Prueba de titulo 2',
            date: 'Publicado el día:' + moment().date() +"-"+ moment().format("MM-YYYY"),
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem assumenda asperiores modi sapiente amet nesciunt ea, numquam veniam ad! Provident asperiores odio eum nulla unde dignissimos consequatur architecto perferendis. Quam?"
            },
            {title: 'Prueba de titulo 3',
            date: 'Publicado el día:' + moment().date() +"-"+ moment().format("MM-YYYY"),
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem assumenda asperiores modi sapiente amet nesciunt ea, numquam veniam ad! Provident asperiores odio eum nulla unde dignissimos consequatur architecto perferendis. Quam?"
            },
            {title: 'Prueba de titulo 4',
            date: 'Publicado el día:' + moment().date() +"-"+ moment().format("MM-YYYY"),
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem assumenda asperiores modi sapiente amet nesciunt ea, numquam veniam ad! Provident asperiores odio eum nulla unde dignissimos consequatur architecto perferendis. Quam?"
            },
            {title: 'Prueba de titulo 5',
            date: 'Publicado el día:' + moment().date() +"-"+ moment().format("MM-YYYY"),
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem assumenda asperiores modi sapiente amet nesciunt ea, numquam veniam ad! Provident asperiores odio eum nulla unde dignissimos consequatur architecto perferendis. Quam?"
            }

        ];

        posts.forEach((item, index) => {

            var post = `<article class="post">
                            <h2>${item.title}</h2>
                            <span class="date">${item.date}</span>
                            <p>${item.content}</p>
                            <a href="#" class="button-more">LEER MAS</a>
                        </article>`;

            $("#posts").append(post);
        });
    }
    //selector de tema
    var theme = $("#theme");
    $("#to-green").click(function(){
        theme.attr("href", "css/green.css");
    });
    
    $("#to-red").click(function(){
        theme.attr("href", "css/red.css");
    });
    
    $("#to-blue").click(function(){
        theme.attr("href", "css/blue.css");
    });


    //scroll arriba de la web
    $(".subir").click(function(e){
        e.preventDefault();

        $('html, body').animate({
            scrollTop: 0
        }, 500);

        return false;
    });

    //login falso

    $("#login form").submit(function(){
        var form_name = $("#name").val();
        localStorage.setItem("form_name", form_name);
    });

    var form_name = localStorage.getItem("form_name");

    if(form_name != null && form_name != 'undefined'){
        var about_parrafo = $("#about p");
        about_parrafo.html("<br><strong>Bienvenido, "+ form_name + "</strong>" );
        about_parrafo.append("<a href='#' id='logout'> Cerrar sesión </a>");
        $("#login").hide();
        $("#logout").click(function(){
            localStorage.clear();
            location.reload();
        });
    }

    //acordeon
    if(window.location.href.indexOf('about')> -1){
        $("#acordeon").accordion();

    }

    //reloj
    if(window.location.href.indexOf('reloj')> -1){
       setInterval(function(){
            var reloj = moment().format("hh:mm:ss");
            $("#reloj").html(reloj);
       }, 1000);
    }

    //validacion
    if(window.location.href.indexOf('contacto')> -1){
        $.validate({
            lang: 'es'
        });

        
    }

   /*  $("input[name='fecha']").datepicker({
        dateFormat: 'dd-mm-yy'
    });
 */
});