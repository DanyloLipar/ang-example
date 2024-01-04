import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileTabletFilterComponent } from './mobile-tablet-filter.component';

describe('MobileTabletFilterComponent', () => {
  let component: MobileTabletFilterComponent;
  let fixture: ComponentFixture<MobileTabletFilterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MobileTabletFilterComponent]
    });
    fixture = TestBed.createComponent(MobileTabletFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
