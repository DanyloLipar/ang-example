import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import KeenSlider, { KeenSliderInstance } from "keen-slider";

@Component({
  selector: 'app-teaser-carousel',
  templateUrl: './teaser-carousel.component.html',
  styleUrls: ['./teaser-carousel.component.scss',
    "../../../../../../node_modules/keen-slider/keen-slider.min.css"]
})
export class TeaserCarouselComponent implements AfterViewInit {
  @ViewChild("sliderRef") sliderRef!: ElementRef<HTMLElement>

  slider!: KeenSliderInstance;

  ngAfterViewInit() {
    this.slider = new KeenSlider(this.sliderRef.nativeElement, {
      mode: "free-snap",
      slides: {
        perView: 4,
        spacing: 16,
      },
    })
  }
}
