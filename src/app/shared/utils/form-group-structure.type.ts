import { FormArray, FormControl, FormGroup } from '@angular/forms';

export type FormGroupStructure<T> = {
    [K in keyof T]: T[K] extends Array<infer R>
        ? FormArray<
            R extends Record<any, any>
                ? FormGroup<FormGroupStructure<R>>
                : FormControl<R>
        >
        : T[K] extends Record<any, any>
            ? FormGroup<FormGroupStructure<T[K]>>
            : FormControl<T[K]>;
};
