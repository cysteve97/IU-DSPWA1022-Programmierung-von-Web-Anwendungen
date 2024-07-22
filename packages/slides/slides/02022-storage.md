---
layout: default
---

# JavaScript <SubHeading text="Storage"/>

<div class="grid grid-cols-12 gap-6">
<div class="col-span-12">

- Mit [`localStorage`](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) und [`sessionStorage`](https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage) können wir Daten auf einer Webseite persistent speichen
- Beide haben dasselbe Interface
- Der Zugriff auf Daten anderer Domains ist nicht möglich

</div>
<div class="col-span-12">

```js
sessionStorage.setItem("token", "api-key-...");

const yes = sessionStorage.hasItem("token"); // false
const no = sessionStorage.hasItem("something"); // false
const missing = sessionStorage.getItem("something"); // null
const token = sessionStorage.getItem("token"); // "api-key-..."

localStorage.setItem(
  "user-preferences",
  JSON.stringify({
    darkMode: true,
    fontSize: 24,
  }),
);
```

</div>
</div>

<PageNumber/>
