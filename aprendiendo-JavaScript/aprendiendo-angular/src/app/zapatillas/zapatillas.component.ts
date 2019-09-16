import { Component, OnInit } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';

@Component({
    selector: 'zapatillas',
    templateUrl: './zapatillas.component.html'
})

export class ZapatillasComponent implements OnInit{
    public titulo: string = "Componente de zapatilla";
    public zapatillas: Array<Zapatilla>;
    public marcas: String[];
    public color:string;
    public mi_marca:string;

    constructor(){
        this.color = 'yellow';
        this.marcas = new Array();
        this.zapatillas = [
            new Zapatilla('Nike tiempo', 80, 'Nike', "Blanco", true),
            new Zapatilla('Reebok 4', 60, 'Reebok', "Rojas", true),
            new Zapatilla('Adidas predator', 280, 'Adidas', "Blanco", false),
            new Zapatilla('Adidas predator 3', 60, 'Adidas', "Blanco", true)
        ];
    }

    ngOnInit(){
        console.log(this.zapatillas);
        this.getMarcas();
    }

    getMarcas(){
        this.zapatillas.forEach((zapatilla, index)=>{
            if(this.marcas.indexOf(zapatilla.marca)<0){
                this.marcas.push(zapatilla.marca);
            }
            
            
        });
        console.log(this.marcas);
    }

    getMarca(){
        alert(this.mi_marca);
    }
    addMarca(){
        this.marcas.push(this.mi_marca);
    }

    borrarMarca(index){
        //delete this.marcas[index];
        //this.marcas.splice(index,1);
        this.marcas.splice(index,1);
    }

    onBlur(){
        console.log("Has salido del blur");
    }
    mostrarPalabra(){
        console.log("Monstrando palabra cuando sueltas Enter");
    }

}

