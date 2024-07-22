---
layout: default
---

# React <SubHeading text="Conditional Rendering"/>

<div class="grid grid-cols-12 gap-6">
<div class="col-span-6">

```jsx
let content;
if (isLoggedIn) {
  content = <AdminPanel />;
} else {
  content = <LoginForm />;
}
return <div>{content}</div>;
```

```jsx
<div>{isLoggedIn ? <AdminPanel /> : <LoginForm />}</div>
```

</div>

<div class="col-span-6">

- Auch Logik können wir mit Standard-JavaScript-Ausdrücken realisieren
- So können wir etwa basierend auf Bedingungen die eine oder die andere Komponente anzeigen

</div>

</div>

<PageNumber/>
