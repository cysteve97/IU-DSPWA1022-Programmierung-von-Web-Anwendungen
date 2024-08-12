import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-calculator-cell',
  standalone: true,
  imports: [],
  templateUrl: './calculator-cell.component.html',
  styleUrl: './calculator-cell.component.scss'
})
export class CalculatorCellComponent {

  @Input({
    required: true
  })
  value?: number;

  @Output()
  cellClicked = new EventEmitter<number>();

}
