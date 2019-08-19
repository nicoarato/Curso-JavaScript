$(document).ready(function(){

    //SLIDER
    $(function(){
        $('.bxslider').bxSlider({
          mode: 'fade',
          captions: true,
          slideWidth: 1200
        });
      });

    //POST
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

});