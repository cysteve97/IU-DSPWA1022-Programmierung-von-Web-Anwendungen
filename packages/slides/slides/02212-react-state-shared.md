---
layout: default
---

# React <SubHeading text="State"/>

<div class="grid grid-cols-12 gap-6">
<div class="col-span-6">

<!-- prettier-ignore-start -->


```jsx
import { useState } from 'react';

export default function MyApp() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Counters that update together</h1>
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />
    </div>
  );
}

function MyButton({ count, onClick }) {
  return (
    <button onClick={onClick}>Clicked {count} times</button>
  );
}
```

<!-- prettier-ignore-end -->

</div>

<div class="col-span-6">

- Nicht immer soll der State nur innerhalb einer Komponente verfügbar sein
- Dann können wir über _Props_ den Zustand und auch die Handler-Funktionen aus anderen Komponenten übergeben
- So kann eine _react_-ive Komponenten-Hierarchie aufgebaut werden

</div>

</div>

<PageNumber/>
