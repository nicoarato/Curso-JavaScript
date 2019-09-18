import { Injectable } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';



@Injectable()
export class ZapatillaService{
    public zapatillas: Array<Zapatilla>;

    constructor(){
        this.zapatillas = [
            new Zapatilla('Nike tiempo', 80, 'Nike', "Blanco", true),
            new Zapatilla('Reebok 4', 60, 'Reebok', "Rojas", true),
            new Zapatilla('Adidas predator', 280, 'Adidas', "Blanco", false),
            new Zapatilla('Adidas predator 3', 160, 'Adidas', "Blanco", true)
        ];
    }

    getTexto(){
        return "Hola mundo";
    }
    getZapatillas():Array<Zapatilla>{
        return this.zapatillas;
    }
}