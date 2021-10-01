import { Component } from '@angular/core';
import {PersonaModel} from "./core/models/persona.model";
import {ProductoModel} from "./core/models/producto.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'isc-proyecto-VA';
  aux = '';
  list: string[] = ['juan','pedro','carlos'];
  personas: PersonaModel[] = [{id: 1, dni: 40786863, nombres:'Juan', apellidos:'Quispe Quispe', img: 'assets/img/img-01.png'},
                              {id: 2, dni: 78908987, nombres:'Julian', apellidos:'Rivero Quispe', img: 'assets/img/img-02.jpeg'},
                              {id: 3, dni: 23457689, nombres:'Jaime', apellidos:'Callasaca Quispe', img: 'assets/img/img-03.jpeg'},
                              {id: 4, dni: 21345909, nombres:'Pedro', apellidos:'Borda Quispe', img: 'assets/img/img-04.png'}];

  productos: ProductoModel[] = [{id: 1, nombre: 'Polo', descripcion:'Blackout llega a Ripley.com con lo último en moda para hombre. Adquiere este fabuloso polo manga corta al mejor precio.', foto: 'assets/img/img-01.png', precio: 45, stock: 30},
                                {id: 2, nombre: 'Moto Zontes G155', descripcion:'Juan', foto: 'assets/img/img-02.jpeg', precio: 11800, stock: 6},
                                {id: 3, nombre: 'Moto Zontes G125', descripcion:'Juan', foto: 'assets/img/img-03.jpeg', precio: 10500, stock: 8},
                                {id: 4, nombre: 'Polera', descripcion:'Juan', foto: 'assets/img/img-04.png', precio: 80, stock: 50},
                                {id: 5, nombre: 'Stiker', descripcion:'Juan', foto: 'assets/img/img-05.png', precio: 2, stock: 200}];

  public obtenerText(click : string): void{
    this.aux = click;
  }

  eliminarElemento(intex: number):void{
    this.list.splice(intex,1);
  }

  agregarElemento(elemento: string):void{
    this.list[this.list.length] = elemento;
  }

  eliminarPersona(id: number,index : number): void{
    for (let persona of this.personas) {
      if(persona.id === id){
        //eliminar de la BD
        this.personas.splice(index,1);
      }
    }
  }
}
