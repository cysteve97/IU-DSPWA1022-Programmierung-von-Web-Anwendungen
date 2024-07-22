---
layout: default
---

# CSS <SubHeading text="Klassen"/>

<div class="grid grid-cols-12 gap-6">
<div class="col-span-12">

- Die meisten Styles werden mittels _CSS-Klassen_ vergeben, also Selektoren der Form `.my-class-name`
- Dabei wird das [`class="..."`-Attribut](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/class) im HTML genutzt, um die Klassen zuzuweisen
- Klassen können auch verwendet werden, um in JavaScript Elemente zu selektieren (z.B. [`document.querySelector('.my-class-name')`](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector))

</div>
<div class="col-span-6">

<Filename>index.html</Filename>

```html
<head>
  <link rel="stylesheet" href="/styles.css" />
</head>

<body>
  <h1 class="text-bold color-red">Heading</h1>
  <p>This paragraph does not have any classes</p>
</body>
```

</div>

<div class="col-span-6">

<Filename>style.css</Filename>

```css
.text-bold {
  font-weight: bold;
}

.color-red {
  color: #bf1919;
}
```

</div>
</div>

<PageNumber/>
