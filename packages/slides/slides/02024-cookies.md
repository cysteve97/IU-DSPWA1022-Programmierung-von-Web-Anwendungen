---
layout: default
---

# JavaScript <SubHeading text="Cookies"/>

<div class="grid grid-cols-12 gap-6">
<div class="col-span-12">

- Mit [`document.cookie`](https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie) können wir auf die Cookies der Seite zugreifen
- Beim Schreiben von Cookies können Optionen wie die Lebensdauer oder die Domain, unter der der Cookie gespeichert wird, festgelegt werden. Siehe [Dokumentation](https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie#write_a_new_cookie).

</div>
<div class="col-span-12">

```js
const allCookies = document.cookie; // "key1=value1; key2=value2; ..."

// update a single one
document.cookie = "key1=valueNEW";

const allCookiesAgain = document.cookie; // "key1=valueNEW; key2=value2; ..."

// store cookie that exires
document.cookie = "shortlived=yes;max-age=12345";
```

</div>
</div>

<PageNumber/>
