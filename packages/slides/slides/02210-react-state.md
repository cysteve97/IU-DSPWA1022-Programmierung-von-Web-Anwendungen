---
layout: default
---

# React <SubHeading text="State"/>

<div class="grid grid-cols-12 gap-6">
<div class="col-span-6">

<!-- prettier-ignore-start -->


```jsx
import { useState } from "react";

function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
  );
}
```

<!-- prettier-ignore-end -->

</div>

<div class="col-span-6">

- Mit `useState()` können wir unseren Komponenten _State_ hinzufügen; dadurch können sie sich Daten und Zustände "merken"
- `useState()` gibt uns einen _Getter_ und einen _Setter_, um den State auszulesen oder zu manipulieren

![](/images/react-counters.gif)

</div>

</div>

<PageNumber/>
