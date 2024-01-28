import { Component, OnDestroy, OnInit } from '@angular/core';
import { CounterService } from './services/counter.service';
import { RandomNumberObservableService } from './services/random-number-observable.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-plus-minus',
  templateUrl: './plus-minus.component.html',
  styleUrls: ['./plus-minus.component.css']
})
export class PlusMinusComponent implements OnInit, OnDestroy{
  randomNumber?: number;
  private randomNumberSubscription?: Subscription;
  
  constructor(
    protected counterService: CounterService,
    protected randomNumberService: RandomNumberObservableService
    ) {
      this.getRandomNumber();
    }

  ngOnInit() {

  }

  ngOnDestroy(): void {
    if (this.randomNumberSubscription) {
      this.randomNumberSubscription.unsubscribe();
    }
  }
  
  getRandomNumber() {
    this.randomNumberSubscription = this.randomNumberService.getRandomNumber().subscribe(
      randomNumber => {
        this.randomNumber = randomNumber
        this.counterService.jump(this.randomNumber);
      });
  }
}
