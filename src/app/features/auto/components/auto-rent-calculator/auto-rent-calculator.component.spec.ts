import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoRentCalculatorComponent } from './auto-rent-calculator.component';

describe('AutoRentCalculatorComponent', () => {
  let component: AutoRentCalculatorComponent;
  let fixture: ComponentFixture<AutoRentCalculatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AutoRentCalculatorComponent]
    });
    fixture = TestBed.createComponent(AutoRentCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
