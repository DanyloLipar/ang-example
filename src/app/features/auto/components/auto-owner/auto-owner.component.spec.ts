import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoOwnerComponent } from './auto-owner.component';

describe('AutoOwnerComponent', () => {
  let component: AutoOwnerComponent;
  let fixture: ComponentFixture<AutoOwnerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AutoOwnerComponent]
    });
    fixture = TestBed.createComponent(AutoOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
