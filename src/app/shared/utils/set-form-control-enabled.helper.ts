import { AbstractControl } from "@angular/forms";

export function setFormControlEnabled(control: AbstractControl, isEnabled: boolean): void {
    isEnabled ? control.enable() : control.disable();
}
