import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoFilterChipsComponent } from './auto-filter-chips.component';

describe('AutoFilterChipsComponent', () => {
  let component: AutoFilterChipsComponent;
  let fixture: ComponentFixture<AutoFilterChipsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AutoFilterChipsComponent]
    });
    fixture = TestBed.createComponent(AutoFilterChipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
