import { FormGroup } from "@angular/forms";
import { FormGroupStructure } from "../../../../shared/utils/form-group-structure.type";
import { Registration } from "../../interfaces/registration.interface";
import { Injector } from "@angular/core";
import { generateFormGroupFromData } from "../../../../shared/utils/generate-form-group-from-data.helper";

export class SignUpFormClass extends FormGroup<
  FormGroupStructure<Registration>
> {
  constructor(data: Registration, private readonly injector: Injector) {
    super(generateFormGroupFromData(data));
  }
}
