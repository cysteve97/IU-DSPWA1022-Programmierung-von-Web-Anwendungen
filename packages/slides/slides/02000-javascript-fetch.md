---
layout: default
---

# JavaScript <SubHeading text="Fetch"/>

<div class="grid grid-cols-12 gap-6">
<div class="col-span-12">

- Mit [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) können wir Seiten interaktiv gestalten (Beispiele: Button-Klicks, Bootstrap-Komponenten)
- Wir können JavaScript auch nutzen, um dynamisch Daten in unsere Webseite zu laden (etwa mit [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API))
- Demo: [dspwa1022.volkmann.dev/interactive/fetch.html](https://dspwa1022.volkmann.dev/interactive/fetch.html)

</div>
<div class="col-span-12">

```js
const res = await fetch("https://jsonplaceholder.typicode.com/posts");
const json = await res.json();
console.log("fetched some json data!");
```

</div>
</div>

<PageNumber/>
