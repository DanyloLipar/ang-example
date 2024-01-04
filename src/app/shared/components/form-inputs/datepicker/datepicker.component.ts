import { Component } from '@angular/core';
import { DateAdapter, MAT_DATE_FORMATS } from '@angular/material/core';

import { FormControl } from "@angular/forms";
import { NativeDateAdapter } from '@angular/material/core';

export const PICK_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'dd-yyyy',
    monthYearLabel: 'MMM yyyy',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM yyyy',
  },
};

export class CustomDateAdapter extends NativeDateAdapter {
  override format(date: Date): string {
    const months = date.getMonth() + 1;
    const year = date.getFullYear();
    return (
        this.addZeroForValue(months) +
        months +
        '/'+
        year
    );
  }

  private addZeroForValue(value: number) {
    return value < 10 ? '0' : '';
  }
}

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss'],
  providers: [
    { provide: DateAdapter, useClass: CustomDateAdapter },
    { provide: MAT_DATE_FORMATS, useValue: PICK_FORMATS },
  ],

})
export class DatepickerComponent {
  date = new FormControl(new Date());
  value: any;
  onChangeValue() {
    if (this.value === '') {
      this.value = null;
    }
    // this.setValue.emit(this.value);
  }

  setMonthAndYear(normalizedMonthAndYear: Date) {
    const ctrlValue = this.date.value;
    console.log(normalizedMonthAndYear.getFullYear())
    if(!ctrlValue) return;
    ctrlValue.setMonth(normalizedMonthAndYear.getMonth());
    ctrlValue.setFullYear(normalizedMonthAndYear.getFullYear());
    console.log(ctrlValue)
    this.date.setValue(ctrlValue);
    console.log(this.date)
    this.date.setValue(new Date());
    // datepicker.close();
  }
}
