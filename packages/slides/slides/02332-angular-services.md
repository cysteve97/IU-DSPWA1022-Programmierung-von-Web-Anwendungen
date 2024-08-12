---
layout: default
---

# Angular <SubHeading text="Services"/>

<div class="grid grid-cols-12 gap-x-6">
<div class="col-span-12">

- Mit [_Services_](https://angular.dev/essentials/sharing-logic) können wir Logik und Datenhaltung aus Komponenten auslagern, etwa um diese in der gesamten Anwendung wiederzuverwenden
- Sie werden mit dem [`Injectable()`](https://angular.dev/api/core/Injectable)-Decorator versehen und können mit [`inject()`](https://angular.dev/api/core/inject) oder [im Constructor](https://angular.dev/guide/di/dependency-injection#injecting-consuming-a-dependency) verwendet werden

</div>

<div class="col-span-6">

<!-- prettier-ignore-start -->

```ts
import { Injectable } from '@angular/core';

@Injectable({
  // This service is available in the whole application
  providedIn: 'root',
})
export class CalculatorService {
  add(x: number, y: number) {
    return x + y;
  }
}
```

<!-- prettier-ignore-end -->

</div>

<div class="col-span-6">

<!-- prettier-ignore-start -->

```ts
import { Component, inject } from '@angular/core';
import { CalculatorService } from './calculator.service';

@Component({
  selector: 'app-receipt',
  template: `<h1>The total is {{ totalCost }}</h1>`,
})
export class Receipt {
  private calculatorService = inject(CalculatorService);
  totalCost = this.calculatorService.add(50, 25);
}
```

<!-- prettier-ignore-end -->

</div>

</div>

<PageNumber/>
