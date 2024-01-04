import {
  Component,
  Input
} from '@angular/core';
import { FormGroup } from "@angular/forms";
import { Auto } from "../../interfaces/auto.interface";
import { FormGroupStructure } from "../../../../shared/utils/form-group-structure.type";

@Component({
  selector: 'app-auto-filter',
  templateUrl: './auto-filter.component.html',
  styleUrls: ['./auto-filter.component.scss']
})
export class AutoFilterComponent {
  @Input({required: true}) filterForm!: FormGroup<FormGroupStructure<Auto>>;

  bodyTypes = ['Sedan', 'SUV', 'Truck'];
  years: number[];

  constructor() {
    this.years = Array.from({length: new Date().getFullYear() - 1900 + 1}, (_, i) => i + 1900);
  }

  changeFormValue() {
  }
}
