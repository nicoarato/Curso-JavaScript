import { Component, OnInit } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';
import { ZapatillaService } from '../services/zapatilla.service';

@Component({
    selector: 'zapatillas',
    templateUrl: './zapatillas.component.html',
    providers: [ZapatillaService]
})

export class ZapatillasComponent implements OnInit{
    public titulo: string = "Componente de zapatilla";
    public zapatillas: Array<Zapatilla>;
    public marcas: String[];
    public color:string;
    public mi_marca:string;

    constructor(
        private _zapatillaService:ZapatillaService
    ){
        this.mi_marca = "Jordan"
        this.color = 'yellow';
        this.marcas = new Array();
        this.zapatillas = [
           
        ];
    }

    ngOnInit(){
        //console.log(this.zapatillas);
        //Acá cargamos el servicio
        this.zapatillas =  this._zapatillaService.getZapatillas();
        //alert(this._zapatillaService.getTexto());
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

