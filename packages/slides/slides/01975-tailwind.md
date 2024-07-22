---
layout: default
---

# TailwindCSS <SubHeading text="CSS-Frameworks"/>

<div class="grid grid-cols-12 gap-6">
<div class="col-span-12">

- Das [populärste CSS-Framework zur Zeit](https://2023.stateofcss.com/en-US/css-frameworks/) ist [tailwindcss](https://tailwindcss.com/)
- Es basiert vollständig auf Utility-Klassen (`flex`, `pt-4`, `text-center`, `rotate-90`, usw.)
- Es wird nur das CSS ausgeliefert, das tatsächlich im Projekt verwendet wird

<!-- prettier-ignore-start -->

```html
<figure class="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
  <img class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="/sarah-dayan.jpg" />
  <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
    <blockquote>
      <p class="text-lg font-medium">“Tailwind CSS is the only framework that I've seen scale on large teams...”</p>
    </blockquote>
    <figcaption class="font-medium">
      <div class="text-sky-500 dark:text-sky-400">Sarah Dayan</div>
      <div class="text-slate-700 dark:text-slate-500">
        Staff Engineer, Algolia
      </div>
    </figcaption>
  </div>
</figure>
```
<!-- prettier-ignore-end -->

</div>
</div>

<div class="flex gap-4 text-6xl absolute bottom left">
    <div class="i-devicon-tailwindcss"/>
</div>

<PageNumber/>
