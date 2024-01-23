import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RandomNumberObservableService {
  constructor() { }

  getRandomNumber(): Observable<number> {
    return of(Math.floor(Math.random() * 10 + 1));
  }
}
