import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeaserCarouselComponent } from './teaser-carousel.component';

describe('TeaserCarouselComponent', () => {
  let component: TeaserCarouselComponent;
  let fixture: ComponentFixture<TeaserCarouselComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeaserCarouselComponent]
    });
    fixture = TestBed.createComponent(TeaserCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
