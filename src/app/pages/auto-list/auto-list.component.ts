import {
  Component,
  inject,
  Injector,
  Input,
  OnInit
} from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { MobileTabletFilterComponent } from "./modals/mobile-tablet-filter/mobile-tablet-filter.component";
import { RentCalculator } from "../../features/auto/interfaces/rent-calculator";
import { Auto } from "../../features/auto/interfaces/auto.interface";
import { FormGroup } from "@angular/forms";
import { AutoFilterForm } from './forms/auto-filter-form.class';
import { AutoFiltersService } from "../../features/auto/services/auto-filters.service";
import { FilterChips } from "../../features/auto/interfaces/filter-chips.interface";


@Component({
  selector: 'app-auto-list',
  templateUrl: './auto-list.component.html',
  styleUrls: ['./auto-list.component.scss']
})
export class AutoListComponent implements OnInit {

  @Input() location: string = '';
  @Input() type: string = '';
  @Input() brand: string = '';

  rentCalculatorValue?: RentCalculator;
  showRegistrationOffer = false;
  filters: Auto;
  filterForm: any;
  filterChips?: FilterChips[];

  constructor(public dialog: MatDialog, private autoFilterService: AutoFiltersService) {
    this.filters = {
      type: 'car',
      bodyType: [1],
      brand: ['Toyota', 'Honda'],
      model: 'Corolla',
      year: 2022,
      priceSale: 25000,
      region: 'fffff',
      district: 'fff',
      rentalPrice: {
        day: 50,
        week: 300,
        month: 1000,
        year: 12000,
      },
      provinceRegion: 'Some Province',
      districtRegion: 'Some District',
      cityRegion: 'Some City',
      mileage: 5000,
      transmission: 'Automatic',
      fuelType: 'Petrol',
      driveType: 'Front-wheel Drive',
      engineCapacity: 2000,
      condition: 'Excellent',
      isOperational: true,
      fuelConsumptionCity: 10.5,
      fuelConsumptionHighway: 6.8,
      fuelConsumptionAverage: 8.9,
      enginePower: 150,
      passengerSeats: 5,
      doorsCount: 4,
      colorExterior: 'Silver',
      colorInterior: 'Black',
      vehicleDocuments: 'Valid',
      hasInsurance: true,
      insuranceType: 'Full Coverage',
      insuranceExpirationDate: '2023-12-31',
    };

    this.filterForm = this.initFilterForm();
    this.generateFilterChips();
  }

  ngOnInit(): void {
    this.setRentCalculatorValue();
    this.checkIfShowRegistrationOffer();
    this.filterForm.detectFormChanges();
  }

  openFilters(): void {
    this.dialog.open(MobileTabletFilterComponent, {
      width: '100%',
      data: {
        filterForm: this.filterForm
      },
      autoFocus: false
    });
  }

  changeRegistrationOffer(showRegistrationOffer: boolean): void {
    this.showRegistrationOffer = showRegistrationOffer;
  }

  generateFilterChips(): void {
    this.filterChips = this.autoFilterService.getFilterChips(this.filters);
  }

  removeFilterValue(filterValue: any): void {
    this.autoFilterService.removeFilterChip(this.filters, this.filterChips, filterValue);
    this.filterForm.setValue(this.filters);
  }

  private setRentCalculatorValue(): void {
    this.rentCalculatorValue = {
      location: this.location,
      type: this.type,
      brand: this.brand
    };
  }

  private checkIfShowRegistrationOffer(): void {
    const localValueShowRegistrationOffer = localStorage.getItem('showRegistrationOffer');
    this.showRegistrationOffer = localValueShowRegistrationOffer ? JSON.parse(localValueShowRegistrationOffer) : true;
  }

  private initFilterForm(): FormGroup {
    return new AutoFilterForm(this.filters, inject(Injector));
  }
}
