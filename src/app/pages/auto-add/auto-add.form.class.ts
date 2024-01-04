import { FormGroup, Validators } from "@angular/forms";
import { Injector } from "@angular/core";
import { FormGroupStructure } from "src/app/shared/utils/form-group-structure.type";
import { generateFormGroupFromData } from "src/app/shared/utils/generate-form-group-from-data.helper";
import { AutoAdd } from "src/app/core/interfaces/auto-add.interface";

export class AutoAddClass extends FormGroup<FormGroupStructure<AutoAdd>> {
  constructor(data: AutoAdd, private readonly injector: Injector) {
    super(generateFormGroupFromData(data));

    this.controls.price.addValidators([Validators.required]);
    this.controls.price_period.addValidators([Validators.required]);
    this.controls.restrictions_region.addValidators([Validators.required]);
    this.controls.restrictions_mileage.addValidators([Validators.required]);
    this.controls.payments_allowed.addValidators([Validators.required]);
    this.controls.deposit.addValidators([Validators.required]);
    this.controls.reimbursement.addValidators([Validators.required]);

    if (
      this.controls.reimbursement.value === "2" &&
      this.controls.franchise_amount
    ) {
      this.controls.franchise_amount.addValidators([Validators.required]);
    }

    if (
      this.controls.reimbursement.value === "3" &&
      this.controls.insurance_amount
    ) {
      this.controls.insurance_amount.addValidators([Validators.required]);
    }

    this.controls.insurance_availability.addValidators([Validators.required]);

    this.controls.insurance_availability.addValidators([Validators.required]);

    if (
      this.controls.insurance_availability.value === "1" &&
      this.controls.insurance_type
    ) {
      this.controls.insurance_type.addValidators([Validators.required]);
    }

    this.controls.type.addValidators([Validators.required]);
    this.controls.body_type.addValidators([Validators.required]);
    this.controls.brand.addValidators([Validators.required]);
    this.controls.model.addValidators([Validators.required]);
    this.controls.year.addValidators([Validators.required]);
    this.controls.transmission.addValidators([Validators.required]);
    this.controls.fuel.addValidators([Validators.required]);
    this.controls.on_drive.addValidators([Validators.required]);
    this.controls.engine.addValidators([Validators.required]);
    this.controls.engine_output.addValidators([
      Validators.pattern("^[0-9]{1,3}$"),
    ]);
    this.controls.technical_condition.addValidators([Validators.required]);
    this.controls.on_drive.addValidators([Validators.required]);
    this.controls.passenger_seats.addValidators([Validators.required]);
    this.controls.color_exterior.addValidators([Validators.required]);
    this.controls.car_documents.addValidators([Validators.required]);
    this.controls.phone_holder.addValidators([Validators.required]);
    this.controls.children_chair.addValidators([Validators.required]);
  }
}
