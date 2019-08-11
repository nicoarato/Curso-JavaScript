var fecha = new Date();

var year = fecha.getFullYear();
var mes = fecha.getMonth();
var dia = fecha.getDay();
var hora = fecha.getHours();
var textoHora= `
    El año es : ${year}
    El mes es : ${mes}
    El dia es : ${dia}
    LA hora es : ${hora}
`;

var aleatorio= Math.ceil(Math.random()*100);



console.log(textoHora);
console.log(aleatorio);