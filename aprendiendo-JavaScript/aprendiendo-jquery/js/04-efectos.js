$(document).ready(function(){
    
    $('#mostrar').hide();

    $('#mostrar').click(function(){
        $(this).hide();
        $('#ocultar').show();    
        //$('#caja').show('normal');
        //$('#caja').fadeIn('normal');
        //$('#caja').fadeTo('normal',1); //opacidad
    });

    $('#ocultar').click(function(){
        $(this).hide();
        $('#mostrar').show();
        //$('#caja').hide('normal');
        //$('#caja').fadeOut('normal');
        //$('#caja').fadeTo('normal',0); //opacidad
        $('#caja').slideUp('normal',function(){
            console.log('cartel ocultado'); //una vez que termina la accion muestra esto
        });

    });

    $('#todoenuno').click(function(){
        $('#caja').slideToggle('fast');
        //$('#caja').fadeToggle('fast');
        //$('#caja').toggle('fast');
    });

    $('#animar').click(function(){
        $('#caja').animate({marginLeft: '500px',
                            fontSize: '40px',
                            height: '110px' 
                            }, 'slow')
                    .animate({borderRadius: '500px',
                            marginTop: '40px', 
                            }, 'slow')
                    .animate({borderRadius: '0px',
                            marginLeft: '0px', 
                            }, 'slow');
    });


});