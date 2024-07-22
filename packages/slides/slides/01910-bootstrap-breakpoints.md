---
layout: default
---

# Boostrap <SubHeading text="Breakpoints"/>

<div class="grid grid-cols-12 gap-6">
<div class="col-span-6">

- Boostrap definiert verschiedene [Breakpoints](https://getbootstrap.com/docs/5.3/layout/breakpoints/), um responsive Layouts zu ermöglichen
- Technisch umgesetzt sind diese mit [CSS Media Queries](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries)

| **Breakpoint** | **Breite** |
| -------------- | ---------- |
| _kein_         | < 576px    |
| `sm`           | >= 576px   |
| `md`           | >= 768px   |
| `lg`           | >= 992px   |
| `xl`           | >= 1200px  |
| `xxl`          | >= 1400px  |

</div>
<div class="col-span-6">

![](/images/bootstrap-dist-col-md.png){.max-w-[19rem]}

<Figcaption>col-md-* Klassen im kompilierten bootstrap.css</Figcaption>

</div>
</div>

<PageNumber/>
