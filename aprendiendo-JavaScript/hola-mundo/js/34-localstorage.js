'use strict'

window.addEventListener('load',function(){

    if(typeof(Storage) != 'undefined'){
        console.log("Localstorage disponilble");
    }else{
        console.log("Localstorage NO disponilble");
    }


});