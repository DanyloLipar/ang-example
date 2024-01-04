import {
    AbstractControl,
    FormArray,
    FormControl,
    FormGroup
} from '@angular/forms';
import { FormGroupStructure } from "./form-group-structure.type";

export function generateFormGroupFromData<T extends object>(
    data: T
): FormGroupStructure<T> {
    const result: Record<string, unknown> = {};

    Object.entries(data).forEach(([key, value]) => {
        result[key] = determineControlBasedOnData(value);
    });

    return result as FormGroupStructure<T>;
}

function determineControlBasedOnData(data: unknown): AbstractControl {
    if (Array.isArray(data)) {
        return new FormArray(
            data.map((item) => determineControlBasedOnData(item))
        );
    } else if (typeof data === 'object' && data !== null) {
        return new FormGroup(generateFormGroupFromData(data));
    }

    return new FormControl(data);
}
