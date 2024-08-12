---
layout: default
---

# Angular <SubHeading text="Inputs"/>

<div class="grid grid-cols-12 gap-6">
<div class="col-span-12">

- Mit _Inputs_ können wir dynamische Daten in Komponenten hereingeben
- Im Template können wir mittels `{{}}` auf die Felder der Klasse zugreifen

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

}
```

</div>

<div class="col-span-6">

<Filename>todo-list-item.component.html</Filename>

```html
<li>{{taskTitle}}</li>
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
