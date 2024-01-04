import { Component } from '@angular/core';

@Component({
  selector: 'app-auto-sort',
  templateUrl: './auto-sort.component.html',
  styleUrls: ['./auto-sort.component.scss']
})
export class AutoSortComponent {
  states: string[] = [
    'Vin code',
    'Date of addition',
    'From cheap to expensive',
    'From expensive to cheap',
    'Year of production, ascending',
    'Year of production, descending',
    'Mileage, ascending',
    'Mileage, descending'
  ];
}
