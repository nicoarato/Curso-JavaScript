$(document).ready(function(){
   //console.log($('a').length);
   reloadLinks();
    $('#add_button')
        .removeAttr('disabled')
        .click(function(){
        //$('#menu').html('<li><a href="' + $("#add_link").val() + '" ></a></li>');
        //$('#menu').append('<li><a href="' + $("#add_link").val() + '" ></a></li>');
        //$('#menu').prepend('<li><a href="' + $("#add_link").val() + '" ></a></li>');
        $('#menu').before('<li><a href="' + $("#add_link").val() + '" ></a></li>');
        $("#add_link").val('');
        reloadLinks();
    });


    function reloadLinks(){

        $('a').each(function(index){
            var that = $(this);
            var enlace = $(this).attr("href");
            that.attr('target', '_blank');
             that.text(enlace);
        });

    }
    
    


});