---
layout: default
---

# JavaScript <SubHeading text="querySelector() / querySelectorAll()"/>

<div class="grid grid-cols-12 gap-6">
<div class="col-span-12">

- Mit [`document.querySelector()`](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector) und [`document.querySelectorAll()`](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll) können wir ein oder mehrere Elemente selektieren
- Die Selektor-Syntax ist dieselbe wie bei CSS

</div>
<div class="col-span-12">

```html
<p>Normal paragraph</p>
<p class="subtext">Another paragraph</p>

<button>Click me</button>
```

```js
document.querySelectorAll("p"); // 2 elements

document.querySelector("p"); // the first p
document.querySelector("p.subtext"); // the second p
document.querySelector(".subtext"); // the second p
document.querySelector("button"); // the button

document.querySelector("h1"); // null
```

</div>
</div>

<PageNumber/>
