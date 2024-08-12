---
layout: default
---

# Angular <SubHeading text="Event-Handling"/>

<div class="grid grid-cols-12 gap-6">
<div class="col-span-12">

- Das "Gegenteil" der `[]`-Syntax ist die `()`-Syntax, mit der wir auf Events reagieren können

</div>

<div class="col-span-6">

<Filename>todo-list-item.component.ts</Filename>

<!-- prettier-ignore-start -->

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

<!-- prettier-ignore-end -->

</div>

<div class="col-span-6">

<Filename>todo-list-item.component.html</Filename>

<!-- prettier-ignore-start -->

```html
<li>
  {{taskTitle}}

  @if (done) {
    (Done)
  } @else {
    <button (click)="done = true">
      Complete
    </button>
  }
</li>
```

<!-- prettier-ignore-end -->

</div>

</div>

<PageNumber/>
