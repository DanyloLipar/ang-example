import {
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';
import { FilterChips } from "../../interfaces/filter-chips.interface";

@Component({
  selector: 'app-auto-filter-chips',
  templateUrl: './auto-filter-chips.component.html',
  styleUrls: ['./auto-filter-chips.component.scss']
})
export class AutoFilterChipsComponent {
  @Input() filterChips?: FilterChips[];
  @Output() removeFilterValue: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
}
  removeFilterChip(chip: any): void {
    this.removeFilterValue.emit(chip);
  }
}
