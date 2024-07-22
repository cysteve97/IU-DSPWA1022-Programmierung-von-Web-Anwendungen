---
layout: default
---

# JavaScript <SubHeading text="visibilityState"/>

<div class="grid grid-cols-12 gap-6">
<div class="col-span-12">

- Anhand von [`document.visibilityState`](https://developer.mozilla.org/en-US/docs/Web/API/Document/visibilityState) können wir prüfen, ob das aktuelle Fenster (oder Tab) aktiv ist oder etwa im Hintergrund, minimiert, etc.
- Der Wert ist entweder `visible` oder `hidden`

</div>
<div class="col-span-12">

```js
document.addEventListener("visibilitychange", () => {
  console.log(document.visibilityState);
  // Modify behavior…
});
```

</div>
</div>

<PageNumber/>
