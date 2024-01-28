import { Component } from '@angular/core';
import { BehaviorSubject, Observable, Subscription, interval, map, of, timer } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent {
  private subject2Data = new BehaviorSubject<number>(0);
  private subscription?: Subscription;

  constructor() {
  }

  private getData(): Observable<number> {
    return this.subject2Data.asObservable();
  }

  observable1() {
    const observable = of(1,2,3);
    const subscription = observable.subscribe(value => console.log(value));
  }

  observable2() {
    const observable = this.subject2Data.asObservable();
    this.subscription = observable.subscribe(value => console.log(value));
  }

  observable2Increment() {
    this.subject2Data.next(Math.round(Math.random() * 100 + 1));
  }

  observable2Automatic() {
    const observable = interval(1000).pipe(map(() => Math.random()));
    this.subscription = observable.subscribe(value => console.log(value));
  }

  observable3() {
    const observable = of(1, 2, 3); // This Observable completes after emitting 3 values

    const subscription = observable.subscribe(
      value => console.log(value),
      null,
      () => console.log('Completed')
    );
  }
}
