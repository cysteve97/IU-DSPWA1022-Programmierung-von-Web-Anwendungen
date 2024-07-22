---
layout: default
---

# React <SubHeading text="Events"/>

<div class="grid grid-cols-12 gap-6">
<div class="col-span-6">

```jsx
function MyButton() {
  function handleClick() {
    alert("You clicked me!");
  }

  return <button onClick={handleClick}>Click me</button>;
}
```

</div>

<div class="col-span-6">

- Um aus Events (etwa Klicks) zu reagieren, übergeben wir Funktionen an die entsprechenden Komponenten

</div>

</div>

<PageNumber/>
