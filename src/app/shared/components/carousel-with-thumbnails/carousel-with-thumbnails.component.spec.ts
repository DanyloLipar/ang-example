import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselWithThumbnailsComponent } from './carousel-with-thumbnails.component';

describe('CarouselWithThumbnailsComponent', () => {
  let component: CarouselWithThumbnailsComponent;
  let fixture: ComponentFixture<CarouselWithThumbnailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarouselWithThumbnailsComponent]
    });
    fixture = TestBed.createComponent(CarouselWithThumbnailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
