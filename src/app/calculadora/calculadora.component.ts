import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.scss']
})
export class CalculadoraComponent implements OnInit {
  value: string;
  constructor() {
    this.value = '';
  }

  ngOnInit(): void {
  }

  operadorCadena(valor: string): void{
    this.value += valor;
  }

  resetCalculadora():void{
    this.value = '';
  }

  calcularOperaciones():void{
    this.value = eval(this.value);
  }
}
