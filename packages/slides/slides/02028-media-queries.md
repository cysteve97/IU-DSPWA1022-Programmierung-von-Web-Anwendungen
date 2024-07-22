---
layout: default
---

# JavaScript <SubHeading text="matchMedia"/>

<div class="grid grid-cols-12 gap-6">
<div class="col-span-12">

- Mit [`matchMedia`](https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia) können wir prüfen, ob eine gewisse Media Query zutrift (oder sich ändert)
- Damit können Dinge wie Dark-Mode, die Geräteorientierung oder Prefers-Reduced-Motion erkannt werden

</div>
<div class="col-span-12">

```js
const mediaQueryList = window.matchMedia("(orientation: portrait)");

// Define a callback function for the event listener.
function handleOrientationChange(evt) {
  if (evt.matches) {
    /* The viewport is currently in portrait orientation */
  } else {
    /* The viewport is currently in landscape orientation */
  }
}

// Run the orientation change handler once.
handleOrientationChange(mediaQueryList);

// Add the callback function as a listener to the query list.
mediaQueryList.addEventListener("change", handleOrientationChange);
```

</div>
</div>

<PageNumber/>
