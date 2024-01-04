import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralQuestionsComponent } from './general-questions.component';

describe('FaqComponent', () => {
  let component: GeneralQuestionsComponent;
  let fixture: ComponentFixture<GeneralQuestionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GeneralQuestionsComponent]
    });
    fixture = TestBed.createComponent(GeneralQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
