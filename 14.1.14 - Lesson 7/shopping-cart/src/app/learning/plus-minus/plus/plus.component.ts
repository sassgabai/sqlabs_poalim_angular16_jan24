import { Component } from '@angular/core';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-plus',
  templateUrl: './plus.component.html',
  styleUrls: ['./plus.component.css']
})
export class PlusComponent {
  constructor(private counterService: CounterService) {

  }

  increment() {
    this.counterService.increment();
  }
}
