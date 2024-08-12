---
layout: default
---

# Angular <SubHeading text="Conditionals mit @if"/>

<div class="grid grid-cols-12 gap-6">
<div class="col-span-12">

- Mit `@if {}`/`@else {}` können wir Elemente basierend auf Bedingungen rendern

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
    (Todo)
  }
</li>
```

<!-- prettier-ignore-end -->

</div>

</div>

<PageNumber/>
