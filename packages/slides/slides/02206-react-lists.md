---
layout: default
---

# React <SubHeading text="Listen"/>

<div class="grid grid-cols-12 gap-6">
<div class="col-span-6">

```jsx
const products = [
  { title: "Cabbage", isFruit: false, id: 1 },
  { title: "Garlic", isFruit: false, id: 2 },
  { title: "Apple", isFruit: true, id: 3 },
];

export default function ShoppingList() {
  const listItems = products.map((product) => (
    <li
      key={product.id}
      style={{
        color: product.isFruit ? "magenta" : "darkgreen",
      }}
    >
      {product.title}
    </li>
  ));

  return <ul>{listItems}</ul>;
}
```

</div>

<div class="col-span-6">

- Mehrere Elemente (z.B. die `<li>`s innerhalb einer `<ul>`) können wir als reguläres JavaScript-Array in JSX verwenden
- Jedes Element einer Liste benötigt ein `key`-Attribut, um es eindeutig zu identifizieren

![](/images/react-fruit-list.png)

</div>

</div>

<PageNumber/>
