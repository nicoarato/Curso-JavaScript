//Interface

interface CamisetaBase{
    setColor(color);
    getColor();
}

//Decorador

function estampar(logo: string){
    return function(target: Function){
        target.prototype.estampacion = function():void{
            console.log("Camiseta estampada con el logo de : " + logo);
        }
    }
}

//clase
//propiedades 
//metodos


//se aplica el decorador a la clase siguiente
//sirve para agregar una funcionalidad extra a una clase
@estampar('TOPPER')
class Camiseta implements CamisetaBase{
    private color: string;
    private modelo: string;
    private marca: string;
    private talla: string;
    private precio: number;

    //metodos
    public setColor(color){
        this.color = color;
    }

    public getColor(){
        return this.color;
    }

    constructor(color, modelo, marca, talla, precio){
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
    
    }

}


//clase hija

class Sudadera extends Camiseta{
    public capucha: boolean;
    setCapucha(capucha: boolean){
        this.capucha = capucha;
    }

    getCapucha(): boolean{
        return this.capucha;
    }
}

var remera = new Camiseta("blanco", "manga corta", "nike", "L", 13);

console.log(remera);
remera.estampacion();

var sudadera = new Sudadera("rojo","manga larga", "adidas", "XL", 30);
sudadera.setCapucha(true);
sudadera.setColor("Violeta");

console.log(sudadera);