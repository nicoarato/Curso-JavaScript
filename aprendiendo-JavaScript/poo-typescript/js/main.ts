import { Camiseta } from "./camiseta";
//import { User } from "./user";

class Main{
    constructor(){
        console.log("Aplicacion js cargada.");
    }
}

var main = new Main();

var remera = new Camiseta("rojo", "manga Larga", "Nike", "L", 14);

console.log(remera);