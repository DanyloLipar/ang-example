import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import KeenSlider, { KeenSliderInstance } from "keen-slider";
import { ThumbnailPlugin } from "../../utils/keen-slider-plugin.helper";

@Component({
    selector: 'app-carousel-with-thumbnails',
    templateUrl: './carousel-with-thumbnails.component.html',
    styleUrls: ['./carousel-with-thumbnails.component.scss', "../../../../../node_modules/keen-slider/keen-slider.min.css"]
})
export class CarouselWithThumbnailsComponent implements AfterViewInit {
    images = ['./assets/images/car.png', './assets/images/car7.png', './assets/images/car3.png', './assets/images/car4.png', './assets/images/car5.png', './assets/images/car6.png']
    @ViewChild("sliderRef") sliderRef!: ElementRef<HTMLElement>
    @ViewChild("thumbnailRef") thumbnailRef!: ElementRef<HTMLElement>

    slider!: KeenSliderInstance;
    thumbnailSlider!: KeenSliderInstance;

    ngAfterViewInit() {
        this.slider = new KeenSlider(this.sliderRef.nativeElement)
        this.thumbnailSlider = new KeenSlider(this.thumbnailRef.nativeElement, {
            initial: 0, slides: {
                perView: 5, spacing: 10,
            },
        }, [ThumbnailPlugin(this.slider)])
    }
}
