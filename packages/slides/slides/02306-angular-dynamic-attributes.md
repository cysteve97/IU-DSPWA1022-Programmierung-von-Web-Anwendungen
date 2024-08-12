---
layout: default
---

# Angular <SubHeading text="Attribute"/>

<div class="grid grid-cols-12 gap-6">
<div class="col-span-12">

- Wir können auch _Inputs_ (im Beispiel `done`) sowie alle Standard-HTML-Attribute (z.B. `class` oder `disabled`) mit der `[]`-Syntax mit dynamischen Daten belegen

</div>

<div class="col-span-6">

<Filename>todo-list-item.component.ts</Filename>

```ts
@Component({
  standalone: true
  selector: "todo-list-item",
  templateUrl: './todo-list-item.component.html',
  styleUrl: './todo-list-item.component.css',
})
export class TodoListItem {

  @Input({
    required: true
  })
  taskTitle: string;

  @Input()
  done = false;

}
```

</div>

<div class="col-span-6">

<Filename>todo-list-item.component.html</Filename>

```html
<li [class.color-red]="!done">{{taskTitle}}</li>
```

<div class="mb-6"></div>

<Filename>todo-list.component.ts</Filename>

<!-- prettier-ignore-start -->

```ts
@Component({
  standalone: true,
  selector: "todo-list",
  imports: [TodoListItem],
  template: `
    <ul>
      <todo-list-item
        taskTitle="Learn Angular"
        [done]="true"
      ></todo-list-item>
    </ul>
  `,
})
export class TodoList {}
```

<!-- prettier-ignore-end -->

</div>

</div>

<PageNumber/>
