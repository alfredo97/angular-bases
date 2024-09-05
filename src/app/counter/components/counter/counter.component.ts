import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-counter',
    templateUrl: 'counter.component.html'
})

export class CounterComponent  {
    constructor() { }

    public title: string = 'Mi primera app de Angular';
    public counter: number = 10;

    aumentarPor(valor: number): void{
        this.counter += valor;
    }

    restablecer(){
        this.counter = 10;
  }
}