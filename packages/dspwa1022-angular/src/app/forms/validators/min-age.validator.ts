import { ValidatorFn } from "@angular/forms";

export default function minAgeValidator(minAge: number): ValidatorFn {
  return control => {
    const date = new Date(control.value);
    const age = new Date().getFullYear() - date.getFullYear();
    return age >= minAge ? null : { minAge: { minAge, actualAge: age } };
  };
}
