---
layout: default
---

# TailwindCSS <SubHeading text="CSS-Frameworks"/>

<div class="grid grid-cols-12 gap-6">
<div class="col-span-12">

- Im Gegensatz zu Bootstrap generiert Tailwind das CSS dynamisch und wird daher in den Build-Prozess der Webseite eingebunden
- Es gibt mehrere Möglichkeiten der Einbindung: [CLI](https://tailwindcss.com/docs/installation), [Postcss](https://tailwindcss.com/docs/installation/using-postcss), [Framework-Spezifisch](https://tailwindcss.com/docs/installation/framework-guides)
- Für die schnelle Integration zu Testzwecken existiert das [Play CDN](https://tailwindcss.com/docs/installation/play-cdn), womit das nötige CSS dynamisch im Browser generiert wird (somit ist kein Build-Prozess notwendig)

<Filename>tailwind-play-cdn.html</Filename>

```html
<!doctype html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <script src="https://cdn.tailwindcss.com"></script>
  </head>
  <body>
    <h1 class="text-3xl font-bold underline">Hello world!</h1>
  </body>
</html>
```

</div>
</div>

<PageNumber/>
