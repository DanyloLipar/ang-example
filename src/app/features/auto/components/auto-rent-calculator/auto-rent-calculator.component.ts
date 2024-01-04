import { Component, inject, Injector, Input, OnInit } from '@angular/core';
import { AutoRentCalculatorForm } from "./auto-rent-calculator-form.class";
import { RentCalculator } from "../../interfaces/rent-calculator";

@Component({
    selector: 'app-auto-rent-calculator',
    templateUrl: './auto-rent-calculator.component.html',
    styleUrls: ['./auto-rent-calculator.component.scss']
})
export class AutoRentCalculatorComponent implements OnInit{
    @Input() initialData: RentCalculator = {
        location: '', type: '', brand: ''
    }

    rentCalculatorForm!: AutoRentCalculatorForm;

    constructor() {
        this.rentCalculatorForm = new AutoRentCalculatorForm(
            this.initialData, inject(Injector));
    }

    ngOnInit() {
        this.rentCalculatorForm.setValue(this.initialData)
    }
}
