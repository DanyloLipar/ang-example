import { Component } from '@angular/core';

@Component({
  selector: 'app-auto-owner',
  templateUrl: './auto-owner.component.html',
  styleUrls: ['./auto-owner.component.scss']
})
export class AutoOwnerComponent {
  panelOpenState!: boolean;

  togglePanel(): void {
    this.panelOpenState = !this.panelOpenState;
  }
}
