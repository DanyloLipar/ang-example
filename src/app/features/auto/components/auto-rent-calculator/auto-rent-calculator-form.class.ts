import { FormGroup } from "@angular/forms";
import { FormGroupStructure } from "../../../../shared/utils/form-group-structure.type";
import { Injector } from "@angular/core";
import { generateFormGroupFromData } from "../../../../shared/utils/generate-form-group-from-data.helper";
import { RentCalculator } from "../../interfaces/rent-calculator";
import { Router } from "@angular/router";

export class AutoRentCalculatorForm extends FormGroup<FormGroupStructure<RentCalculator>> {

    constructor(
        data: RentCalculator,
        private readonly injector: Injector
    ) {
        super(generateFormGroupFromData(data));
    }

    searchAuto(): void {
        const router = this.injector.get(Router);
        router.navigate(['/auto-list'],{
            queryParams: this.value,
            queryParamsHandling: 'merge'
        });
    }
}
