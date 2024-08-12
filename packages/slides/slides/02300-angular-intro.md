---
layout: default
---

# Angular <SubHeading text="Intro"/>

<div class="grid grid-cols-12 gap-6">
<div class="col-span-12">

- Ein weiteres populäres Framework ist [Angular](https://angular.dev/)
- Angular Apps bestehen ebenfalls aus wiederverwendbaren [Komponenten](https://angular.dev/essentials/components) sowie weiteren Bestandteilen wie etwa _Services_
- Den Kern einer Angular-Komponente bildet eine TypeScript-Klasse mit Metadaten aus einem _Decorator_

</div>

<div class="col-span-6">

<Filename>todo-list-item.component.ts</Filename>

```ts
@Component({
  standalone: true
  selector: "todo-list-item",
  template: `<li>Learn Angular</li>`,
})
export class TodoListItem {}
```

</div>

<div class="col-span-6">

<Filename>todo-list.component.ts</Filename>

```ts
import { TodoListItem } from "./todo-list-item.component.ts";

@Component({
  standalone: true,
  selector: "todo-list",
  imports: [TodoListItem],
  template: `
    <ul>
      <todo-list-item></todo-list-item>
      <todo-list-item></todo-list-item>
      <!-- ... -->
    </ul>
  `,
})
export class TodoList {}
```

</div>

</div>

<PageNumber/>
