import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-auto-teaser',
  templateUrl: './auto-teaser.component.html',
  styleUrls: ['./auto-teaser.component.scss']
})
export class AutoTeaserComponent {
  constructor(private router: Router) {
  }
  openAuto() {
    this.router.navigate(['/auto-item']);
  }
}
