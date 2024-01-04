import {
  Component,
  Inject
} from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogRef
} from "@angular/material/dialog";
import { FormGroup } from "@angular/forms";
import { FormGroupStructure } from "../../../../shared/utils/form-group-structure.type";
import { Auto } from "../../../../features/auto/interfaces/auto.interface";

@Component({
  selector: 'app-mobile-tablet-filter',
  templateUrl: './mobile-tablet-filter.component.html',
  styleUrls: ['./mobile-tablet-filter.component.scss']
})
export class MobileTabletFilterComponent {
  filterForm: FormGroup<FormGroupStructure<Auto>>;

  constructor(
    public dialogRef: MatDialogRef<MobileTabletFilterComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {
    filterForm: FormGroup<FormGroupStructure<Auto>>;
  }) {
    this.filterForm = data.filterForm;
  }
}
