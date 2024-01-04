import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import KeenSlider, { KeenSliderInstance } from "keen-slider";

@Component({
    selector: 'app-auto-card',
    templateUrl: './auto-card.component.html',
    styleUrls: ['./auto-card.component.scss', "../../../../../../node_modules/keen-slider/keen-slider.min.css"]
})
export class AutoCardComponent implements AfterViewInit {
    @ViewChild("sliderRef") sliderRef!: ElementRef<HTMLElement>

    slider!: KeenSliderInstance;

    ngAfterViewInit() {
        this.slider = new KeenSlider(this.sliderRef.nativeElement, {
            mode: "free-snap", slides: {
                perView: 1, spacing: 0
            },
        })
    }
}
