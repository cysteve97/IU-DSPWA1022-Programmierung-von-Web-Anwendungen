---
layout: default
---

# TailwindCSS <SubHeading text="Breakpoints"/>

<div class="grid grid-cols-12 gap-6">
<div class="col-span-12">

- Ähnlich wie bei Bootstrap gibt es bei Tailwind verschiedene Breakpoints für die Darstellung auf unterschiedlichen Bildschirmgrößen
- Die Breakpoints werden als Prefix den Klassennamen vorangestellt
- Die Breakpoints können bei Bedarf erweitert/angepasst werden

```html
<!-- Width of 16 by default, 32 on medium screens, and 48 on large screens -->
<img class="w-16 md:w-32 lg:w-48" src="..." />
```

| **Prefix** | **Min. Width** |
| ---------- | -------------- |
| `sm`       | 640px          |
| `md`       | 768px          |
| `lg`       | 1024px         |
| `xl`       | 1280px         |
| `xxl`      | 1536px         |

</div>
</div>

<PageNumber/>
