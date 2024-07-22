---
layout: default
---

# React <SubHeading text="Daten anzeigen"/>

<div class="grid grid-cols-12 gap-6">
<div class="col-span-6">

```jsx
const user = {
  name: "Hedy Lamarr",
  imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
  imageSize: 90,
};

export default function Profile() {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={"Photo of " + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize,
        }}
      />
    </>
  );
}
```

</div>

<div class="col-span-6">

- Innerhalb von `{ }` können wir JavaScript-Ausdrücke und somit beliebige Daten anzeigen

</div>

</div>

<PageNumber/>
