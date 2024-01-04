import {
    FormGroup
} from "@angular/forms";
import { Injector } from "@angular/core";
import { Auto } from "../../../features/auto/interfaces/auto.interface";
import { FormGroupStructure } from "../../../shared/utils/form-group-structure.type";
import { generateFormGroupFromData } from "../../../shared/utils/generate-form-group-from-data.helper";

export class AutoFilterForm extends FormGroup<FormGroupStructure<Auto>> {

    constructor(
        data: Auto,
        private readonly injector: Injector
    ) {
        super(generateFormGroupFromData(data));
    }

    detectFormChanges(): void {
        this.valueChanges.subscribe((value) => {
        })
    }

}
