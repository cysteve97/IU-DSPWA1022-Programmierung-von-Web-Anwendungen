---
layout: default
---

# Angular <SubHeading text="Outputs"/>

<div class="grid grid-cols-12 gap-x-6">
<div class="col-span-12">

- Mit [_Outputs_](https://angular.dev/guide/components/outputs) können wir Informationen inder Komponenten-Hierarchie nach oben geben bzw. eigene Events unserer Komponenten anlegen

</div>

<div class="col-span-6">

<Filename>todo-list-item.component.ts</Filename>

<!-- prettier-ignore-start -->

```ts
// ...
export class TodoListItem {

  @Input({
    required: true
  })
  taskTitle: string;

  @Input()
  done = false;

  @Output()
  completed = new EventEmitter<void>();

  completeTask() {
    this.done = true;
    this.completed.emit();
  }

}
```

<!-- prettier-ignore-end -->

</div>

<div class="col-span-6">

<Filename>todo-list-item.component.html</Filename>

<!-- prettier-ignore-start -->

```html
<li>
  {{taskTitle}}

  @if (!done) {
    <button (click)="completeTask()">Complete</button>
  }
</li>
```

<!-- prettier-ignore-end -->

<Filename>todo-list.component.html</Filename>

<!-- prettier-ignore-start -->

```html
<ul>
  @for (task of tasks; track task.name) {
    <todo-list-item
      [taskTitle]="task.title"
      [done]="task.done"
      (completed)="doSomethingAfterTaskIsDone()"
    ></todo-list-item>
  }
</ul>
```

<!-- prettier-ignore-end -->

</div>

</div>

<PageNumber/>

<!--

Bald verfügbar: https://angular.dev/guide/components/output-fn

-->
