import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Operator } from '../../model/operator';

@Component({
  selector: 'app-calculator-cell-operator',
  standalone: true,
  imports: [],
  templateUrl: './calculator-cell-operator.component.html',
  styleUrl: './calculator-cell-operator.component.scss'
})
export class CalculatorCellOperatorComponent {

  @Input({
    required: true
  })
  operator?: Operator;

  @Input()
  disabled = false;

  @Output()
  operatorClicked = new EventEmitter<Operator>();

}
