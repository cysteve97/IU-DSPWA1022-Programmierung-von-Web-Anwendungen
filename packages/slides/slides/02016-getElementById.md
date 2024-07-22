---
layout: default
---

# JavaScript <SubHeading text="getElementById()"/>

<div class="grid grid-cols-12 gap-6">
<div class="col-span-12">

- Mit [`document.getElementById()`](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById) können wir Elemente anhand ihres `id`-Attributs selektieren

</div>
<div class="col-span-12">

```html
<button id="my-btn">Click me</button>
```

```js
const buttonEl = document.getElementById("my-btn");

buttonEl.addEventListener(/* ... */);
```

</div>
</div>

<PageNumber/>
