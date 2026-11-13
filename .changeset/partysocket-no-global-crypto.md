---
"partysocket": patch
---

`new PartySocket()` without an `id` no longer throws `ReferenceError: crypto is not defined` where there is no global `crypto` (for example React Native without a polyfill). It uses the fallback id generator, as intended.
