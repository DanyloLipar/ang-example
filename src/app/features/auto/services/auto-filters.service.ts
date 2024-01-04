import { Injectable } from '@angular/core';
import { Auto } from "../interfaces/auto.interface";

@Injectable({
  providedIn: 'root'
})
export class AutoFiltersService {

  constructor() { }

  removeFilterChip(filters: any, filterChips: any, chip: any) {
    const key = chip.key as keyof Auto;
    if (Array.isArray(filters[key])) {
      (<Array<any>>filters[key]) = (<Array<any>>filters[key]).filter((value) => value !== chip.value);
    } else {
      (<string | number | null>filters[key]) = null;
    }
    filterChips.splice(filterChips.indexOf(chip), 1);
  }

  getFilterChips(filters: any): any[] {
    const chips: any[] = [];
    for (const key in filters) {
      if (filters[key]) {
        if (Array.isArray(filters[key])) {
          filters[key].forEach((value: any) => {
            chips.push({
              key,
              value
            });
          });
        } else {
          chips.push({
            key,
            value: filters[key]
          });
        }
      }
    }
    return chips;
  }

}
