import { Component } from '@angular/core';
import {PersonaModel} from "./models/persona.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'isc-proyecto-VA';
  aux = '';
  list: string[] = ['juan','pedro','carlos'];
  personas: PersonaModel[] = [{id: 1, dni: 40786863, nombres:'Juan', apellidos:'Quispe Quispe'},
                              {id: 2, dni: 78908987, nombres:'Julian', apellidos:'Rivero Quispe'},
                              {id: 3, dni: 23457689, nombres:'Jaime', apellidos:'Callasaca Quispe'},
                              {id: 4, dni: 21345909, nombres:'Pedro', apellidos:'Borda Quispe'}];

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
