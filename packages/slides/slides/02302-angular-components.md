---
layout: default
---

# Angular <SubHeading text="Komponenten"/>

<div class="grid grid-cols-12 gap-6">
<div class="col-span-12">

- Üblicherweise teilt man den Code der _Klasse_ (`ts`), des _Templates_ (`html`) und der _Styles_ (`css`) in drei Dateien auf, um die Komponenten übersichtlich zu halten
- In den Metadaten der Komponente werden diese Dateien dann angegeben

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
export class TodoListItem {}
```

</div>

<div class="col-span-6">

<Filename>todo-list-item.component.html</Filename>

```html
<li>Learn Angular</li>
```

<div class="mb-6"></div>

<Filename>todo-list-item.component.css</Filename>

```css
li {
  color: red;
}
```

</div>

</div>

<PageNumber/>
