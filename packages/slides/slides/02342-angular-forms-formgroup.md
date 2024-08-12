---
layout: default
---

# Angular <SubHeading text="Form Group"/>

<div class="grid grid-cols-12 gap-x-6">
<div class="col-span-12">

- Häufig haben wir nicht nur ein [`FormControl`](https://angular.dev/guide/forms/reactive-forms#adding-a-basic-form-control), sondern wollen mehrere Inputs in einer [`FormGroup`](https://angular.dev/guide/forms/reactive-forms#grouping-form-controls) zusammenfassen

</div>

<div class="col-span-12">

<!-- prettier-ignore-start -->

```ts
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-group-demo',
  template: `
    <form [formGroup]="myFormGroup">
      <input formControlName="name">
      <input formControlName="age" type="number">
    </form>
  `,
})
export class FormGroupDemoComponent {
  myFormGroup = new FormGroup({
    name: new FormControl(''),
    age: new FormControl(0, [
      Validators.min(18)
    ])
  })
}
```

<!-- prettier-ignore-end -->

</div>

</div>

<PageNumber/>
