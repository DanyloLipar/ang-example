import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAutosComponent } from './my-autos.component';

describe('MyAutosComponent', () => {
  let component: MyAutosComponent;
  let fixture: ComponentFixture<MyAutosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyAutosComponent]
    });
    fixture = TestBed.createComponent(MyAutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
