import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoSortComponent } from './auto-sort.component';

describe('AutoSortComponent', () => {
  let component: AutoSortComponent;
  let fixture: ComponentFixture<AutoSortComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AutoSortComponent]
    });
    fixture = TestBed.createComponent(AutoSortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
