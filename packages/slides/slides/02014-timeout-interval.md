---
layout: default
---

# JavaScript <SubHeading text="Timeout/Interval"/>

<div class="grid grid-cols-12 gap-6">
<div class="col-span-12">

- Mit [`setTimeout()`](https://developer.mozilla.org/en-US/docs/Web/API/setTimeout) und [`setInterval()`](https://developer.mozilla.org/en-US/docs/Web/API/setInterval) können wir Code nach einer Verzögerung oder wiederholend ausführen
- Mit [`clearTimeout()`](https://developer.mozilla.org/en-US/docs/Web/API/clearTimeout) bzw. [`clearInterval()`](https://developer.mozilla.org/en-US/docs/Web/API/clearInterval) können diese wieder abgebrochen/gestoppt werden

</div>
<div class="col-span-12">

```js
const timeoutId = setTimeout(() => {
  console.log("Delayed for 1 second.");
}, 1000);

const intervalId = setInterval(() => {
  console.log("I run every second");
}, 1000);

clearTimeout(timeoutId);
clearInterval(intervalId);
```

</div>
</div>

<PageNumber/>
