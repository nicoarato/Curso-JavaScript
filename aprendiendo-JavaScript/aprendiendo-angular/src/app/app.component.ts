import { Component } from '@angular/core';
import { Configuracion } from './models/configuracion';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'Aprendiendo-angular';
  public descripcion:string;
  public config;
  public mostrar_videojuegos:boolean = true;

  constructor(){
    this.config = Configuracion;
    this.title = Configuracion.titulo;
    this.descripcion= Configuracion.descripcion;
  }

  ocultarVideojuegos(value: boolean):void {
    this.mostrar_videojuegos= value;  
  }
}
