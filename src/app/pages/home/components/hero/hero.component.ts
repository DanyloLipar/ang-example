import {Component, ElementRef, HostListener} from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {

  constructor(private elRef: ElementRef) {}
  @HostListener('window:scroll', ['$event'])
  scrollHandler(): void {
    const topDistance = window.pageYOffset;
    const layers = this.elRef.nativeElement.querySelectorAll(
        "[data-type='parallax']",
    );
    layers.forEach((layer: any) => {
      const speed = layer.getAttribute('data-speed');
      const translate3d = 'translate3d('+ +(topDistance * speed) + 'px, 0,' + -(topDistance * speed) + 'px)';
      layer.style['-webkit-transform'] = translate3d;
      layer.style['-moz-transform'] = translate3d;
      layer.style['-ms-transform'] = translate3d;
      layer.style['-o-transform'] = translate3d;
      layer.style.transform = translate3d;
    });
  }
}
