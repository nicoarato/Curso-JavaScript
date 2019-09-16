import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';

@Component({
    selector: 'videojuego',
    templateUrl: './videojuego.component.html'
})

export class VideojuegoComponent implements OnInit, DoCheck {
    public titulo: string;
    public listado: string;

    constructor(){
        this.titulo = "Componente de Videojuego interpolado";
        this.listado = "Listado de juegos";
        console.log("Se ha cargado el componente");
    }

    ngOnInit(){
        //console.log("OnInit ejecutado");
    }

    ngDoCheck(){
       // console.log("Docheck ejecutado");
    }

    cambiarTitulo(){
       // this.titulo = "Nuevo Titulo2 del componente";
    }

    ngOnDestroy(){
       // console.log("On destroy ejecutado");
    }
}