import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoTeaserComponent } from './auto-teaser.component';

describe('AutoTeaserComponent', () => {
  let component: AutoTeaserComponent;
  let fixture: ComponentFixture<AutoTeaserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AutoTeaserComponent]
    });
    fixture = TestBed.createComponent(AutoTeaserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
