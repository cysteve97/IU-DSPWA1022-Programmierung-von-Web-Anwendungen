---
layout: default
---

# JavaScript <SubHeading text="Fetch POST"/>

<div class="grid grid-cols-12 gap-6">
<div class="col-span-12">

- Mit `fetch()` können wir neben `GET`-Request natürlich auch alle anderen Arten von Requests auslösen

</div>
<div class="col-span-12">

```js
const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  body: JSON.stringify({
    title: "A new story...",
  }),
});
const json = await res.json();
```

</div>
</div>

<PageNumber/>
