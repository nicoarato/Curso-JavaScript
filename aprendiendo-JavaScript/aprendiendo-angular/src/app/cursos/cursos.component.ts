import { Component, OnInit } from '@angular/core';

//para pasar datos por url necesitas algunas libreerias
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
  public nombre: string;
  public followers: number;

  constructor( 
      private _route: ActivatedRoute,
      private _router: Router
      ) 
      {
  }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
        this.nombre= params.nombre;
        //this.followers= parseInt(params.followers);
        //El + convierte a number 
        this.followers= +params.followers;

        //this.nombre= params['nombre'];

        console.log(this.nombre + ' '+this.followers +' followers');

        if(this.nombre == 'ninguno'){
          this._router.navigate(['/home']);        
        }
    });
  }

  redirigir(){
    this._router.navigate(['/zapatillas']);
  }

}
