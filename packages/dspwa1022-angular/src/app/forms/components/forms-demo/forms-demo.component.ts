import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import minAgeValidator from '../../validators/min-age.validator';

@Component({
  selector: 'app-forms-demo',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './forms-demo.component.html',
  styleUrl: './forms-demo.component.scss'
})
export class FormsDemoComponent {

  readonly form = new FormGroup({
    name: new FormControl('', Validators.required),
    amount: new FormControl<number>(0, [
      Validators.min(42)
    ]),
    birthday: new FormControl<Date | null>(null, [
      Validators.required,
      minAgeValidator(18)
    ])
  })

}
