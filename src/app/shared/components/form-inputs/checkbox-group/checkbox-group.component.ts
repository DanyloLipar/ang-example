import {
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';
import {
  FormArray,
  FormControl,
  FormGroup
} from "@angular/forms";

@Component({
  selector: 'app-checkbox-group',
  templateUrl: './checkbox-group.component.html',
  styleUrls: ['./checkbox-group.component.scss']
})
export class CheckboxGroupComponent {
  @Input() checkboxList!: any[];
  @Input() filterForm!: FormGroup;
  @Input() formGroupValue!: FormArray;
  @Input() formArrayValue!: FormArray;
  @Output() changeFormValue: EventEmitter<null> = new EventEmitter<null>();


  onChangeFormValue(event: any, value: any) {
    this.changeFormValue.emit(null);
    this.formArrayValue.push(new FormControl(value));
  }
}
