import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormClassComponent } from './form-class.component';

describe('FormClassComponent', () => {
  let component: FormClassComponent;
  let fixture: ComponentFixture<FormClassComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormClassComponent]
    });
    fixture = TestBed.createComponent(FormClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
