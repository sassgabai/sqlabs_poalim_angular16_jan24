import { Component } from '@angular/core';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-minus',
  templateUrl: './minus.component.html',
  styleUrls: ['./minus.component.css']
})
export class MinusComponent {
  constructor(private counterService: CounterService) {

  }

  decrement() {
    this.counterService.decrement();
  }
}
