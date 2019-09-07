"use strict";
exports.__esModule = true;
var camiseta_1 = require("./camiseta");
//import { User } from "./user";
var Main = /** @class */ (function () {
    function Main() {
        console.log("Aplicacion js cargada.");
    }
    return Main;
}());
var main = new Main();
var remera = new camiseta_1.Camiseta("rojo", "manga Larga", "Nike", "L", 14);
console.log(remera);
