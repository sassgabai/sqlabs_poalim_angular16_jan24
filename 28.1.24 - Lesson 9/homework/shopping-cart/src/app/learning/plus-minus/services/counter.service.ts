import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  counter = 0;

  constructor() { }

  increment() {
    this.counter++;
  }

  decrement() {
    this.counter--;
  }

  jump(value: number) {
    this.counter += value;
  }
}
