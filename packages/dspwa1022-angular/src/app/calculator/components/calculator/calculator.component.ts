import { Component } from '@angular/core';
import { CalculatorCellComponent } from "../calculator-cell/calculator-cell.component";
import { CalculatorCellOperatorComponent } from "../calculator-cell-operator/calculator-cell-operator.component";
import { Operator } from '../../model/operator';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [CalculatorCellComponent, CalculatorCellOperatorComponent],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.scss'
})
export class CalculatorComponent {

  readonly operators = Operator;
  lines: (number | Operator)[] = [0];

  appendDigit(digit: number) {
    this.lines[this.lines.length - 1] = (this.lines[this.lines.length - 1] as number) * 10 + digit;
  }

  appendOperator(operator: Operator) {
    if (operator === Operator.EQUAL) {
      const result = this.evaluateLines();
      this.lines = [result];
    } else {
      this.lines.push(operator);
      this.lines.push(0);
    }
  }

  private evaluateLines(): number {
    let result = 0;
    let nextOperator: Operator | undefined;

    for (const line of this.lines) {
      if (typeof line === 'number') {
        switch (nextOperator) {
          case Operator.ADD:
            result += line;
            break;
          case Operator.SUBTRACT:
            result -= line;
            break;
          case undefined:
            result = line;
            break;
          default:
            throw new Error(`Unexpected operator: ${nextOperator}`);
        }
        nextOperator = undefined;
        continue;
      }

      nextOperator = line;
      continue;
    }

    return result;
  }

}
