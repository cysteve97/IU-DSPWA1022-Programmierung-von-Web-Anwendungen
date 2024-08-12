---
layout: default
---

# Angular <SubHeading text="Forms"/>

<div class="grid grid-cols-12 gap-x-6">
<div class="col-span-12">

- Um Nutzerdaten entgegennehmen zu können, müssen wir _Formulare_ nutzen
- Angular bietet mit mehrere Wege, um mit `<input>`, `<select>` usw. zu arbeiten - [Reactive Forms](https://angular.dev/guide/forms#setup-in-reactive-forms) und [Template-Driven Forms](https://angular.dev/guide/forms#setup-in-template-driven-forms)

</div>

<div class="col-span-12">

<!-- prettier-ignore-start -->

```ts
import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo-input',
  template: `
    Enter a task: <input type="text" [formControl]="todoCtrl">
    <button (click)="save()">Save</button>
  `,
})
export class TodoInputComponent {
  todoCtrl = new FormControl('', [
    Validators.required()
  ]);

  save() {
    console.log(`The title is ${this.todoCtrl.value}`);
  }
}
```

<!-- prettier-ignore-end -->

</div>

</div>

<PageNumber/>
