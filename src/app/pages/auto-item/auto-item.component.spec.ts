import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoItemComponent } from './auto-item.component';

describe('AutoItemComponent', () => {
  let component: AutoItemComponent;
  let fixture: ComponentFixture<AutoItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AutoItemComponent]
    });
    fixture = TestBed.createComponent(AutoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
