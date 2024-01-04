import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoAddComponent } from './auto-add.component';

describe('AutoAddComponent', () => {
  let component: AutoAddComponent;
  let fixture: ComponentFixture<AutoAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AutoAddComponent]
    });
    fixture = TestBed.createComponent(AutoAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
