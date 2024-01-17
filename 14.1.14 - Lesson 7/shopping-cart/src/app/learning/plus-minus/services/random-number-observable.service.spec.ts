import { TestBed } from '@angular/core/testing';

import { RandomNumberObservableService } from './random-number-observable.service';

describe('CounterObservableService', () => {
  let service: RandomNumberObservableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RandomNumberObservableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
