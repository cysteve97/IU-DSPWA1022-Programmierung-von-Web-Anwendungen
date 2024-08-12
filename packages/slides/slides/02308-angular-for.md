---
layout: default
---

# Angular <SubHeading text="Loops mit @for"/>

<div class="grid grid-cols-12 gap-6">
<div class="col-span-12">

- Mit `@for {}` können wir Listen von Elementen rendern

</div>

<div class="col-span-6">

<Filename>todo-list.component.ts</Filename>

<!-- prettier-ignore-start -->

```ts
@Component({
  standalone: true,
  selector: "todo-list",
  imports: [TodoListItem],
  templateUrl: './todo-list.component.html',
})
export class TodoList {

  tasks = [
    { name: 'Learn Angular', done: false },
    { name: 'Use For Loop', done: true },
  ]

}
```

<!-- prettier-ignore-end -->

</div>

<div class="col-span-6">

<Filename>todo-list.component.html</Filename>

<!-- prettier-ignore-start -->

```html
<ul>
  @for (task of tasks; track task.name) {
    <todo-list-item
      [taskTitle]="task.title"
      [done]="task.done"
    ></todo-list-item>
  }
</ul>
```

<!-- prettier-ignore-end -->

</div>

</div>

<PageNumber/>
