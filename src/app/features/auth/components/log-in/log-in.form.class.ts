import { FormGroup, Validators } from "@angular/forms";
import { FormGroupStructure } from "../../../../shared/utils/form-group-structure.type";
import { Injector } from "@angular/core";
import { generateFormGroupFromData } from "../../../../shared/utils/generate-form-group-from-data.helper";
import { Login } from "../../interfaces/login.interface";

export class LogInFormClass extends FormGroup<FormGroupStructure<Login>> {
  constructor(data: Login, private readonly injector: Injector) {
    super(generateFormGroupFromData(data));
  }
}
