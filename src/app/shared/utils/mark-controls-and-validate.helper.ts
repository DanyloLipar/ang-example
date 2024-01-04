import { AbstractControl, FormArray, FormGroup } from '@angular/forms';

export function markControlsAndValidate(control: AbstractControl): void {
    if (control instanceof FormArray || control instanceof FormGroup) {
        Object.values(control.controls).forEach((nestedControl) => {
            markControlsAndValidate(nestedControl);
        });
    }

    control.markAsTouched();
    control.updateValueAndValidity();
}
