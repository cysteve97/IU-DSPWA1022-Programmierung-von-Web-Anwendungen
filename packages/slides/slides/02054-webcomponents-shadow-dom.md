---
layout: default
---

# Webcomponents <SubHeading text="Shadow DOM"/>

<div class="grid grid-cols-12 gap-6">
<div class="col-span-12">

- Um die Inhalte einer Webcomponent zu verstecken, kann der [Shadow DOM](https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_shadow_DOM) genutzt werden
- CSS und JavaScript hat dadurch keinen Einfluss auf die Inhalte der Webcomponent
- Als Ersteller des Shadow DOM können wir mittels `mode` entscheiden, ob die umgebende Seite mittels JavaScript darauf zugreifen kann

```js
const host = document.querySelector("#host");
const shadow = host.attachShadow({ mode: "open" });
const span = document.createElement("span");
span.textContent = "I'm in the shadow DOM";
shadow.appendChild(span);
```

</div>
</div>

<PageNumber/>
