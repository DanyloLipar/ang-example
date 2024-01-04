import { FormGroup } from "@angular/forms";
import { FormGroupStructure } from "../../../../shared/utils/form-group-structure.type";
import { Injector } from "@angular/core";
import { generateFormGroupFromData } from "../../../../shared/utils/generate-form-group-from-data.helper";
import { User } from "src/app/features/auth/interfaces/user.interface";

export class UserInfoFormClass extends FormGroup<FormGroupStructure<User>> {
  constructor(data: User, private readonly injector: Injector) {
    super(generateFormGroupFromData(data));
  }
}
