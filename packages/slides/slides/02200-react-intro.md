---
layout: default
---

# React <SubHeading text="Intro"/>

<div class="grid grid-cols-12 gap-6">
<div class="col-span-12">

- Schauen wir uns zunächst [React](https://react.dev/) an
- React-Apps bestehen aus (verschachtelten) Komponenten - eine Komponente kann ein kleiner Button oder die gesamte Seite sein
- React-Komponenten sind JavaScript-Funktionen, die Markup zurückgeben - sie werden in der _JSX_-Syntax geschrieben

<Filename>App.js</Filename>

```jsx
function MyButton() {
  return <button>I'm a button</button>;
}

export default function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton />
    </div>
  );
}
```

</div>
</div>

<PageNumber/>
