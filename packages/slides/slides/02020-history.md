---
layout: default
---

# JavaScript <SubHeading text="History API"/>

<div class="grid grid-cols-12 gap-6">
<div class="col-span-12">

- Mit der [History API](https://developer.mozilla.org/en-US/docs/Web/API/History_API) können wir programmatisch die Browser-Historie bearbeiten bzw. uns darin bewegen

</div>
<div class="col-span-12">

```js
history.back();
history.forward();

history.go(-2); // number of steps

const numberOfEntries = history.length;

history.pushState(
  {}, // any data
  "unused param",
  "/the-new-url",
);
history.replaceState(
  {}, // any data
  "unused param",
  "/different-url",
);
```

</div>
</div>

<PageNumber/>
