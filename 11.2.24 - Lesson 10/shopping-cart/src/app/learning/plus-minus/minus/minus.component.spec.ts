import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinusComponent } from './minus.component';

describe('MinusComponent', () => {
  let component: MinusComponent;
  let fixture: ComponentFixture<MinusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MinusComponent]
    });
    fixture = TestBed.createComponent(MinusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
