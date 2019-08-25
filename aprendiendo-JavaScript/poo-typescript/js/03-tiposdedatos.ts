let cadena: string | number = "hola mundo";

cadena = 78;
let numero: number = 12

let vf : boolean = false;

let cualquiera: any = "hola";

cualquiera = 8432;

let lenguajes: Array<string> = ["php", "java", "c++"];
let leng: Array<any> = ["php", "java", "c++", 54];

let years: number[] = [12,15,20,0];
let anios: any[] = ["mama", 12, 'papa'];


console.log(cadena , numero, vf, cualquiera, lenguajes, leng, years, anios);

//crear un tipo de datos

type nico = string | number;

let variable : nico = "HOLA MUNDO";

console.log(variable);