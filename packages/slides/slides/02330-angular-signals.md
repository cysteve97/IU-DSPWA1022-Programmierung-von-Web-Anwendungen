---
layout: default
---

# Angular <SubHeading text="Signals"/>

<div class="grid grid-cols-12 gap-x-6">
<div class="col-span-12">

- _Signals_ sind ein relativ neuer Mechanismus, um reaktive Anwendungen zu erstellen
- Mit `signal()` erstellen wir ein neues _Signal_, mit `computed()` erstellen wir abgeleitete Werte, mit `effect()` können wir auf Änderungen reagieren

</div>

<div class="col-span-12">

<!-- prettier-ignore-start -->

```ts
import { signal, computed, effect } from '@angular/core';

const count = signal(0);
const doubled = computed(() => count() * 2);

// Gets executed every time the `count` (or `doubled`) changes
effect(() => {
  console.log(`The count is ${count()}, which is half of ${doubled()}`);
});

// Direct update
count.set(1);

// Update via function
count.update(value => value + 1);
```

<!-- prettier-ignore-end -->

</div>

</div>

<PageNumber/>
