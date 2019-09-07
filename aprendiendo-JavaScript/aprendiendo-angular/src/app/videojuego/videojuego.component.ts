import { Component } from '@angular/core';

@Component({
    selector: 'videojuego',
    template: `
                <h2>componente de videojuejos</h2>
                <ul>
                    <li>Mario</li>    
                    <li>GOD of war</li>    
                    <li>GOD of war 2</li>    
                </ul>
                `
})

export class VideojuegoComponent {

    constructor(){
        console.log("Se ha cargado el componente");
    }
}